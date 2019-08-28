import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../../clients.service'

import * as Chart from 'chart.js'
import { Observable, forkJoin } from 'rxjs';
import { ClientStats } from '../../client';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  canvas: any
  ctx: any
  stats: ClientStats

  constructor(private clientService: ClientsService) { }

  async ngOnInit() {
    let p = await this.clientService.getStats()
    p.subscribe(result => {
      this.stats = result
    })
  }

  async ngAfterViewInit() {
    let p = await this.clientService.getClients()
    let p2 = await this.clientService.getStats()
    this.canvas = document.getElementById('myChart');
    this.ctx = this.canvas.getContext('2d');

    forkJoin(p, p2).subscribe(data => {
      let clients = data[0].clients
      let stats = data[1]
    let myChart = new Chart(this.ctx, {
      type: 'line',
      data: {
          labels: clients.map(c => c.name),
          datasets: [{
            label: 'Age',
            data: clients.map(c => c.age),
            borderWidth: 1
        },
        {
          label: 'Avg',
          data: clients.map(c => stats.average),
          borderWidth: 1,
          borderColor: 'rgba(255, 99, 132, 1)',
          backgroundColor: 'rgba(0, 0, 0, 0)'
      },
      {
        label: 'Dev 1',
        data: clients.map(c => stats.average+stats.standardDeviation),
        borderWidth: 1,
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(0, 0, 0, 0)'
    },
    {
      label: 'Dev 2',
      data: clients.map(c => stats.average-stats.standardDeviation),
      borderWidth: 1,
      borderColor: 'rgba(54, 162, 235, 1)',
      backgroundColor: 'rgba(0, 0, 0, 0)'
  }]
      },
      options: {
        responsive: false,
        display:true
      }
    });
    }, () => {})
  }

}

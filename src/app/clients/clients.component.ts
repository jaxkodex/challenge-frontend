import { Component, OnInit } from '@angular/core';

import { ClientsService } from '../clients.service'

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.sass']
})
export class ClientsComponent implements OnInit {

  clients = []

  constructor(private clientService: ClientsService) { }

  async ngOnInit() {
    let p = await this.clientService.getClients()
    p.subscribe(results => {
      this.clients = results.clients
    }, () => alert('Error!'))
  }

}

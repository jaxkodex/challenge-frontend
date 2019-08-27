import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { ClientsService } from '../../clients.service'

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.sass']
})
export class NewComponent implements OnInit {

  constructor(private clientsService: ClientsService, public router: Router) { }

  ngOnInit() {
  }

  async create(name, lastName, birthDate) {
    let p = await this.clientsService.create({name, lastName, birthDate, age: 0})
    p.subscribe(result => {
      this.router.navigate(["clients"]);
    }, () => alert('Error!'))
  }

}

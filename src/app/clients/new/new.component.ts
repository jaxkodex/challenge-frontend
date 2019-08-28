import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import * as moment from 'moment'

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
    if (!name || !lastName || !birthDate) {
      alert('Por favor ingrese toda la información del formulario')
      return
    }
    if (!moment(birthDate).isValid()) {
      alert('La fecha no es válida')
      return
    }
    let s = moment(birthDate).toDate()
    let p = await this.clientsService.create({name, lastName, birthDate: s, age: 0})
    p.subscribe(result => {
      this.router.navigate(["clients"]);
    }, () => alert('Error!'))
  }

}

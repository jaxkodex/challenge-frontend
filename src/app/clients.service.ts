import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Client, ClientListResults, ClientStats } from "./client";
import { AuthService } from "./auth/auth.service";
import { Observable } from "rxjs";

import {environment} from '../environments/environment'

@Injectable({
  providedIn: "root"
})
export class ClientsService {
  private url = environment.baseUrl+"/clients";
  private REQUEST_SIZE = '999999'

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) {}

  public async create(client: Client): Promise<Observable<Client>> {
    let token = await this.authService.user.getIdToken();
    return this.httpClient.post<Client>(this.url, client, {
      headers: {
        Authorization: "Bearer " + token
      }
    });
  }

  public async getClients(): Promise<Observable<ClientListResults>> {
    let token = await this.authService.user.getIdToken();
    return this.httpClient.get<ClientListResults>(this.url, {
      headers: {
        Authorization: "Bearer " + token
      },
      params: {
        size: this.REQUEST_SIZE
      }
    })
  }

  public async getStats(): Promise<Observable<ClientStats>> {
    let token = await this.authService.user.getIdToken();
    return this.httpClient.get<ClientStats>(this.url+'/kpi', {
      headers: {
        Authorization: "Bearer " + token
      },
      params: {
        size: this.REQUEST_SIZE
      }
    });
  }
}

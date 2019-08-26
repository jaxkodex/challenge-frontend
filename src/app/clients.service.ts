import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Client, ClientListResults } from "./client";
import { AuthService } from "./auth/auth.service";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ClientsService {
  private url = "http://localhost:8080/clients";

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
      }
    });
  }
}

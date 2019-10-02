import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class RegisterService {

  private cepRequestURL = 'https://viacep.com.br/ws/{{cepURL}}/json';

  constructor(private http: HttpClient) { }

  getDadosCEP(cep: string) {
    const url = this.cepRequestURL.replace('{{cepURL}}', cep)
    return this.http.get(url)
  }
}

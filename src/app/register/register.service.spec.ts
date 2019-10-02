import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient } from "@angular/common/http";
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { RegisterService } from './register.service';

describe('RegisterService - Unit Test', () => {
  let service: RegisterService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegisterService],
      imports: [HttpClientTestingModule]
    });

    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(RegisterService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('deveria instanciar service', () => {
    expect(service).toBeTruthy();
  });

  it('deveria fazer requisicao GET com cep 31617-340', () => {
    const mockCourse =
    {
      cep: "13617-340",
      logradouro: "Rua Doutor Mário A. Teixeira Freitas",
      complemento: "",
      bairro: "Barra Funda",
      localidade: "Leme",
      uf: "SP",
      unidade: "",
      ibge: "3526704",
      gia: "4157"
    };

    service.getDadosCEP('13617-340')
      .subscribe((cepData: any) => {
        expect(cepData.cep).toEqual('13617-340');
        expect(cepData.logradouro).toEqual('Rua Doutor Mário A. Teixeira Freitas');
        expect(cepData.bairro).toEqual('Barra Funda');
        expect(cepData.localidade).toEqual('Leme');
        expect(cepData.uf).toEqual('SP');
      });

    const req = httpTestingController.expectOne('https://viacep.com.br/ws/13617-340/json');

    expect(req.request.method).toEqual('GET');

    req.flush(mockCourse);
  });
});



// https://medium.com/better-programming/testing-http-requests-in-angular-with-httpclienttestingmodule-3880ceac74cf
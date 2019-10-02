import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { RegisterService } from './register.service';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentRef } from '@angular/core';

describe('RegisterComponent - Unit Test', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [HttpClientTestingModule],
      providers: [RegisterService]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deveria instanciar componente Registro', () => {
    expect(component).toBeTruthy();
  });

  it('deveria retornar mensagem de erro quando senhas diferentes', () => {
    component.senha = 'Test-123'
    component.senhaConfirmada = 'Test-321'
    const message = component.validarSenhasIquais();

    expect(message).not.toBeNull();
    expect(message).toEqual('Senhas devem ser iguais');
  });

  it('deveria retornar mensagem vazia quando senhas iguais', () => {
    component.senha = 'Test-123'
    component.senhaConfirmada = 'Test-123'
    const message = component.validarSenhasIquais();

    expect(message).toEqual('');
  });

  it('deveria retornar mensagem com erro quando senha nao letras minusculas', () => {
    component.senha = 'TEST-123'
    
    const message = component.validarQualidadeSenha();

    expect(message).toEqual('Senha deve letras minúsculas');
  });

  it('deveria retornar mensagem com erro quando senha nao contem letras maiusculas', () => {
    component.senha = 'test-123'
    
    const message = component.validarQualidadeSenha();

    expect(message).toEqual('Senha deve conter letra maiúsculas');
  });

  it('deveria retornar mensagem com erro quando senha nao contem letras maiusculas', () => {
    component.senha = 'Test-'
    
    const message = component.validarQualidadeSenha();

    expect(message).toEqual('Senha deve conter números');
  });

  it('deveria retornar mensagem vazia quando senha valida', () => {
    component.senha = 'Test-123'
    
    const message = component.validarQualidadeSenha();

    expect(message).toEqual('');
  });

});

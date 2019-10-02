import { Component, OnInit } from '@angular/core';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public nome;
  public sobrenome;
  public email;
  public cpf;
  public senha;
  public senhaConfirmada;

  public cep;
  public logradouro;
  public bairro;
  public cidade;
  public estado;
  public pais;

  constructor(private registerService: RegisterService) { }

  ngOnInit() {
    this.cep = '';
    this.logradouro = '';
    this.bairro = '';
    this.cidade = '';
    this.estado = '';
    this.pais = '';

  }

  validarAvancar() {
    if (this.validarSenhasIquais() && this.validarQualidadeSenha() && this.validarPendenciasDoCliente()) {
      console.log('....');
    }
  }

  validarSenhasIquais() {
    if (this.senha != this.senhaConfirmada) {
      return 'Senhas devem ser iguais';
    }
    return '';
  }

  validarQualidadeSenha() {
    if (!/[a-z]/.test(this.senha)) {
      return 'Senha deve letras minúsculas';
    } else if (!/[A-Z]/.test(this.senha)) {
      return 'Senha deve conter letra maiúsculas';
    } else if (!/[0-9]/.test(this.senha)) {
      return 'Senha deve conter números';
    }
    return ''
  }

  validarPendenciasDoCliente() {
    return '';
  }

  pesquisarCEP(event) {    
    if (!event.value) {
      return 'CEP deve ser preenchido';
    }

    this.registerService.getDadosCEP(event.value)
      .subscribe(
        (data: any) => {
          this.logradouro = data.logradouro;
          this.bairro = data.bairro;
          this.cidade = data.localidade
          this.estado = data.uf;
          this.pais = 'Brasil'
        },
        (erro) => {
          this.logradouro = '';
          this.bairro = '';
          this.cidade = ''
          this.estado = '';
          this.pais = ''

          return 'Um erro ocorreu ao realizar consulta';
        });
    return 'Consulta executada com sucesso'
  }
}

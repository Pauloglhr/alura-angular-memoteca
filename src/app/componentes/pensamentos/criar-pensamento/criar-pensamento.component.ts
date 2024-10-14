import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrl: './criar-pensamento.component.css'
})
export class CriarPensamentoComponent implements OnInit{

  formulario!: FormGroup;

  constructor(
    private service: PensamentoService,
    private router: Router,
    private formBuild: FormBuilder
  ){}

  ngOnInit(): void {
    this.formulario = this.formBuild.group({
      conteudo: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/(.|\s)*\S(.|\s)*/)
      ])],
      autoria: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(/^[a-zá-ü]+$/)
      ])],
      modelo: ['modelo1']
    })
  }

  salvarPensamento() {
    if(this.formulario.valid){
      this.service.criar(this.formulario.value).subscribe(()=> {
        this.router.navigate(['listarPensamentos'])
      })
      alert("O pensamento foi salvo com sucesso!")
    }
  }

  cancelar() {
    this.router.navigate(['listarPensamentos'])
    alert("Ação cancelada!")
  }

  verificarBotao(): string {
    if(this.formulario.valid){
      return 'botao'
    } else {
      return 'botao__desabilitado'
    }
  }
}

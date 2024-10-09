import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

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
      conteudo: ['Iniciando desenvolvimento com formulários reativos.'],
      autoria: ['Dev.Form'],
      modelo: ['modelo1']
    })
  }

  salvarPensamento() {
    this.service.criar(this.formulario.value).subscribe(()=> {
      this.router.navigate(['listarPensamentos'])
    })
    alert("O pensamento foi salvo com sucesso!")
  }

  cancelar() {
    this.router.navigate(['listarPensamentos'])
    alert("Ação cancelada!")
  }
}

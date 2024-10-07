import { Component } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrl: './criar-pensamento.component.css'
})
export class CriarPensamentoComponent {
  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  constructor(
    private service: PensamentoService,
    private router: Router
  ){}

  salvarPensamento() {
    this.service.criar(this.pensamento).subscribe(()=> {
      this.router.navigate(['listarPensamentos'])
    })
    alert("O pensamento foi salvo com sucesso!")
  }

  cancelar() {
    this.router.navigate(['listarPensamentos'])
    alert("Ação cancelada!")
  }
}

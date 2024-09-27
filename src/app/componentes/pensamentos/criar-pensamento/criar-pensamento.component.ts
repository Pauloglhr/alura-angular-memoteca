import { Component } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrl: './criar-pensamento.component.css'
})
export class CriarPensamentoComponent {
  pensamento = {
    id: '1',
    conteudo: 'Angular 14',
    autoria: 'Dev',
    modelo: ''
  }

  salvarPensamento() {
    alert("O pensamento foi salvo com sucesso!")
  }

  cancelar() {
    alert("Ação cancelada!")
  }
}

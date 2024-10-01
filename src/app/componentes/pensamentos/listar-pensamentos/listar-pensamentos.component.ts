import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrl: './listar-pensamentos.component.css'
})
export class ListarPensamentosComponent {
  listaPensamentos = [
    {
      conteudo: '',
      autoria: '',
      modelo: ''
    }
  ];
}

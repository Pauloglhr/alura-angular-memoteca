import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrl: './listar-pensamentos.component.css'
})
export class ListarPensamentosComponent {
  listaPensamentos: Pensamento[] = [];

  paginaAtual: number = 1;
  haMaisPensamentos: boolean = true;
  filtro: string = '';
  favoritos: boolean = false;
  listaFavoritos: Pensamento[] = [];
  titulo: string = 'Meu mural'

  constructor(
    private service: PensamentoService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.service.listar(this.paginaAtual, this.filtro, this.favoritos).subscribe((listaPensamentos)=> {
      this.listaPensamentos = listaPensamentos;
    })
  }

  carregarMaisPensamentos(){
    this.service.listar(++this.paginaAtual, this.filtro, this.favoritos).subscribe(
      listaPensamentos => {
        this.listaPensamentos.push(...listaPensamentos)
        if(!listaPensamentos.length){
          this.haMaisPensamentos = false;
        }
      }
    )
  }

  pesquisarPensamentos(){
    this.haMaisPensamentos = true;
    this.paginaAtual = 1;
    this.service.listar(this.paginaAtual, this.filtro, this.favoritos)
      .subscribe(listaPensamentos => {
        this.listaPensamentos = listaPensamentos
      })
  }

  listarFavoritos(){
    this.titulo = 'Meus favoritos'
    this.favoritos = true
    this.haMaisPensamentos = true;
    this.paginaAtual = 1;
    this.service.listar(this.paginaAtual, this.filtro, this.favoritos)
      .subscribe(listaDeFavoritos => {
        this.listaPensamentos = listaDeFavoritos;
        this.listaFavoritos = listaDeFavoritos;
      })
  }

  recarregarComponente(){
    this.titulo = 'Meu mural'
    this.paginaAtual = 1;
    this.favoritos = false;
    this.route.navigate([this.route.url])
  }
}
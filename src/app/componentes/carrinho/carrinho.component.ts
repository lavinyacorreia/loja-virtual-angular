import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from 'src/app/servicos/carrinho.service';
import { Produto } from 'src/app/models/produto.model';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  constructor(
    private carrinhoService: CarrinhoService
  ) { }

  ngOnInit(): void {
  }

  adicionarCarrinho(produto: Produto){
    return this.carrinhoService.adicionar(produto);
  }

  removerCarrinho(id: number){
    return this.carrinhoService.remover(id);
  }

  get itens() {
    return this.carrinhoService.itens;
  }

  get total() {
    return this.carrinhoService.total;
  }

}

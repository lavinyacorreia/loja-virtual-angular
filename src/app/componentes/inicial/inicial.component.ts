import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/models/produto.model';
import { ProdutoService } from 'src/app/servicos/produto.service';

@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.component.html',
  styleUrls: ['./inicial.component.css']
})
export class InicialComponent implements OnInit {

  produtos: Produto[] = [];

  constructor(private produtoService: ProdutoService,
    private router: Router) { }

  ngOnInit(): void {
    this.produtos = this.produtoService.listarTodos();
  }
  adicionarCarrinho(){
    this.router.navigate(['/carrinho']);
  }

}

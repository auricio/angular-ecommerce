import { NotificacaoService } from 'src/app/notificacao.service';
import { IProdutoCarrinho } from './../produtos';
import { CarrinhoService } from './../carrinho.service';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  itensNoCarrinho: IProdutoCarrinho[] = [];

  total: number = 0.0;

  constructor(private carrinhoService: CarrinhoService,
              private notificacaoService: NotificacaoService,
              private router: Router) { }

  ngOnInit(): void {
    this.itensNoCarrinho = this.carrinhoService.obtemCarrinho();
  }

  removeItem(produtoId: number) {
    this.carrinhoService.removeItem(produtoId);
    this.itensNoCarrinho = this.carrinhoService.obtemCarrinho();
  }

  valorTotalItens() : number {
    this.total = this.itensNoCarrinho.reduce( (previous, current) => previous + (current.preco * current.quantidadeComprada), 0);
    
    return this.total;
  }

  comprar() {
    this.carrinhoService.limparCarrinho();
    this.itensNoCarrinho = [];
    this.notificacaoService.notificar("Compra concluída COM SUCESSO!");
    this.router.navigate(["produtos"]);
  }
}

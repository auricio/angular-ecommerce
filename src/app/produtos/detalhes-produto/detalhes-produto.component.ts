import { IProdutoCarrinho } from './../../produtos';
import { CarrinhoService } from './../../carrinho.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotificacaoService } from 'src/app/notificacao.service';
import { IProduto } from 'src/app/produtos';
import { ProdutosService } from 'src/app/produtos.service';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})
export class DetalhesProdutoComponent implements OnInit {

  produto: IProduto | undefined;

  quantidade = 1;

  constructor(private produtosService: ProdutosService,
              private route: ActivatedRoute,
              private notificacaoService: NotificacaoService,
              private carrinhoService: CarrinhoService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const produtoId = routeParams.get("id");
    this.produto = this.produtosService.getOne( Number(produtoId) );
  }

  adicionarAoCarrinho() {
    const produtoCarrinho: IProdutoCarrinho = {
      ...this.produto!,
      quantidadeComprada: this.quantidade
    }

    this.carrinhoService.adicionaAoCarrinho(produtoCarrinho);

    this.notificacaoService.notificar(`Produto ${this.produto?.id} - ${this.produto?.descricao} adicionado ao carrinho`);
  }
}

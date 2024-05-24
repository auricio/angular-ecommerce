import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IProduto } from '../produtos';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  listaProdutos: IProduto[] | undefined;

  constructor(private produtosService: ProdutosService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const produtos = this.produtosService.getAll();

    this.route.queryParamMap.subscribe(params => {
      const descricao = params.get("descricao")?.toLowerCase();

      if (descricao) {
        this.listaProdutos = produtos.filter(produto => produto.descricao.toLowerCase().includes(descricao));
        return;
      }

      this.listaProdutos = produtos;
    });
  }

}

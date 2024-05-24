import { CarrinhoService } from './../carrinho.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private carrinhoService: CarrinhoService) { }

  ngOnInit() : void {
  }

  quantidadeDeItensNoCarrinho(): number {
    return this.carrinhoService.quantidadeItensCarrinho();
  }
}

import { Injectable } from '@angular/core';
import { IProdutoCarrinho } from './produtos';

@Injectable({providedIn: 'root'})
export class CarrinhoService {
  itensComprados: IProdutoCarrinho[] = [];

  constructor() { }

  obtemCarrinho() {
    this.itensComprados = JSON.parse(localStorage.getItem("carrinho") || "[]");
    return this.itensComprados;
  }

  adicionaAoCarrinho(produto: IProdutoCarrinho) {
    this.itensComprados.push(produto);
    localStorage.setItem("carrinho", JSON.stringify(this.itensComprados));
  }

  limparCarrinho() {
    this.itensComprados = [];
    localStorage.removeItem("carrinho");
  }

  quantidadeItensCarrinho(): number {
    return this.itensComprados.length;
  }

  removeItem(idProduto: number) {
    this.itensComprados = 
          this.itensComprados.filter(itemComprado => itemComprado.id != idProduto);
    localStorage.setItem("carrinho", JSON.stringify(this.itensComprados));
  }
}

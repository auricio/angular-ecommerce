import { Injectable } from '@angular/core';
import { IProduto, produtos } from './produtos';

@Injectable({providedIn: 'root'})
export class ProdutosService {

  listaProdutos: IProduto[] = produtos;
  
  constructor() { }
  
  getAll() {
    return this.listaProdutos;
  }

  getOne(idProduto: number) {
    return(this.listaProdutos.find(produto => produto.id === idProduto));
  }
}
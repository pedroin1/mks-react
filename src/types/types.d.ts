export interface ProdutoIO {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProdutoCompleto {
  produto: ProdutoIO;
  quantidade: number;
}

export interface ProdutoResponse {
  products: ProdutoIO[];
  count: number;
}

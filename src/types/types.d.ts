export interface ProdutoIO {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProdutoResponse {
  products: ProdutoIO[];
  count: number;
}

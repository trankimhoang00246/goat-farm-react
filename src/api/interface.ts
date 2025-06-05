export interface ProductPrice {
  size: string;
  price: string;
}

export interface Product {
  id: number;
  name: string;
  price: ProductPrice[];
  description: string;
  image: string;
}

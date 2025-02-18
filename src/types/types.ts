export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
  quantity?: number;
  rating: {
    rate: number;
    count: number;
  }
}
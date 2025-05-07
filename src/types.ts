export type Product = {
    id: number;
    name: string;
    price: number;
  };
  
  export type CartItem = Product & {
    qty: number;
  };
  
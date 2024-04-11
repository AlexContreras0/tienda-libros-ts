type TBook = {
  id: number;
  name: string;
  image: string;
  author: string;
  price: number;
};

type TCartItem = TBook & {
  quantity: number;
};

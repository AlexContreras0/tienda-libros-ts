type TBookProps = {
  libro: TBook;
  addToCart: (item: TBook) => void;
};

export default function Book({ libro, addToCart }: TBookProps) {
  const { name, price, author, image } = libro;
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 ">
      <img
        className="h-[150px] w-[100px]"
        src={`/img/${image}.webp`}
        alt="portada del libro"
      />

      <div className="flex flex-col items-center md:items-start gap-1 w-72">
        <h2 className="text-lg text-primary font-bold uppercase">{name}</h2>
        <p>{author}</p>
        <p className="font-bold text-xl text-primary">{price}€</p>
        <button
          type="button"
          onClick={() => addToCart(libro)}
          className="orangeButton"
        >
          Añadir al carrito
        </button>
      </div>
    </div>
  );
}

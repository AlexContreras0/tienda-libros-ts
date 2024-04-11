import logo from "../assets/logo-bookea.png";
import imagenFondo from "../assets/imagenFondo.jpg";
import { useState } from "react";

type TNavMenuProps = {
  cart: TCartItem[];
  removeFromCart: (id: TBook["id"]) => void;
  increaseQuantity: (id: TBook["id"]) => void;
  decreaseQuantity: (id: TBook["id"]) => void;
  clearCart: () => void;
  isEmpty: boolean;
  cartTotal: number;
};

export default function NavMenu({
  cart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
  isEmpty,
  cartTotal,
}: TNavMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      style={{ backgroundImage: `url(${imagenFondo})` }}
      className="bg-cover bg-center flex flex-col sm:flex-row gap-6 sm:gap-0 items-center place-content-between py-8 px-20 sticky"
    >
      <div>
        <a href="/">
          <img className="h-16 sm:h-20 sm:w-auto" src={logo} alt="" />
        </a>
      </div>
      <nav>
        <div>
          <button
            className="hover:scale-105 transition-all"
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <svg
              className="w-10 h-10 fill-white"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
            </svg>
          </button>

          {isOpen && (
            <div className="bg-white absolute p-10 rounded-md flex flex-col right-6 ">
              {isEmpty ? (
                <p className="text-center">El carrito está vacío</p>
              ) : (
                <>
                  <div className="flex flex-col gap-4">
                    <div>
                      <ul className="grid grid-cols-3 gap-2 font-bold">
                        <li>Nombre</li>
                        <li>Precio</li>
                        <li>Cantidad</li>
                      </ul>
                    </div>
                    <span className="w-full border-[0.2px] rounded opacity-70"></span>

                    {cart.map((libro) => (
                      <ul
                        className="grid grid-cols-3 items-center gap-2"
                        key={libro.id}
                      >
                        <li className="max-w-28 leading-4 flex place-content-start mb-4">
                          {libro.name}
                        </li>
                        <li className="flex place-content-start mb-4 font-bold">
                          {libro.price}€
                        </li>
                        <li className="flex place-content-start gap-2 mb-4">
                          <button
                            className="bg-black rounded-sm px-2 h-6 w-6 flex items-center justify-center text-white font-bold text-lg"
                            type="button"
                            onClick={() => decreaseQuantity(libro.id)}
                          >
                            -
                          </button>

                          {libro.quantity}

                          <button
                            className="bg-black rounded-sm px-2 h-6 w-6 flex items-center justify-center text-white font-bold text-lg"
                            type="button"
                            onClick={() => increaseQuantity(libro.id)}
                          >
                            +
                          </button>

                          <button
                            className="bg-red-500 px-2 h-6 w-6 flex rounded-full items-center justify-center text-white font-bold text-lg"
                            type="button"
                            onClick={() => removeFromCart(libro.id)}
                          >
                            X
                          </button>
                        </li>
                      </ul>
                    ))}
                    <span className="w-full border-[0.2px] rounded opacity-70"></span>
                  </div>

                  <p className="my-4">
                    Total a pagar:{" "}
                    <span className="font-bold text-lg">{cartTotal}€</span>
                  </p>

                  <button
                    className="bg-black text-white rounded w-full p-2"
                    type="button"
                    onClick={clearCart}
                  >
                    Vaciar Carrito
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

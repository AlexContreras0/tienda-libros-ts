import NavMenu from "./components/NavMenu";
import Footer from "./components/Footer";
import Book from "./components/Book";
import { useCart } from "./hooks/useCart";

function App() {
  const {
    data,
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    addToCart,
    isEmpty,
    cartTotal,
  } = useCart();

  return (
    <div className="flex flex-col gap-10">
      <NavMenu
        cart={cart}
        removeFromCart={removeFromCart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        clearCart={clearCart}
        isEmpty={isEmpty}
        cartTotal={cartTotal}
      />

      <main className="flex flex-col items-center gap-10">
        <h2 className="font-bold text-3xl text-primary uppercase">
          Escoge tu libro
        </h2>
        <span className="px-20 border-2 rounded mt-[-0.5rem]"></span>

        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 px-20">
          {data.map((libro) => (
            <Book key={libro.id} libro={libro} addToCart={addToCart} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;

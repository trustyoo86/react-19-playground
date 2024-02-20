import { useState, useOptimistic } from 'react';

interface TAddToCartForm extends Item {
  addToCart: (formData: FormData, title: string) => Promise<{
    id: string;
  }>;
  optimisticAddToCart: (action: Item) => void;
}

const AddToCartForm = ({ id, title, addToCart, optimisticAddToCart }: TAddToCartForm) => {
  const formAction = async (formData: FormData) => {
    optimisticAddToCart({ id, title });

    try {
      await addToCart(formData, title);
    } catch (e) {
      // catch errors
    }
  };

  return (
    <form action={formAction}>
      <h2>{title}</h2>
      <input type="hidden" name="itemID" value={id} />
      <button type="submit">Add to Cart</button>
    </form>
  )
};

type Item = {
  id: string;
  title: string;
};

const Cart = ({ cart }: { cart: Item[] }) => {
  if (cart.length === 0) {
    return null;
  }

  return (
    <>
      Cart:
      <ul>
        {
          cart.map((item, index) => (
            <li key={index}>{item.title}</li>
          ))
        }
      </ul>
    </>
  );
};

function ShoppingCart() {
  const [cart, setCart] = useState<Item[]>([]);

  const [optimisticCart, optimisticAddToCart] = useOptimistic<Item[], Item>(
    cart,
    (state, item) => [...state, item]
  );

  const addToCart = async (formData: FormData, title: string) => {
    const id = String(formData.get('itemID'));
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setCart((cart: Item[]) => [...cart, { id, title }]);

    return { id };
  };

  return (
    <>
      <Cart cart={optimisticCart} />
      <AddToCartForm
        id="1"
        title="Javascript: The Definitive Guide"
        addToCart={addToCart}
        optimisticAddToCart={optimisticAddToCart} />
      <AddToCartForm
        id="2"
        title="Javascript: The Good Parts"
        addToCart={addToCart}
        optimisticAddToCart={optimisticAddToCart} />
    </>
  )
}

export default ShoppingCart;

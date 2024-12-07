import { useState } from 'react';
// import { useFormState } from 'react-dom';

// const AddToCartForm = ({ id, title, addToCart }) => {
//   const addToCartAction = async (prevState, formData) => {
//     try {
//       await addToCart(formData, title);
//       return 'Successfully added';
//     } catch (e) {
//       return 'Failed to add: Sold out';
//     }
//   };

//   const [message, formAction] = useFormState(addToCartAction, null);

//   return (
//     <form action={formAction}>
//       <h2>{title}</h2>
//       <input type="hidden" name="itemID" value={id} />
//       <button type="submit">Add To Cart</button>
//       {message}
//     </form>
//   );
// };

type Item = {
  id: string;
  title: string;
};

function FormState() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cart, setCart] = useState<Item[]>([]);

  // const addToCart = async (formData: FormData, title: string) => {
  //   const id = String(formData.get('itemID'));
  //   await new Promise((resolve) => setTimeout(resolve, 1000));
  //   if (id === '1') {
  //     setCart((cart: Item[]) => [...cart, { id, title }]);
  //   } else {
  //     throw new Error('Unavailable');
  //   }

  //   return { id };
  // };

  return (
    <>
      {/* <AddToCartForm
        id="1"
        title="JavaScript: The Definitive Guide"
        addToCart={addToCart}
      />
      <AddToCartForm
        id="2"
        title="JavaScript: The Good Parts"
        addToCart={addToCart}
      /> */}

    </>
  );
}

export default FormState;

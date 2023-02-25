import { useContext, useMemo } from "react";
import { StateContext } from "../../Context/context";
import { ProductInterface } from "../../data/products";
import ButtonProducts from "../share/ButtonProducts";
import { ItemProps } from "../share/GenericList";


const ProductBox= ({ itemToRender }: ItemProps<ProductInterface>) => {
  const { thumbnail, title, price } = itemToRender;
  const { addToCart, removeFromCart, cart } = useContext(StateContext);

  const checkItsInCart = useMemo(() => {
    return cart.find((item: ProductInterface) => item.id === itemToRender.id);
  }, [cart])



  return (
    <div className="">
      <picture className="max-w-xs overflow-hidden">
        <img className="max-w-[300px]  object-contain w-100 aspect-[3/2] " src={thumbnail} alt={title} />
      </picture>
      <div className="flex flex-col">
        <h3 className="mb-4">{title}</h3>
        <div className="flex flex-col gap-4">
          <span>${price}</span>
          <ButtonProducts text={checkItsInCart ? 'Remove from Cart' : 'Add to Cart'} onClickHandler={checkItsInCart ? () => removeFromCart(itemToRender) : () => addToCart(itemToRender)} />
        </div>
      </div>
    </div>
  )
}

export default ProductBox
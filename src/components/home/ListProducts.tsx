



import { ProductInterface } from '../../data/products';
import useTheContext from '../../hooks/useTheContext';
import ProductBox from './ProductBox';
const ListProducts = () => { 

  
  const {products} = useTheContext();
  return (
    <div className='flex flex-wrap gap-4'>
      {products.map((product:ProductInterface) => {
        return (
          <ProductBox key={product.id} product={product}  />
        )
      })}
    </div>
  )
}

export default ListProducts
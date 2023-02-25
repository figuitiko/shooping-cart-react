



import { ProductInterface } from '../../data/products';
import useTheContext from '../../hooks/useTheContext';
import GenericList, { WrapperPossibles } from '../share/GenericList';
import ProductBox from './ProductBox';
const ListProducts = () => { 

  
  const {products} = useTheContext();
  const possibleWrapper: WrapperPossibles = WrapperPossibles.div; 
  return (
    <GenericList<ProductInterface> 
      items={products}
      Component={ProductBox}
      Possibles={possibleWrapper}
      classToUse='flex flex-wrap gap-4'
      itemId={(item: ProductInterface) => item.id.toString()} />   
  )
}

export default ListProducts
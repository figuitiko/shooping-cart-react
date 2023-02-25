export interface ItemProps<T> {  
  key?: string;  
  itemToRender: T;
}
export enum WrapperPossibles{
  div,
  span,
  ul
}
export interface WrapperProps {
  classToUse?: string;
  children?: React.ReactNode;
  Possibles?: WrapperPossibles
}
interface ListProps<T> extends WrapperProps {
  items: T[];
  itemId: (item: T) => string;  
  Component: React.FC<ItemProps<T>>;  
}

const Wrapper = ({classToUse, children, Possibles }: WrapperProps) => {
    switch (Possibles) {
      case WrapperPossibles.div:
        return <div className={classToUse}>{children}</div>;
      case WrapperPossibles.span:
        return <span className={classToUse}>{children}</span>;
      case WrapperPossibles.ul:
        return <li className={classToUse}>{children}</li>;
      default:
        return <div className={classToUse}>{children}</div>;
    }
  
}

function GenericList<T>({ items,  Component, Possibles, classToUse, itemId }: ListProps<T>) {
  return (
    <Wrapper classToUse={classToUse} Possibles={Possibles}  >
      {items.map((item) => (
        <Component key={itemId(item)}  itemToRender={item} />
      ))}
    </Wrapper>
  );
}


export default GenericList;
export interface ItemProps<T> {
 item?: T;
  key?: string;
}
enum WrapperPossibles{
  div,
  span,
  ul
}
export interface WrapperProps {
  classToUse?: string;
  children: React.ReactNode;
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

function GenericList<T>({ items,  Component,  itemId }: ListProps<T>) {
  return (
    <Wrapper  >
      {items.map((item) => (
        <Component key={itemId(item)} item={item} />
      ))}
    </Wrapper>
  );
}

export default GenericList;
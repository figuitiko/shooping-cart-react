interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  Wrapper?: React.FC;
}

function GenericList<T>({ items, renderItem, Wrapper }: ListProps<T>) {
  return (
    <Wrapper>
      {items.map((item, index) => (
        <li key={index}>{renderItem(item)}</li>
      ))}
    </Wrapper>
  );
}

export default GenericList;
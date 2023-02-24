interface Props {
  text:string;
  onClickHandler: () => void;
}

const ButtonProducts = ({text, onClickHandler}:Props) => {
  return (
    <button className="bg-blue-400 text-white px-8 py-4 rounded-md uppercase " onClick={onClickHandler}>{text}</button>
  )
}

export default ButtonProducts
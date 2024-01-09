import { useDispatch, useSelector } from "react-redux";

function Text2({ person }) {
  const dispatch = useDispatch();
  const name = useSelector((state) => state);
  const handlerSubmit = () => {
    dispatch({
      type: "plus",
    });
  };
  const handlerMinus = () => {
    dispatch({
      type: "minus",
    });
  };

  return (
    <div className="App">
      {name}
      <button onClick={handlerSubmit}>+</button>
      <button onClick={handlerMinus}>-</button>
    </div>
  );
}

export default Text2;

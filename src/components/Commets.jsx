import { useSelector } from "react-redux";

function Commet() {
  const name = useSelector((state) => state);
  return <div>{name}</div>;
}
export default Commet;

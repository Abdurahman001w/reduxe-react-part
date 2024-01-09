import Text from "./components/Text";
import Commet from "./components/Commets";

import { useDispatch, useSelector } from "react-redux";
function App() {
  const person = {
    name: "Ali",
    age: 33,
  };
  return (
    <div className="container">
      <Text />
      <Commet />
    </div>
  );
}
export default App;

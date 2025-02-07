import { Button } from "./components";
import { createBrowserRouter, createRoutesFromElements, Route, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  const add = () => {
    navigate("/addExpense");
  };

  const display = () => {
    navigate("/displayList");
  };

  const total = () => {
    navigate("/totalExpense");
  };

  return (
    <div>
      <Button btnText="Add Expense" classname="add-expense" onClick={add} />
      <Button btnText="Display List" classname="display-list" onClick={display} />
      <Button btnText="Total Expense" classname="total-expense" onClick={total} />
    </div>
  );
}

export default App;

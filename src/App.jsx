import { Button } from "./components";
import { useNavigate } from "react-router-dom";

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
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      backgroundColor: "#f4f4f4"
    }}>
      <Button 
        btnText="Add Expense" 
        classname="add-expense" 
        onClick={add} 
        style={{
          padding: "12px 20px",
          fontSize: "18px",
          margin: "10px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      />
      <Button 
        btnText="Display List" 
        classname="display-list" 
        onClick={display} 
        style={{
          padding: "12px 20px",
          fontSize: "18px",
          margin: "10px",
          backgroundColor: "#28a745",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      />
      <Button 
        btnText="Total Expense" 
        classname="total-expense" 
        onClick={total} 
        style={{
          padding: "12px 20px",
          fontSize: "18px",
          margin: "10px",
          backgroundColor: "#dc3545",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      />
    </div>
  );
}

export default App;

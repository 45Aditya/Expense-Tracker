import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function TotalExpense() {
  const expenses = useSelector((state) => state.expense.expenses);
  const totalAmount = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const navigate = useNavigate();

  const home = () => {
    navigate("/");
  };

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      backgroundColor: "#f8f9fa"
    }}>
      <div style={{
        backgroundColor: "#007bff",
        color: "white",
        padding: "15px",
        borderRadius: "8px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        width: "200px",
        textAlign: "center",
        fontSize: "18px",
        fontWeight: "bold",
        marginBottom: "20px" // Added margin to separate from the button
      }}>
        Total Expense: ₹{totalAmount}
      </div>
      <Button 
        btnText="Home" 
        classname="total-expense" 
        onClick={home} 
        style={{
            padding: "12px 20px",
            fontSize: "18px",
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

export default TotalExpense;

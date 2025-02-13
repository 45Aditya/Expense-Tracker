import React from "react";
import { useSelector } from "react-redux";

function TotalExpense() {
  const expenses = useSelector((state) => state.expense.expenses);

  const totalAmount = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <div style={{
      backgroundColor: "#007bff",
      color: "white",
      padding: "15px",
      borderRadius: "8px",
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      width: "200px",
      textAlign: "center",
      margin: "20px auto",
      fontSize: "18px",
      fontWeight: "bold"
    }}>
      Total Expense: ₹{totalAmount}
    </div>
  );
}

export default TotalExpense;

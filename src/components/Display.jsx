import React from "react";
import { useSelector } from "react-redux";

function DisplayList() {
    const expenses = useSelector((state) => state.expense.expenses);

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
            backgroundColor: "#f3f4f6"
        }}>
            <div style={{
                backgroundColor: "white",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                width: "400px",
                textAlign: "center"
            }}>
                <h2 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "15px" }}>Expense List</h2>

                {expenses.length === 0 ? (
                    <p style={{ color: "#555" }}>No expenses added yet.</p>
                ) : (
                    <ul style={{ listStyle: "none", padding: 0 }}>
                      <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        fontWeight: "bold",
                        padding: "10px",
                        // backgroundColor: "#e0e0e0",
                        borderBottom: "2px solid #ccc",
                        textAlign: "center"
                      }}>
                        <span style={{ flex: 2, textAlign: "left", color: "#333" }}>Title</span>
                        <span style={{ flex: 1, textAlign: "center", color: "#333" }}>Amount</span>
                        <span style={{ flex: 2, textAlign: "right", color: "#333" }}>Category</span>
                      </div>

                        {expenses.map((expense, index) => (
                            <li key={index} style={{
                                backgroundColor: "#e5e7eb",
                                margin: "8px 0",
                                padding: "10px",
                                borderRadius: "8px",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center"
                            }}>
                                <span style={{ fontWeight: "bold" }}>{expense.title}</span>
                                <span style={{ color: "#16a34a", fontWeight: "bold" }}>₹{expense.amount}</span>
                                <span style={{ fontWeight: "bold" }}>{expense.category}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default DisplayList;

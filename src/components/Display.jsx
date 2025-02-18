import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeExpense, updateExpense } from "../store/expenseSlice";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

function DisplayList() {
    const navigate = useNavigate();

    const home = () => {
        navigate("/");
    };

    const expenses = useSelector((state) => state.expense.expenses);
    const dispatch = useDispatch();

    const [editId, setEditId] = useState(null);
    const [editData, setEditData] = useState({});

    const handleChange = (e, field) => {
        setEditData({ ...editData, [field]: e.target.value });
    };

    const handleEdit = (expense) => {
        if (editId === expense.id) {
            dispatch(updateExpense({ id: expense.id, ...editData }));
            setEditId(null);
        } else {
            setEditId(expense.id);
            setEditData(expense);
        }
    };

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
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
                width: "500px", 
                textAlign: "center",
                marginBottom: "20px"
            }}>
                <h2 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "15px" }}>Expense List</h2>

                {expenses.length === 0 ? (
                    <p style={{ color: "#555" }}>No expenses added yet.</p>
                ) : (
                    <ul style={{ listStyle: "none", padding: 0 }}>
                        <div style={{
                            display: "grid",
                            gridTemplateColumns: "2fr 1fr 2fr 1fr 1fr",
                            fontWeight: "bold",
                            padding: "10px",
                            borderBottom: "2px solid #ccc",
                            textAlign: "center"
                        }}>
                            <span style={{ color: "#333" }}>Title</span>
                            <span style={{ color: "#333" }}>Amount</span>
                            <span style={{ color: "#333" }}>Category</span>
                            <span style={{ color: "#333" }}>Edit</span>
                            <span style={{ color: "#333" }}>Delete</span>
                        </div>

                        {expenses.map((expense) => (
                            <li key={expense.id} style={{
                                backgroundColor: "#e5e7eb",
                                margin: "8px 0",
                                padding: "10px",
                                borderRadius: "8px",
                                display: "grid",
                                gridTemplateColumns: "2fr 1fr 2fr 1fr 1fr",
                                alignItems: "center",
                                gap: "8px"
                            }}>
                                {editId === expense.id ? (
                                    <>
                                        <input
                                            type="text"
                                            value={editData.title}
                                            onChange={(e) => handleChange(e, "title")}
                                            style={{ width: "100%", padding: "5px" }}
                                        />
                                        <input
                                            type="number"
                                            value={editData.amount}
                                            onChange={(e) => handleChange(e, "amount")}
                                            style={{ width: "100%", padding: "5px" }}
                                        />
                                        <input
                                            type="text"
                                            value={editData.category}
                                            onChange={(e) => handleChange(e, "category")}
                                            style={{ width: "100%", padding: "5px" }}
                                        />
                                    </>
                                ) : (
                                    <>
                                        <span style={{ fontWeight: "bold" }}>{expense.title}</span>
                                        <span style={{ color: "#16a34a", fontWeight: "bold" }}>₹{expense.amount}</span>
                                        <span style={{ fontWeight: "bold" }}>{expense.category}</span>
                                    </>
                                )}

                                <button
                                    onClick={() => handleEdit(expense)}
                                    style={{ cursor: "pointer", padding: "5px" }}
                                >
                                    {editId === expense.id ? "✅" : "✏️"}
                                </button>

                                <button
                                    onClick={() => dispatch(removeExpense(expense.id))}
                                    style={{ cursor: "pointer", padding: "5px" }}
                                >
                                    ❌
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
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
                    cursor: "pointer",
                    marginTop: "20px"
                }}
            />
        </div>
    );
}

export default DisplayList;
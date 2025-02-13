import React from 'react'
import Input from './Input'
import { useDispatch } from "react-redux"
import { useForm } from "react-hook-form"
import { addExpense } from '../store/expenseSlice'

function AddExpense() {
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        dispatch(addExpense({
            title: data.title,
            amount: Number(data.amount),
            category: data.category
        }));
    };

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
            backgroundColor: "#f3f4f6",
            padding: "20px"  
        }}>
            <div style={{
                backgroundColor: "white",
                padding: "25px",
                borderRadius: "12px",
                boxShadow: "0 5px 10px rgba(0, 0, 0, 0.15)",
                width: "380px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}>
                <h2 style={{
                    textAlign: "center",
                    fontSize: "22px",
                    fontWeight: "bold",
                    marginBottom: "20px",
                    color: "#333"
                }}>
                    Add Expense
                </h2>
                <form onSubmit={handleSubmit(onSubmit)} style={{ 
                    display: "flex", 
                    flexDirection: "column", 
                    gap: "15px",
                    width: "100%" 
                }}>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <label style={{
                            fontSize: "14px",
                            fontWeight: "bold",
                            marginBottom: "5px",
                            color: "#444"
                        }}>
                            Title:
                        </label>
                        <input
                            style={{
                                padding: "10px",
                                fontSize: "14px",
                                border: "1px solid #ccc",
                                borderRadius: "6px",
                                outline: "none",
                                transition: "border 0.3s",
                                width: "100%", 
                                boxSizing: "border-box"
                            }}
                            placeholder="Enter title for your expense"
                            type='text'
                            {...register("title", { required: true })}
                            onFocus={(e) => e.target.style.border = "1px solid #3b82f6"}
                            onBlur={(e) => e.target.style.border = "1px solid #ccc"}
                        />
                        {errors.title && <p style={{ color: "red", fontSize: "12px", marginTop: "4px" }}>Title is required</p>}
                    </div>
                    
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <label style={{
                            fontSize: "14px",
                            fontWeight: "bold",
                            marginBottom: "5px",
                            color: "#444"
                        }}>
                            Amount:
                        </label>
                        <input
                            style={{
                                padding: "10px",
                                fontSize: "14px",
                                border: "1px solid #ccc",
                                borderRadius: "6px",
                                outline: "none",
                                transition: "border 0.3s",
                                width: "100%",
                                boxSizing: "border-box"
                            }}
                            placeholder="Enter amount"
                            type='number'
                            {...register("amount", { required: true })}
                            onFocus={(e) => e.target.style.border = "1px solid #3b82f6"}
                            onBlur={(e) => e.target.style.border = "1px solid #ccc"}
                        />
                        {errors.amount && <p style={{ color: "red", fontSize: "12px", marginTop: "4px" }}>Amount is required</p>}
                    </div>
                    
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <label style={{
                            fontSize: "14px",
                            fontWeight: "bold",
                            marginBottom: "5px",
                            color: "#444"
                        }}>
                            Category:
                        </label>
                        <input
                            style={{
                                padding: "10px",
                                fontSize: "14px",
                                border: "1px solid #ccc",
                                borderRadius: "6px",
                                outline: "none",
                                transition: "border 0.3s",
                                width: "100%",
                                boxSizing: "border-box"
                            }}
                            placeholder="Enter category for your expense"
                            type='text'
                            {...register("category", { required: true })}
                            onFocus={(e) => e.target.style.border = "1px solid #3b82f6"}
                            onBlur={(e) => e.target.style.border = "1px solid #ccc"}
                        />
                        {errors.category && <p style={{ color: "red", fontSize: "12px", marginTop: "4px" }}>Category is required</p>}
                    </div>

                    <button type="submit" style={{
                        width: "100%",
                        backgroundColor: "#3b82f6",
                        color: "white",
                        padding: "12px",
                        borderRadius: "8px",
                        border: "none",
                        cursor: "pointer",
                        fontSize: "16px",
                        fontWeight: "bold",
                        transition: "background 0.3s"
                    }}
                        onMouseOver={(e) => e.target.style.backgroundColor = "#2563eb"}
                        onMouseOut={(e) => e.target.style.backgroundColor = "#3b82f6"}>
                        Add Expense
                    </button>
                </form>
            </div>
        </div>
    )
}

export default AddExpense;

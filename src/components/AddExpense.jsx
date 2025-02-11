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
            backgroundColor: "#f3f4f6"
        }}>
            <div style={{
                backgroundColor: "white",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                width: "350px"
            }}>
                <h2 style={{
                    textAlign: "center",
                    fontSize: "20px",
                    fontWeight: "bold",
                    marginBottom: "15px"
                }}>
                    Add Expense
                </h2>
                <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    <div>
                        <Input
                            label="Title:"
                            placeholder="Enter title for your expense"
                            type='text'
                            {...register("title", { required: true })}
                        />
                        {errors.title && <p style={{ color: "red", fontSize: "12px" }}>Title is required</p>}
                    </div>
                    <div>
                        <Input
                            label="Amount:"
                            placeholder="Enter amount"
                            type='number'
                            {...register("amount", { required: true })}
                        />
                        {errors.amount && <p style={{ color: "red", fontSize: "12px" }}>Amount is required</p>}
                    </div>
                    <div>
                        <Input
                            label="Category:"
                            placeholder="Enter category for your expense"
                            type='text'
                            {...register("category", { required: true })}
                        />
                        {errors.category && <p style={{ color: "red", fontSize: "12px" }}>Category is required</p>}
                    </div>
                    <button type="submit" style={{
                        width: "100%",
                        backgroundColor: "#3b82f6",
                        color: "white",
                        padding: "10px",
                        borderRadius: "8px",
                        border: "none",
                        cursor: "pointer",
                        fontSize: "16px",
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

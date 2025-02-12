import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    expenses: []      // Initializes an empty array for expenses
};

const expenseSlice = createSlice({
    name: 'expense',
    initialState,
    reducers: {
        // Adds a new expense to the expenses array
        addExpense: (state, action) => {
            state.expenses.push({
                id: Date.now(),  // Generates a unique ID based on timestamp
                title: action.payload.title,
                amount: action.payload.amount,
                category: action.payload.category,
                date: action.payload.date
            });
        },

        // Removes an expense by filtering out the one with the matching ID
        removeExpense: (state, action) => {
            state.expenses = state.expenses.filter(expense => expense.id !== action.payload);
        },

        // Update an expense by mapping out with the matching ID
        updateExpense: (state, action) => {
            state.expenses = state.expenses.map(expense =>
                expense.id === action.payload.id
                ? {
                    ...expense, 
                    ...(action.payload.title && {title: action.payload.title}), 
                    ...action(action.payload.amount && {title: action.payload.amount})
                  }
                : expense
            );
        }        

    }
});

export const { addExpense, removeExpense, updateExpense } = expenseSlice.actions;
export default expenseSlice.reducer;
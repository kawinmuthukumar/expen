const mongoose = require("mongoose");
const express = require("express");
const { v4: uuid } = require("uuid");

const app = express();
app.use(express.json());

// Connect to MongoDB
const startServer = async () => {
    try {
        const connection = await mongoose.connect(
            "mongodb+srv://kawin:saipranavika17@kawin.lozfqbm.mongodb.net/expenseDB?retryWrites=true&w=majority"
        );
        console.log("Connected to the database");
        console.log("Database Host:", connection.connection.host);

        // Start the server after a successful database connection
        app.listen(3000, () => {
            console.log("Server is running on port 3000");
        });
    } catch (err) {
        console.error("Failed to connect to the database:", err);
        process.exit(1); // Exit the application if the database connection fails
    }
};

// Define Schema and Model
const expenseSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    amount: { type: Number, required: true },
});
const Expenses = mongoose.model("Expenses", expenseSchema);

// API Routes

// GET All Expenses
app.get("/api/expensesDB", async (req, res) => {
    try {
        const expenses = await Expenses.find();
        res.status(200).json(expenses);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to fetch expenses" });
    }
});

// GET Expense by ID
app.get("/api/expensesDB/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const expense = await Expenses.findOne({ id });
        if (!expense) {
            return res.status(404).json({ message: "Expense not found" });
        }
        res.status(200).json(expense);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to fetch expense" });
    }
});

// POST Create a New Expense
app.post("/api/expensesDB", async (req, res) => {
    try {
        const { title, amount } = req.body;
        const newExpense = new Expenses({
            id: uuid(),
            title,
            amount,
        });
        const savedExpense = await newExpense.save();
        res.status(201).json({ message: "Expense created successfully", data: savedExpense });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to create expense" });
    }
});

// PUT Update an Existing Expense by ID
app.put("/api/expensesDB/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { title, amount } = req.body;

        const updatedExpense = await Expenses.findOneAndUpdate(
            { id },
            { title, amount },
            { new: true } // Return the updated document
        );

        if (!updatedExpense) {
            return res.status(404).json({ message: "Expense not found" });
        }

        res.status(200).json({ message: "Expense updated successfully", data: updatedExpense });
    } catch (err) {
        console.error("Error updating expense:", err);
        res.status(500).json({ message: "Failed to update expense", error: err.message });
    }
});

// DELETE Remove an Expense by ID
app.delete("/api/expensesDB/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Expenses.deleteOne({ id });
        if (result.deletedCount === 0) {
            return res.status(404).json({ message: "Expense not found" });
        }
        res.status(200).json({ message: "Expense deleted successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to delete expense" });
    }
});

// Start the server
startServer();

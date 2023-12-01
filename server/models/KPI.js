import mongoose from "mongoose";

const Schema = mongoose.Schema;

// Define a schema for the category expenses
const categoryExpenseSchema = new Schema({
  category: String,
  amount: Number, // Changed to Number type
});

const daySchema = new Schema({
  date: String,
  revenue: Number, // Changed to Number type
  expenses: Number, // Changed to Number type
}, { toJSON: { getters: true } });

const monthSchema = new Schema({
  month: String,
  revenue: Number, // Changed to Number type
  expenses: Number, // Changed to Number type
  operationalExpenses: Number, // Changed to Number type
  nonOperationalExpenses: Number, // Changed to Number type
}, { toJSON: { getters: true } });

const KPISchema = new Schema({
  totalProfit: Number, // Changed to Number type
  totalRevenue: Number, // Changed to Number type
  totalExpenses: Number, // Changed to Number type
  expensesByCategory: [categoryExpenseSchema],
  monthlyData: [monthSchema],
  dailyData: [daySchema]
}, { timestamps: true, toJSON: { getters: true } });

const KPI = mongoose.model("KPI", KPISchema);

export default KPI;

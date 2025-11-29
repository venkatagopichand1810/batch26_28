import { createContext, useContext, useState, useEffect } from 'react';

const ExpenseContext = createContext();

export const useExpenses = () => {
  const context = useContext(ExpenseContext);
  if (!context) {
    throw new Error('useExpenses must be used within an ExpenseProvider');
  }
  return context;
};

export const CATEGORIES = [
  { id: 'food', name: 'Food', icon: '🍔', color: '#FF6384' },
  { id: 'travel', name: 'Travel', icon: '✈️', color: '#36A2EB' },
  { id: 'bills', name: 'Bills', icon: '💡', color: '#FFCE56' },
  { id: 'shopping', name: 'Shopping', icon: '🛍️', color: '#4BC0C0' },
  { id: 'entertainment', name: 'Entertainment', icon: '🎬', color: '#9966FF' },
  { id: 'health', name: 'Health', icon: '🏥', color: '#FF9F40' },
  { id: 'education', name: 'Education', icon: '📚', color: '#FF6384' },
  { id: 'others', name: 'Others', icon: '📦', color: '#C9CBCF' },
];

export const ExpenseProvider = ({ children }) => {
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem('smart-expense-data');
    return saved ? JSON.parse(saved) : [];
  });

  const [filters, setFilters] = useState({
    category: '',
    dateFrom: '',
    dateTo: '',
    minAmount: '',
    maxAmount: '',
  });

  const [sortBy, setSortBy] = useState('date-desc'); // date-desc, date-asc, amount-desc, amount-asc

  useEffect(() => {
    localStorage.setItem('smart-expense-data', JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expenseData) => {
    const newExpense = {
      id: Date.now(),
      amount: parseFloat(expenseData.amount),
      category: expenseData.category,
      date: expenseData.date,
      note: expenseData.note || '',
      createdAt: new Date().toISOString(),
    };
    setExpenses([newExpense, ...expenses]);
    return newExpense;
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  const updateExpense = (id, updates) => {
    setExpenses(expenses.map(expense =>
      expense.id === id
        ? { ...expense, ...updates, amount: parseFloat(updates.amount) }
        : expense
    ));
  };

  const getFilteredExpenses = () => {
    let filtered = [...expenses];

    // Filter by category
    if (filters.category) {
      filtered = filtered.filter(exp => exp.category === filters.category);
    }

    // Filter by date range
    if (filters.dateFrom) {
      filtered = filtered.filter(exp => exp.date >= filters.dateFrom);
    }
    if (filters.dateTo) {
      filtered = filtered.filter(exp => exp.date <= filters.dateTo);
    }

    // Filter by amount range
    if (filters.minAmount) {
      filtered = filtered.filter(exp => exp.amount >= parseFloat(filters.minAmount));
    }
    if (filters.maxAmount) {
      filtered = filtered.filter(exp => exp.amount <= parseFloat(filters.maxAmount));
    }

    // Sort
    switch (sortBy) {
      case 'date-desc':
        filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      case 'date-asc':
        filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
        break;
      case 'amount-desc':
        filtered.sort((a, b) => b.amount - a.amount);
        break;
      case 'amount-asc':
        filtered.sort((a, b) => a.amount - b.amount);
        break;
      default:
        break;
    }

    return filtered;
  };

  const getCategoryTotals = () => {
    const totals = {};
    CATEGORIES.forEach(cat => {
      totals[cat.id] = 0;
    });

    expenses.forEach(expense => {
      if (totals[expense.category] !== undefined) {
        totals[expense.category] += expense.amount;
      }
    });

    return totals;
  };

  const getTotalExpense = () => {
    return expenses.reduce((sum, expense) => sum + expense.amount, 0);
  };

  const getExpensesByDateRange = (days) => {
    const today = new Date();
    const startDate = new Date(today);
    startDate.setDate(today.getDate() - days);

    return expenses.filter(expense => new Date(expense.date) >= startDate);
  };

  const value = {
    expenses,
    filters,
    setFilters,
    sortBy,
    setSortBy,
    addExpense,
    deleteExpense,
    updateExpense,
    getFilteredExpenses,
    getCategoryTotals,
    getTotalExpense,
    getExpensesByDateRange,
  };

  return <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>;
};


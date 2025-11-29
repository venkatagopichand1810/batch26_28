import { ExpenseProvider, useExpenses } from './context/ExpenseContext';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import ExpenseChart from './components/ExpenseChart';
import FilterBar from './components/FilterBar';
import './App.css';

function AppContent() {
  const { getTotalExpense, expenses } = useExpenses();
  const totalExpense = getTotalExpense();

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <div className="header-left">
            <h1 className="app-title">
              <span className="title-icon">💰</span>
              Smart Expense Tracker
            </h1>
            <p className="app-subtitle">Track and manage your expenses efficiently</p>
          </div>
          <div className="header-stats">
            <div className="stat-card">
              <span className="stat-label">Total Expenses</span>
              <span className="stat-value">${totalExpense.toFixed(2)}</span>
            </div>
            <div className="stat-card">
              <span className="stat-label">Total Entries</span>
              <span className="stat-value">{expenses.length}</span>
            </div>
          </div>
        </div>
      </header>

      <main className="app-main">
        <div className="container">
          <div className="app-grid">
            <div className="left-column">
              <ExpenseForm />
              <ExpenseChart />
            </div>
            <div className="right-column">
              <FilterBar />
              <ExpenseList />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function App() {
  return (
    <ExpenseProvider>
      <AppContent />
    </ExpenseProvider>
  );
}

export default App;

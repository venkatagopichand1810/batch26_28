import { useExpenses, CATEGORIES } from '../context/ExpenseContext';
import './ExpenseList.css';

const ExpenseList = () => {
  const { getFilteredExpenses, deleteExpense } = useExpenses();
  const expenses = getFilteredExpenses();

  const getCategoryInfo = (categoryId) => {
    return CATEGORIES.find(cat => cat.id === categoryId) || CATEGORIES[CATEGORIES.length - 1];
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this expense?')) {
      deleteExpense(id);
    }
  };

  if (expenses.length === 0) {
    return (
      <div className="expense-list-container">
        <h2 className="list-title">Recent Expenses</h2>
        <div className="empty-state">
          <div className="empty-icon">💸</div>
          <h3>No expenses found</h3>
          <p>Add your first expense to get started</p>
        </div>
      </div>
    );
  }

  return (
    <div className="expense-list-container">
      <h2 className="list-title">
        Recent Expenses
        <span className="expense-count">{expenses.length} {expenses.length === 1 ? 'expense' : 'expenses'}</span>
      </h2>
      <div className="expense-list">
        {expenses.map((expense) => {
          const category = getCategoryInfo(expense.category);
          return (
            <div key={expense.id} className="expense-item">
              <div
                className="expense-category-icon"
                style={{ background: `${category.color}20`, color: category.color }}
              >
                {category.icon}
              </div>
              <div className="expense-details">
                <div className="expense-header">
                  <span className="expense-category-name">{category.name}</span>
                  <span className="expense-amount">${expense.amount.toFixed(2)}</span>
                </div>
                {expense.note && (
                  <div className="expense-note">{expense.note}</div>
                )}
                <div className="expense-date">{formatDate(expense.date)}</div>
              </div>
              <button
                className="delete-btn"
                onClick={() => handleDelete(expense.id)}
                title="Delete expense"
              >
                🗑️
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExpenseList;


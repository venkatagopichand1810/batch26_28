import { useState } from 'react';
import { useExpenses, CATEGORIES } from '../context/ExpenseContext';
import './ExpenseForm.css';

const ExpenseForm = () => {
  const { addExpense } = useExpenses();
  const [formData, setFormData] = useState({
    amount: '',
    category: 'food',
    date: new Date().toISOString().split('T')[0],
    note: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.amount || parseFloat(formData.amount) <= 0) {
      alert('Please enter a valid amount');
      return;
    }

    addExpense(formData);
    setFormData({
      amount: '',
      category: 'food',
      date: new Date().toISOString().split('T')[0],
      note: '',
    });
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="expense-form-container">
      <h2 className="form-title">Add New Expense</h2>
      <form className="expense-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label className="form-label">Amount ($)</label>
            <input
              type="number"
              className="form-input"
              placeholder="0.00"
              value={formData.amount}
              onChange={(e) => handleChange('amount', e.target.value)}
              step="0.01"
              min="0"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Date</label>
            <input
              type="date"
              className="form-input"
              value={formData.date}
              onChange={(e) => handleChange('date', e.target.value)}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Category</label>
          <div className="category-grid">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`category-btn ${formData.category === cat.id ? 'active' : ''}`}
                onClick={() => handleChange('category', cat.id)}
                style={{
                  borderColor: formData.category === cat.id ? cat.color : '#e2e8f0',
                  background: formData.category === cat.id ? `${cat.color}20` : 'white',
                }}
              >
                <span className="category-icon">{cat.icon}</span>
                <span className="category-name">{cat.name}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Note (Optional)</label>
          <input
            type="text"
            className="form-input"
            placeholder="Add a note..."
            value={formData.note}
            onChange={(e) => handleChange('note', e.target.value)}
          />
        </div>

        <button type="submit" className="submit-btn">
          ➕ Add Expense
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;


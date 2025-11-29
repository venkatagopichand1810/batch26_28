import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import { useState } from 'react';
import { useExpenses, CATEGORIES } from '../context/ExpenseContext';
import './ExpenseChart.css';

const ExpenseChart = () => {
  const { getCategoryTotals, getTotalExpense } = useExpenses();
  const [chartType, setChartType] = useState('pie'); // 'pie' or 'bar'
  
  const categoryTotals = getCategoryTotals();
  const totalExpense = getTotalExpense();

  const chartData = CATEGORIES.map(cat => ({
    name: cat.name,
    value: categoryTotals[cat.id],
    color: cat.color,
    icon: cat.icon,
  })).filter(item => item.value > 0);

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0];
      const percentage = totalExpense > 0 ? ((data.value / totalExpense) * 100).toFixed(1) : 0;
      return (
        <div className="custom-tooltip">
          <p className="tooltip-label">{data.name}</p>
          <p className="tooltip-value">${data.value.toFixed(2)}</p>
          <p className="tooltip-percentage">{percentage}%</p>
        </div>
      );
    }
    return null;
  };

  if (chartData.length === 0) {
    return (
      <div className="expense-chart-container">
        <div className="chart-header">
          <h2 className="chart-title">Expense Distribution</h2>
        </div>
        <div className="empty-chart">
          <div className="empty-chart-icon">📊</div>
          <p>No expense data to display</p>
        </div>
      </div>
    );
  }

  return (
    <div className="expense-chart-container">
      <div className="chart-header">
        <h2 className="chart-title">Expense Distribution</h2>
        <div className="chart-toggle">
          <button
            className={`toggle-btn ${chartType === 'pie' ? 'active' : ''}`}
            onClick={() => setChartType('pie')}
          >
            🥧 Pie
          </button>
          <button
            className={`toggle-btn ${chartType === 'bar' ? 'active' : ''}`}
            onClick={() => setChartType('bar')}
          >
            📊 Bar
          </button>
        </div>
      </div>

      <div className="chart-wrapper">
        {chartType === 'pie' ? (
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        ) : (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>

      <div className="category-breakdown">
        {chartData.map((item) => {
          const percentage = totalExpense > 0 ? ((item.value / totalExpense) * 100).toFixed(1) : 0;
          return (
            <div key={item.name} className="breakdown-item">
              <div className="breakdown-header">
                <span className="breakdown-icon" style={{ color: item.color }}>
                  {item.icon}
                </span>
                <span className="breakdown-name">{item.name}</span>
              </div>
              <div className="breakdown-details">
                <span className="breakdown-amount">${item.value.toFixed(2)}</span>
                <span className="breakdown-percentage">{percentage}%</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="total-summary">
        <span className="summary-label">Total Expenses:</span>
        <span className="summary-amount">${totalExpense.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default ExpenseChart;


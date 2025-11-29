import { useState } from 'react';
import './ItemsTable.css';

const ItemsTable = ({ items, setItems, taxRate, setTaxRate }) => {
  const [newItem, setNewItem] = useState({
    description: '',
    quantity: 1,
    rate: 0
  });

  const addItem = () => {
    if (newItem.description.trim() === '') {
      alert('Please enter item description');
      return;
    }

    const item = {
      id: Date.now(),
      description: newItem.description,
      quantity: parseFloat(newItem.quantity) || 1,
      rate: parseFloat(newItem.rate) || 0,
      amount: (parseFloat(newItem.quantity) || 1) * (parseFloat(newItem.rate) || 0)
    };

    setItems([...items, item]);
    setNewItem({ description: '', quantity: 1, rate: 0 });
  };

  const updateItem = (id, field, value) => {
    setItems(items.map(item => {
      if (item.id === id) {
        const updatedItem = { ...item, [field]: value };
        if (field === 'quantity' || field === 'rate') {
          updatedItem.amount = (parseFloat(updatedItem.quantity) || 0) * (parseFloat(updatedItem.rate) || 0);
        }
        return updatedItem;
      }
      return item;
    }));
  };

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const subtotal = items.reduce((sum, item) => sum + item.amount, 0);
  const tax = subtotal * (taxRate / 100);
  const total = subtotal + tax;

  return (
    <div className="items-table-container">
      <h3 className="section-title">Invoice Items</h3>
      
      <div className="table-wrapper">
        <table className="items-table">
          <thead>
            <tr>
              <th>Description</th>
              <th>Quantity</th>
              <th>Rate ($)</th>
              <th>Amount ($)</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map(item => (
              <tr key={item.id}>
                <td>
                  <input
                    type="text"
                    className="table-input"
                    value={item.description}
                    onChange={(e) => updateItem(item.id, 'description', e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    className="table-input number-input"
                    value={item.quantity}
                    onChange={(e) => updateItem(item.id, 'quantity', e.target.value)}
                    min="1"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    className="table-input number-input"
                    value={item.rate}
                    onChange={(e) => updateItem(item.id, 'rate', e.target.value)}
                    min="0"
                    step="0.01"
                  />
                </td>
                <td className="amount-cell">${item.amount.toFixed(2)}</td>
                <td>
                  <button
                    className="delete-btn"
                    onClick={() => deleteItem(item.id)}
                    title="Delete item"
                  >
                    🗑️
                  </button>
                </td>
              </tr>
            ))}
            <tr className="add-item-row">
              <td>
                <input
                  type="text"
                  className="table-input"
                  placeholder="Item description"
                  value={newItem.description}
                  onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
                  onKeyPress={(e) => e.key === 'Enter' && addItem()}
                />
              </td>
              <td>
                <input
                  type="number"
                  className="table-input number-input"
                  placeholder="Qty"
                  value={newItem.quantity}
                  onChange={(e) => setNewItem({ ...newItem, quantity: e.target.value })}
                  min="1"
                />
              </td>
              <td>
                <input
                  type="number"
                  className="table-input number-input"
                  placeholder="Rate"
                  value={newItem.rate}
                  onChange={(e) => setNewItem({ ...newItem, rate: e.target.value })}
                  min="0"
                  step="0.01"
                />
              </td>
              <td className="amount-cell">
                ${((parseFloat(newItem.quantity) || 0) * (parseFloat(newItem.rate) || 0)).toFixed(2)}
              </td>
              <td>
                <button className="add-btn" onClick={addItem} title="Add item">
                  ➕
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="totals-section">
        <div className="totals-row">
          <span className="totals-label">Subtotal:</span>
          <span className="totals-value">${subtotal.toFixed(2)}</span>
        </div>
        <div className="totals-row tax-row">
          <span className="totals-label">
            Tax (
            <input
              type="number"
              className="tax-input"
              value={taxRate}
              onChange={(e) => setTaxRate(parseFloat(e.target.value) || 0)}
              min="0"
              max="100"
              step="0.1"
            />
            %):
          </span>
          <span className="totals-value">${tax.toFixed(2)}</span>
        </div>
        <div className="totals-row total-row">
          <span className="totals-label">Total:</span>
          <span className="totals-value">${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default ItemsTable;


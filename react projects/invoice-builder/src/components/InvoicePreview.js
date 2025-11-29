import './InvoicePreview.css';

const InvoicePreview = ({ invoiceData, items, taxRate }) => {
  const subtotal = items.reduce((sum, item) => sum + item.amount, 0);
  const tax = subtotal * (taxRate / 100);
  const total = subtotal + tax;

  return (
    <div className="invoice-preview" id="invoice-preview">
      <div className="invoice-header">
        <div className="invoice-logo">
          <h1>INVOICE</h1>
        </div>
        <div className="invoice-meta">
          <div className="meta-item">
            <span className="meta-label">Invoice #:</span>
            <span className="meta-value">{invoiceData.invoiceNumber || 'N/A'}</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">Date:</span>
            <span className="meta-value">{invoiceData.invoiceDate || 'N/A'}</span>
          </div>
        </div>
      </div>

      <div className="invoice-parties">
        <div className="party-section">
          <h3 className="party-title">From:</h3>
          <div className="party-details">
            <p className="party-name">{invoiceData.company.name || 'Your Company'}</p>
            <p className="party-email">{invoiceData.company.email}</p>
            <p className="party-address">{invoiceData.company.address}</p>
          </div>
        </div>

        <div className="party-section">
          <h3 className="party-title">Bill To:</h3>
          <div className="party-details">
            <p className="party-name">{invoiceData.client.name || 'Client Name'}</p>
            <p className="party-email">{invoiceData.client.email}</p>
            <p className="party-address">{invoiceData.client.address}</p>
          </div>
        </div>
      </div>

      <div className="invoice-items">
        <table className="preview-table">
          <thead>
            <tr>
              <th className="desc-col">Description</th>
              <th className="qty-col">Qty</th>
              <th className="rate-col">Rate</th>
              <th className="amount-col">Amount</th>
            </tr>
          </thead>
          <tbody>
            {items.length === 0 ? (
              <tr>
                <td colSpan="4" className="empty-message">
                  No items added yet
                </td>
              </tr>
            ) : (
              items.map(item => (
                <tr key={item.id}>
                  <td className="desc-col">{item.description}</td>
                  <td className="qty-col">{item.quantity}</td>
                  <td className="rate-col">${item.rate.toFixed(2)}</td>
                  <td className="amount-col">${item.amount.toFixed(2)}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="invoice-summary">
        <div className="summary-row">
          <span className="summary-label">Subtotal:</span>
          <span className="summary-value">${subtotal.toFixed(2)}</span>
        </div>
        <div className="summary-row">
          <span className="summary-label">Tax ({taxRate}%):</span>
          <span className="summary-value">${tax.toFixed(2)}</span>
        </div>
        <div className="summary-row total-row">
          <span className="summary-label">Total:</span>
          <span className="summary-value">${total.toFixed(2)}</span>
        </div>
      </div>

      <div className="invoice-footer">
        <p className="footer-text">Thank you for your business!</p>
        <p className="footer-note">Please make payment within 30 days.</p>
      </div>
    </div>
  );
};

export default InvoicePreview;


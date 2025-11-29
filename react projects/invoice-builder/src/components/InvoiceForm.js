import './InvoiceForm.css';

const InvoiceForm = ({ invoiceData, setInvoiceData }) => {
  const handleClientChange = (field, value) => {
    setInvoiceData(prev => ({
      ...prev,
      client: {
        ...prev.client,
        [field]: value
      }
    }));
  };

  const handleInvoiceInfoChange = (field, value) => {
    setInvoiceData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="invoice-form">
      <div className="form-section">
        <h3 className="section-title">Invoice Information</h3>
        <div className="form-row">
          <div className="form-group">
            <label className="form-label">Invoice Number</label>
            <input
              type="text"
              className="form-input"
              value={invoiceData.invoiceNumber}
              onChange={(e) => handleInvoiceInfoChange('invoiceNumber', e.target.value)}
              placeholder="INV-001"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Invoice Date</label>
            <input
              type="date"
              className="form-input"
              value={invoiceData.invoiceDate}
              onChange={(e) => handleInvoiceInfoChange('invoiceDate', e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="form-section">
        <h3 className="section-title">Client Information</h3>
        <div className="form-group">
          <label className="form-label">Client Name</label>
          <input
            type="text"
            className="form-input"
            value={invoiceData.client.name}
            onChange={(e) => handleClientChange('name', e.target.value)}
            placeholder="John Doe"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Client Email</label>
          <input
            type="email"
            className="form-input"
            value={invoiceData.client.email}
            onChange={(e) => handleClientChange('email', e.target.value)}
            placeholder="john@example.com"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Client Address</label>
          <textarea
            className="form-textarea"
            value={invoiceData.client.address}
            onChange={(e) => handleClientChange('address', e.target.value)}
            placeholder="123 Main St, City, State, ZIP"
            rows="3"
          />
        </div>
      </div>

      <div className="form-section">
        <h3 className="section-title">Your Information</h3>
        <div className="form-group">
          <label className="form-label">Your Company Name</label>
          <input
            type="text"
            className="form-input"
            value={invoiceData.company.name}
            onChange={(e) => setInvoiceData(prev => ({
              ...prev,
              company: { ...prev.company, name: e.target.value }
            }))}
            placeholder="Your Company Inc."
          />
        </div>
        <div className="form-group">
          <label className="form-label">Your Email</label>
          <input
            type="email"
            className="form-input"
            value={invoiceData.company.email}
            onChange={(e) => setInvoiceData(prev => ({
              ...prev,
              company: { ...prev.company, email: e.target.value }
            }))}
            placeholder="company@example.com"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Your Address</label>
          <textarea
            className="form-textarea"
            value={invoiceData.company.address}
            onChange={(e) => setInvoiceData(prev => ({
              ...prev,
              company: { ...prev.company, address: e.target.value }
            }))}
            placeholder="456 Business Ave, City, State, ZIP"
            rows="3"
          />
        </div>
      </div>
    </div>
  );
};

export default InvoiceForm;


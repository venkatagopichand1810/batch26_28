import { useState } from 'react';
import InvoiceForm from './components/InvoiceForm';
import ItemsTable from './components/ItemsTable';
import InvoicePreview from './components/InvoicePreview';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import './App.css';

function App() {
  const [invoiceData, setInvoiceData] = useState({
    invoiceNumber: 'INV-001',
    invoiceDate: new Date().toISOString().split('T')[0],
    client: {
      name: '',
      email: '',
      address: ''
    },
    company: {
      name: '',
      email: '',
      address: ''
    }
  });

  const [items, setItems] = useState([]);
  const [taxRate, setTaxRate] = useState(10);
  const [activeTab, setActiveTab] = useState('edit');

  const handleExportPDF = async () => {
    const element = document.getElementById('invoice-preview');

    try {
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 10;

      pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
      pdf.save(`invoice-${invoiceData.invoiceNumber}.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Error generating PDF. Please try again.');
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset the invoice? All data will be lost.')) {
      setInvoiceData({
        invoiceNumber: 'INV-001',
        invoiceDate: new Date().toISOString().split('T')[0],
        client: { name: '', email: '', address: '' },
        company: { name: '', email: '', address: '' }
      });
      setItems([]);
      setTaxRate(10);
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <h1 className="app-title">
            <span className="title-icon">📄</span>
            Invoice Builder
          </h1>
          <p className="app-subtitle">
            Create professional invoices with ease
          </p>
        </div>
      </header>

      <main className="app-main">
        <div className="container">
          <div className="action-bar">
            <div className="tabs">
              <button
                className={`tab-button ${activeTab === 'edit' ? 'active' : ''}`}
                onClick={() => setActiveTab('edit')}
              >
                ✏️ Edit
              </button>
              <button
                className={`tab-button ${activeTab === 'preview' ? 'active' : ''}`}
                onClick={() => setActiveTab('preview')}
              >
                👁️ Preview
              </button>
            </div>
            <div className="action-buttons">
              <button className="action-btn print-btn" onClick={handlePrint}>
                🖨️ Print
              </button>
              <button className="action-btn pdf-btn" onClick={handleExportPDF}>
                📥 Export PDF
              </button>
              <button className="action-btn reset-btn" onClick={handleReset}>
                🔄 Reset
              </button>
            </div>
          </div>

          {activeTab === 'edit' ? (
            <div className="edit-view">
              <InvoiceForm
                invoiceData={invoiceData}
                setInvoiceData={setInvoiceData}
              />
              <ItemsTable
                items={items}
                setItems={setItems}
                taxRate={taxRate}
                setTaxRate={setTaxRate}
              />
            </div>
          ) : (
            <div className="preview-view">
              <InvoicePreview
                invoiceData={invoiceData}
                items={items}
                taxRate={taxRate}
              />
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;

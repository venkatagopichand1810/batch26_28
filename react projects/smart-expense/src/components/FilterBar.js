import { useExpenses, CATEGORIES } from '../context/ExpenseContext';
import './FilterBar.css';

const FilterBar = () => {
  const { filters, setFilters, sortBy, setSortBy } = useExpenses();

  const handleFilterChange = (field, value) => {
    setFilters(prev => ({ ...prev, [field]: value }));
  };

  const clearFilters = () => {
    setFilters({
      category: '',
      dateFrom: '',
      dateTo: '',
      minAmount: '',
      maxAmount: '',
    });
  };

  const hasActiveFilters = Object.values(filters).some(val => val !== '');

  return (
    <div className="filter-bar">
      <div className="filter-section">
        <h3 className="filter-title">Filters & Sort</h3>
        
        <div className="filter-grid">
          <div className="filter-group">
            <label className="filter-label">Category</label>
            <select
              className="filter-select"
              value={filters.category}
              onChange={(e) => handleFilterChange('category', e.target.value)}
            >
              <option value="">All Categories</option>
              {CATEGORIES.map(cat => (
                <option key={cat.id} value={cat.id}>
                  {cat.icon} {cat.name}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label className="filter-label">Sort By</label>
            <select
              className="filter-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="date-desc">Newest First</option>
              <option value="date-asc">Oldest First</option>
              <option value="amount-desc">Highest Amount</option>
              <option value="amount-asc">Lowest Amount</option>
            </select>
          </div>

          <div className="filter-group">
            <label className="filter-label">From Date</label>
            <input
              type="date"
              className="filter-input"
              value={filters.dateFrom}
              onChange={(e) => handleFilterChange('dateFrom', e.target.value)}
            />
          </div>

          <div className="filter-group">
            <label className="filter-label">To Date</label>
            <input
              type="date"
              className="filter-input"
              value={filters.dateTo}
              onChange={(e) => handleFilterChange('dateTo', e.target.value)}
            />
          </div>

          <div className="filter-group">
            <label className="filter-label">Min Amount ($)</label>
            <input
              type="number"
              className="filter-input"
              placeholder="0.00"
              value={filters.minAmount}
              onChange={(e) => handleFilterChange('minAmount', e.target.value)}
              step="0.01"
              min="0"
            />
          </div>

          <div className="filter-group">
            <label className="filter-label">Max Amount ($)</label>
            <input
              type="number"
              className="filter-input"
              placeholder="0.00"
              value={filters.maxAmount}
              onChange={(e) => handleFilterChange('maxAmount', e.target.value)}
              step="0.01"
              min="0"
            />
          </div>
        </div>

        {hasActiveFilters && (
          <button className="clear-filters-btn" onClick={clearFilters}>
            🔄 Clear All Filters
          </button>
        )}
      </div>
    </div>
  );
};

export default FilterBar;


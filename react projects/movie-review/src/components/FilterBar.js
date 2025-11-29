import React from 'react';
import './FilterBar.css';

const FilterBar = ({ selectedGenre, selectedYear, onGenreChange, onYearChange, genres, years }) => {
  return (
    <div className="filter-bar">
      <div className="filter-group">
        <label className="filter-label">Genre:</label>
        <select
          value={selectedGenre}
          onChange={(e) => onGenreChange(e.target.value)}
          className="filter-select"
        >
          <option value="">All Genres</option>
          {genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label className="filter-label">Year:</label>
        <select
          value={selectedYear}
          onChange={(e) => onYearChange(e.target.value)}
          className="filter-select"
        >
          <option value="">All Years</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      {(selectedGenre || selectedYear) && (
        <button
          className="clear-filters-button"
          onClick={() => {
            onGenreChange('');
            onYearChange('');
          }}
        >
          Clear Filters
        </button>
      )}
    </div>
  );
};

export default FilterBar;


import { useNotes } from '../context/NotesContext';
import './Sidebar.css';

const Sidebar = () => {
  const { filter, setFilter, selectedTag, setSelectedTag, getAllTags, notes } = useNotes();

  const allTags = getAllTags();

  const getCounts = () => {
    return {
      all: notes.filter(n => !n.isTrashed && !n.isArchived).length,
      pinned: notes.filter(n => n.isPinned && !n.isTrashed && !n.isArchived).length,
      archived: notes.filter(n => n.isArchived && !n.isTrashed).length,
      trash: notes.filter(n => n.isTrashed).length,
    };
  };

  const counts = getCounts();

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setSelectedTag('');
  };

  const handleTagClick = (tag) => {
    setSelectedTag(selectedTag === tag ? '' : tag);
    setFilter('all');
  };

  return (
    <div className="sidebar">
      <div className="sidebar-section">
        <h3 className="sidebar-title">Views</h3>
        <div className="sidebar-menu">
          <button
            className={`sidebar-item ${filter === 'all' ? 'active' : ''}`}
            onClick={() => handleFilterChange('all')}
          >
            <span className="item-icon">📝</span>
            <span className="item-label">All Notes</span>
            <span className="item-count">{counts.all}</span>
          </button>

          <button
            className={`sidebar-item ${filter === 'pinned' ? 'active' : ''}`}
            onClick={() => handleFilterChange('pinned')}
          >
            <span className="item-icon">📌</span>
            <span className="item-label">Pinned</span>
            <span className="item-count">{counts.pinned}</span>
          </button>

          <button
            className={`sidebar-item ${filter === 'archived' ? 'active' : ''}`}
            onClick={() => handleFilterChange('archived')}
          >
            <span className="item-icon">📦</span>
            <span className="item-label">Archived</span>
            <span className="item-count">{counts.archived}</span>
          </button>

          <button
            className={`sidebar-item ${filter === 'trash' ? 'active' : ''}`}
            onClick={() => handleFilterChange('trash')}
          >
            <span className="item-icon">🗑️</span>
            <span className="item-label">Trash</span>
            <span className="item-count">{counts.trash}</span>
          </button>
        </div>
      </div>

      {allTags.length > 0 && (
        <div className="sidebar-section">
          <h3 className="sidebar-title">Tags</h3>
          <div className="sidebar-tags">
            {allTags.map((tag) => (
              <button
                key={tag}
                className={`tag-item ${selectedTag === tag ? 'active' : ''}`}
                onClick={() => handleTagClick(tag)}
              >
                #{tag}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;


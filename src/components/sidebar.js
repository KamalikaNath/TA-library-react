const Sidebar = ({ onFilter }) => (
  <div className="bg-light p-3 border" style={{ width: '250px' }}>
    <h5>Filter by Author</h5>
    <input
      type="text"
      className="form-control"
      placeholder="Type author name"
      onChange={(e) => onFilter(e.target.value)}
    />
  </div>
);

export default Sidebar;

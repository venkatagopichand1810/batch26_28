

function App() {

  const items = ["1", "2", "3", "4", '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21'];

  const page = 2;
  const itemsPerpage = 10;

  // cal the start and end index

  const start = (page - 1) * itemsPerpage;
  const end = start + itemsPerpage;

  const paginatedItems = items.slice(start, end);

  return (
    <div>
      <h2> Page {page}</h2>
      <ul>

        {paginatedItems.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  )

}

export default App
function SavedPage({ saved, dispatch }) {
  return (
    <div>
      <h2>Saved Items</h2>

      {saved.length === 0 && <p>No saved items</p>}

      {saved.map((item) => (
        <div key={item.code}>
          <p>{item.product_name}</p>

          <button
            onClick={() =>
              dispatch({ type: "REMOVE", payload: item.code })
            }
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default SavedPage;
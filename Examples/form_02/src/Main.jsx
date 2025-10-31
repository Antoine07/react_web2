const initialState = { items: [], total: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'add': {
      // logique pour ajouter un élément
      const newItemsAdd = [...state.items, action.item];
      const total = state.total + 1;

      return {
        ...state,
        items: newItemsAdd,
        total: total,
      };
    }

    default:
      return state;
  }
}

function SimpleForm() {
  const [name, setName] = React.useState("");
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "") return;

    dispatch({ type: "add", item: { name } });
    setName("");
  };

  return (
    <React.Fragment>
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Votre nom"
      />
      <button type="submit">Add</button>
    </form>
    {state.items.length > 0 && (
        <ul>
        {state.items.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    )}
    
    </React.Fragment>
  );
}

// ---------- Bootstrap React ----------
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<SimpleForm />);

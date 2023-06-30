import "./App.css";
import { useState } from "react";

function App() {
  const [update, setUpdate] = useState();
  const [activities, setActivities] = useState([]);
  const [header, setHeader] = useState("");
  const [bgcolor, setBgColor] = useState("");
  const [color, setColor] = useState("");
  const [listItems, setListItems] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(header, bgcolor, color, listItems);
  };

  return (
    <div className="app">
      <div className="form">
        <form className="form_content" onSubmit={submitHandler}>
          <label>HEADER</label>
          <input
            type="text"
            className="text"
            value={header}
            onChange={(e) => setHeader(e.target.value)}
          />

          <label>BACKGROUND-COLOR</label>
          <input
            type="text"
            className="text"
            value={bgcolor}
            onChange={(e) => setBgColor(e.target.value)}
          />

          <label>COLOR</label>
          <input
            type="text"
            className="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />

          <label>ITEM 1</label>
          <input
            type="text"
            className="text"
            value={listItems}
            onChange={(e) => setListItems(e.target.value)}
          />

          <label>ITEM 2</label>
          <input
            type="text"
            className="text"
            value={listItems}
            onChange={(e) => setListItems(e.target.value)}
          />

          <label>ITEM 3</label>
          <input
            type="text"
            className="text"
            value={listItems}
            onChange={(e) => setListItems(e.target.value)}
          />

          <button className="btn" type="submit">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;

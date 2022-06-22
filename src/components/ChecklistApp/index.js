import { React, useState, useEffect } from "react";
import "./ChecklistApp.css";

const Checklist = () => {
  const options = [
    {
      idx: 0,
      name: "Kosher",
      checked: false,
    },
    {
      idx: 1,
      name: "No Celery (inc celeriac)",
      checked: false,
    },
    {
      idx: 2,
      name: "No Egg",
      checked: false,
    },
  ];

  const [selected, setSelected] = useState(options);
  const [item, setItems] = useState([]);
  const [allItems, setAllItems] = useState(false);
  const [itemNum, setItemNum] = useState(0);

  useEffect(() => {
    if (itemNum === 3) setAllItems(true);
  }, [selected, itemNum]);

  const selectItems = e => {
    let itemArr = [...selected];
    itemArr[e.target.name].checked = e.target.checked;

    setSelected(itemArr);

    if (e.target.checked) {
      setItems([...item, e.target.value]);
      setItemNum(itemNum + 1);
    } else {
      setAllItems(false);
      setItems(item.filter((name) => name !== e.target.value));
      setItemNum(itemNum - 1);
    }
  };

  const allSelected = (e) => {
    if (e.target.checked) {
      setAllItems(e.target.checked);
      let itemArr = [...selected];
      let values = [];

      itemArr.forEach((item) => {
        item.checked = e.target.checked;

        values.push(item.name);
      });
      setSelected(itemArr);
      setItems(values);
      setItemNum(3);
    }
  };

  const clearItems = () => {
    setAllItems(false);
    let items = [...selected];
    items.forEach((item) => {
      item.checked = false;
    });
    setSelected(items);
    setItems([]);
    setItemNum(0);
  };

  return (
    <div className="chl-section">
      <div id="val-sel">
        <p>Selected Value: {item.join(", ")}</p>
      </div>
      <ul id="chk-list">
        <li>
          <label className="options">
            <input type="checkbox" checked={allItems} onChange={allSelected} />
            <span className="chckd"></span>
            <p>Select All</p>
          </label>
        </li>
        {options.map((option) => (
          <li key={option.idx}>
            <label className="options">
              <input
                type="checkbox"
                name={option.idx}
                value={option.name}
                onChange={selectItems}
                checked={selected[option.idx].checked}
              />
              <span className="chckd"></span>
              <p>{option.name}</p>
            </label>
          </li>
        ))}
      </ul>
      <div className="btn-sec">
        <button onClick={clearItems} id="clear">
          Clear All
        </button>
      </div>
    </div>
  );
};

export default Checklist;

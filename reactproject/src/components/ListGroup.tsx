import { MouseEvent, useState } from "react";

function ListGroup() {
  let items = ["Pokhara", "Kathmandu", "Bhaktapur", "Lalitpur", "Biratnagar"];
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    //<> is a shorthand for <React.Fragment> which is used to group elements without adding extra nodes to the DOM.
    <>
      <h1>List Group</h1>
      {items.length === 0 && <p>No items to show</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={selectedIndex === index ? "list-group-item active" : "list-group-item"}
            key={item}
            onClick={() => {setSelectedIndex(index); }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

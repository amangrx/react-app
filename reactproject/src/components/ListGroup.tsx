import { MouseEvent } from "react";

function ListGroup() {
  let items = ["Pokhara", "Kathmandu", "Bhaktapur", "Lalitpur", "Biratnagar"];
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    //<> is a shorthand for <React.Fragment> which is used to group elements without adding extra nodes to the DOM.
    <>
      <h1>List Group</h1>
      {items.length === 0 && <p>No items to show</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li
            className="list-group-item"
            key={item}
            onClick={handleClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

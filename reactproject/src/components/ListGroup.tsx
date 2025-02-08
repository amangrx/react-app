
function ListGroup() {
  return (
    //<> is a shorthand for <React.Fragment> which is used to group elements without adding extra nodes to the DOM.
    <>
        <h1>List Group</h1>
        <ul className="list-group">
          <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
          <li className="list-group-item">A fourth item</li>
          <li className="list-group-item">And a fifth one</li>
        </ul>
    </>
  );
}

export default ListGroup;

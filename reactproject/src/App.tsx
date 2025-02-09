// import ListGroup from "./components/ListGroup";

import Alert from "./components/Alert";

  
function App() {
  // let items = ["Pokhara", "Kathmandu", "Bhaktapur", "Lalitpur", "Biratnagar"];
  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // }

  return (
    <div>
      <Alert>
        <h1>Hello World</h1>
      </Alert>
      {/* <ListGroup items={items} heading="Name of Cities" onSelectItem={handleSelectItem}/> */}
    </div>
  );
}

export default App; 
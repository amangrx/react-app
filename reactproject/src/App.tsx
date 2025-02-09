import ListGroup from "./components/ListGroup";
  
function App() {
  let items = ["Pokhara", "Kathmandu", "Bhaktapur", "Lalitpur", "Biratnagar"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  }

  return (
    <div>
      <ListGroup items={items} heading="Name of Cities" onSelectItem={handleSelectItem}/>
    </div>
  );
}

export default App;
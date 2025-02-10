// import ListGroup from "./components/ListGroup";

import Button from "./components/Button";

import Alert from "./components/Alert";
import { useState } from "react";

function App() {
  // let items = ["Pokhara", "Kathmandu", "Bhaktapur", "Lalitpur", "Biratnagar"];
  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // }

  const [alertVisible, setAlertVisible] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>My Alert</Alert>
      )}
      <Button color="primary" onClick={() => setAlertVisible(true)}>
        Click me
      </Button>

      {/* <ListGroup items={items} heading="Name of Cities" onSelectItem={handleSelectItem}/> */}
    </div>
  );
}

export default App;

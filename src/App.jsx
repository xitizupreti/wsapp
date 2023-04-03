import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import ListGroup from "./components/ListGroup.tsx";

const App = () => {
  let items = ["New York", "San Franciso", "Tokyo", "London", "Paris"];
  const handleSelectItem = (item) => {
    console.log(item);
  };
  return (
    <>
      <div>
        <ListGroup
          items={items}
          heading="Cities"
          onSelectItem={handleSelectItem}
        />
      </div>
    </>
  );
};

export default App;

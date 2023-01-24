import React from "react";
import CarForm from "./Components/CarForm";
import CarValue from "./Components/CarValue";
import CarSearch from "./Components/CarSearch";
import CarList from "./Components/CarList";

function App(props) {
  return (
    <div className="container is-fluid">
      <CarForm></CarForm>
      <CarSearch></CarSearch>
      <CarList></CarList>
      <CarValue></CarValue>
    </div>
  );
}

export default App;

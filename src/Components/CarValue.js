import React from "react";
import { useSelector } from "react-redux";

function CarValue(props) {
  const TotalCost = useSelector((state) => {
    const filteredCars = state.cars.carList.filter((car) => {
      if (state.cars.searchTerm) {
        return car.carName
          .toLowerCase()
          .includes(state.cars.searchTerm.toLowerCase());
      }
      return state.cars.carList;
    });
    return filteredCars.reduce((acc, item) => acc + item.carCost, 0);
  });
  return <div>Total cost: ${TotalCost}</div>;
}

export default CarValue;

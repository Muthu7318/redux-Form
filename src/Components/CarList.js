import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../Store";

function CarList(props) {
  const dispatch = useDispatch();
  const { carList, form } = useSelector((state) => {
    if (state.cars.searchTerm) {
      return state.cars.carList.filter((item) =>
        item.carName.toLowerCase().includes(state.cars.searchTerm.toLowerCase())
      );
    }
    return { carList: state.cars.carList, form: state.form };
  });
  console.log(form);
  const handleCarDelete = (car) => {
    dispatch(removeCar(car));
  };

  const renderedCars = carList.map((car) => {
    const bold =
      form.carName &&
      car.carName.toLowerCase().includes(form.carName.toLowerCase());
    return (
      <div key={car.id} className={`panel`}>
        <p style={{ fontWeight: `${bold ? "bold" : ""}` }}>
          {car.carName} - ${car.carCost}
        </p>
        <button
          className="button is-danger"
          onClick={() => handleCarDelete(car)}
        >
          Delete
        </button>
      </div>
    );
  });

  return <div className="car-list">{renderedCars}</div>;
}

export default CarList;

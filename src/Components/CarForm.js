import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeName, changeCost, addCar } from "../Store/index";

function CarForm() {
  const dispatch = useDispatch();
  const { carName, carCost } = useSelector((state) => {
    return {
      carName: state.form.carName,
      carCost: state.form.carCost,
    };
  });

  const handleNameChange = (e) => {
    dispatch(changeName(e.target.value));
  };

  const handleCostChange = (e) => {
    const cost = parseInt(e.target.value) || 0;
    dispatch(changeCost(cost));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const car = {
      carName,
      carCost,
    };
    dispatch(addCar(car));
  };
  return (
    <div className="car-form panel">
      <h4 className="subititle is-3">Add Car</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label htmlFor="carName" className="label">
              Name
            </label>
            <input
              id="carName"
              type="text"
              className="input is-expanded"
              value={carName}
              onChange={handleNameChange}
            />
          </div>
          <div className="field">
            <label htmlFor="cost" className="label">
              Cost
            </label>
            <input
              id="cost"
              type="number"
              className="input is-expanded"
              value={carCost || ""}
              onChange={handleCostChange}
            />
          </div>
        </div>
        <div className="field">
          <button className="button is-link">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default CarForm;

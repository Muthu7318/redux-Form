import { configureStore } from "@reduxjs/toolkit";
import { changeName, changeCost, formReducer } from "./Slices/formSlice";
import {
  addCar,
  removeCar,
  changeSearchTerm,
  carsReducer,
} from "./Slices/carsSlice";

const store = configureStore({
  reducer: {
    cars: carsReducer,
    form: formReducer,
  },
});

export { store, changeName, changeCost, addCar, removeCar, changeSearchTerm };

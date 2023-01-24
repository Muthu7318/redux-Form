import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    searchTerm: "",
    carList: [],
  },
  reducers: {
    addCar(state, action) {
      state.carList.push({
        id: nanoid(),
        carName: action.payload.carName,
        carCost: action.payload.carCost,
      });
    },
    removeCar(state, action) {
      state.carList = state.carList.filter(
        (item) => item.id !== action.payload.id
      );
    },
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
  },
});

export const carsReducer = carsSlice.reducer;
export const { addCar, removeCar, changeSearchTerm } = carsSlice.actions;

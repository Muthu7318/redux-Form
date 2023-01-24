import { createSlice } from "@reduxjs/toolkit";
import { addCar } from "../Slices/carsSlice";

const formSlice = createSlice({
  name: "form",
  initialState: {
    carName: "",
    carCost: "",
  },
  reducers: {
    changeName(state, action) {
      state.carName = action.payload;
    },
    changeCost(state, action) {
      state.carCost = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(addCar, (state, action) => {
      state.carCost = "";
      state.carName = "";
    });
  },
});

export const formReducer = formSlice.reducer;
export const { changeName, changeCost } = formSlice.actions;

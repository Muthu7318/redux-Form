const fileteredCars = () => {
  if (state.cars.searchTerm) {
    return car.carName
      .toLowerCase()
      .includes(state.cars.searchTerm.toLowerCase());
  }
  return state.cars.carList;
};

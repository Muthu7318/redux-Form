import React from "react";
import { changeSearchTerm } from "../Store";
import { useDispatch, useSelector } from "react-redux";

function CarSearch(props) {
  const dispatch = useDispatch();
  const { searchTerm, carList } = useSelector((state) => {
    return state.cars;
  });

  const handleSearchTeamChange = (e) => {
    dispatch(changeSearchTerm(e.target.value));
  };
  return (
    <div className="list-header">
      <h3 className="title is-3">My Cars</h3>
      <div className="search field is-horizontal">
        <label className="label">Search</label>
        <input
          value={searchTerm}
          className="input"
          type="text"
          onChange={handleSearchTeamChange}
        />
      </div>
    </div>
  );
}

export default CarSearch;

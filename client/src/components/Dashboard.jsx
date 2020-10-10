import React, { useState } from "react";
import CharityList from "./CharityList";
import { getByZIP } from "../api/index";

const SearchForm = () => {
  const [orgs, setOrgs] = useState([]);
  const [search, setSearch] = useState("");

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    getByZIP(search)
      .then((res) => {
        setOrgs(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a Zip Code"
          value={search}
          onChange={handleInput}
        />

        <button type="submit">Search</button>
      </form>

      <CharityList charities={orgs} />
    </div>
  );
};

export default SearchForm;

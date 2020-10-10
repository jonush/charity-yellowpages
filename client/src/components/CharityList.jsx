import React, { useState } from "react";
import CharityCard from "./CharityCard";

const CharityList = ({ charities }) => {
  const [filter, setFilter] = useState("abcdefghijklmnopqrstuvwxyz");

  const filterResults = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className="charity-list">
      <div className="content-wrapper">
          <div>
            <form>
                <select onChange={filterResults}>
                <option value="test">Select a type</option>
                <option value="arts">Arts, Culture, Humanities</option>
                <option value="disease">
                    Diseases, Disorders, Medicinal Disciplines
                </option>
                <option value="education">
                    Educational Institutions & Related Activities
                </option>
                <option value="human">Human Services</option>
                <option value="philanthropy">
                    Philanthropy, Voluntarism & Grantmaking Foundations
                </option>
                <option value="recreation">
                    Recreation, Sports, Leisure, Athletics
                </option>
                <option value="religion">Religion, Spiritual Development</option>
                <option value="safety">
                    Public Safety, Disaster Preparedness & Relief
                </option>
                <option value="security">
                    International, Foreign Affairs & National Security
                </option>
                <option value="youth">Youth Development</option>
                </select>
            </form>

            <h1>
                Charities Found: <span>(Showing {charities.length} results)</span>
            </h1>
          </div>
        
        {charities.map((charity, index) => (
            <CharityCard key={index} charity={charity} />
        ))}
      </div>
    </div>
  );
};

export default CharityList;

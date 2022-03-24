import React, { useEffect, useState } from "react";
import "./index.css";

export default function Covid() {
  const [data, setData] = useState([]);

  const getCovidData = async () => {
    const list = await fetch("https://data.covid19india.org/data.json");
    const jsonData = await list.json();
    setData(jsonData.statewise);
  };

  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <>
      <div className="container-fluid mt-5">
        <div className="main-heading">
          <h1 className="mb-5 text-center">
            <span className="font-weight-bold">INDIA</span> COVID 19 DASHBOARD
          </h1>
        </div>

        <div className="table-responsive">
          <table className="table table-hover">
            <thead className="thead-dark">
              <tr>
                <td>State</td>
                <td>Confirmed</td>
                <td>Recovered</td>
                <td>Deaths</td>
                <td>Active</td>
                <td>Updated</td>
              </tr>
            </thead>
            <tbody>
              {data.map((curElement) => {
                return (
                  <tr>
                    <td>{curElement.state}</td>
                    <td>{curElement.confirmed}</td>
                    <td>{curElement.recovered}</td>
                    <td>{curElement.deaths}</td>
                    <td>{curElement.active}</td>
                    <td>{curElement.lastupdatedtime}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

import React from "react";
import { useEffect, useState } from "react";
import { filterData, apiUrl } from "./data.js";
import Navbar from "./Components/Navbar.jsx";
import Filter from "./Components/Filter.jsx";
import Cards from "./Components/Cards.jsx";
import Spinner from "./Components/Spinner.jsx";
import "./App.css";

function App() {
  const dataList = filterData;
  const url = apiUrl;
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [catagory,setCatagory]=useState(dataList[0].title);

  async function FetchUrl(url) {
    try {
      setLoading(true);
      const response = await fetch(url);
      // console.log("response", response);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setData(data.data);
    } catch (e) {
      console.error("Error", e);
    }
    setLoading(false);
  }

  useEffect(() => {
    FetchUrl(url);
  }, []);
  console.log("data", data);

  return (
    <div>
      <Navbar />
      <Filter dataList={dataList} data={data} catagory={catagory} setCatagory={setCatagory} />
      {
        loading ? <Spinner/> : <Cards courses={data} catagory={catagory} />
      }
      {/* <Cards data={data} />/ */}
    </div>
  );
}

export default App;

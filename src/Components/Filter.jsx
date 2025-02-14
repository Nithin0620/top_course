import React from 'react';

function Filter(props) {
  const catagory = props.catagory;
  const setCatagory = props.setCatagory;
  const dataList = props.dataList;
  // const data = props.data;

  function clickHandler(e) {
    setCatagory(e.target.innerText);
  }

  
  return (
   <div>
      {dataList.map((item) => (
        <button key={item.id} onClick={clickHandler}>{item.title}   </button>
      ))}
   </div>
  );
}

export default Filter;

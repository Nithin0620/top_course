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
   <div className='flex justify-center mt-8 mb-5'> 
      {dataList.map((item) => (
        <button key={item.id} onClick={clickHandler}
        className={`bg-blue-300 p-3 rounded-md text-lg m-4 border-[1px]
         border-indigo-200 hover:border-b-4 hover:border-red-200 hover:bg-blue-600 transition-all transition-duration-500
         ${catagory === item.title ? 'bg-blue-600 border-b-4 border-red-200 ' : ' bg-blue-300 border-indigo-200'}`}
        >{item.title}  </button>
      ))}
   </div>
  );
}

export default Filter;

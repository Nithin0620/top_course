import React from 'react';
import Card from './Card';
import {useState} from 'react';
import { useEffect } from 'react';

function Cards(props) {
  const catagory =props.catagory;
  const data = props.data;  
  const Development=data.data.Development;
  const [likedCourses,setLikedCourses]=useState([]);
  const [newData,setNewData]=useState([]);
  // console.log("data in Cards ",data);
  // console.log("Keys in data:", Object.keys(data));
  console.log("Development:", Development);




  // useEffect(()=>{
  //   getCourses();
  // },[catagory]);

  useEffect(() => {
    function getCourses() {
      let newData = [];
      if (!data) {
        return newData;
      }
      // console.log("Category:", catagory);
      // console.log("Data:", data);
      if (catagory === "All") {
        newData = [
          ...(data.data.business || []),
          ...(data.data.development || []),
          ...(data.data.design || []),
          ...(data.data.lifestyle || [])
        ];
      } else {
        newData = data.data[catagory] || [];
      }
      setNewData(newData);
    }

    getCourses();
  }, [catagory, data]);
  console.log("data in newdata",newData);

  return (
    <div>
      {
        newData.map((course) => (
          <Card key={course.id} course={course} />
        ))
      }
    </div>
  );
}

export default Cards;

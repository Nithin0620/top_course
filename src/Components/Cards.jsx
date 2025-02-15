import React from 'react';
import Card from './Card';
import {useState} from 'react';
import { useEffect } from 'react';

function Cards(props) {
  const catagory =props.catagory;
  const data = props.courses;  
  const Development=data.Development;
  const [likedCourses,setLikedCourses]=useState([]);
  // const [newData,setNewData]=useState([]);
  // console.log("data in Cards ",data);
  // // console.log("Keys in data:", Object.keys(data));
  // console.log("Development:", Development);




  // useEffect(()=>{
  //   getCourses();
  // },[catagory]);

  function getCourse(){
    if(catagory==="All"){
      const newData=[];
      for(let key in data){
        newData.push(...data[key]);
      }
      return newData;
    }
    else {
      return data[catagory];
    }
  }
  // console.log("data in newdata",newData);

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5 '>
      {
        getCourse().map((course) => (
          <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses} />
        ))
      }
    </div>
  );
}

export default Cards;

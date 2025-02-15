import React from 'react'
import { FcLike, FcLikePlaceholder } from "react-icons/fc"
import {toast} from 'react-toastify';

const Card = (props) => {
   const data=props.course;
   const likedCourses=props.likedCourses;
   const setLikedCourses=props.setLikedCourses; 
  //  console.log("in card component");
  //  console.log("data in card",data);

  function clickHandler(){
    if(likedCourses.includes(data.id)){
      setLikedCourses(likedCourses.filter((prev)=> (prev!=data.id)));
      toast.warning("Like Removed");
    }
    else{
      if(likedCourses.length==0){
        setLikedCourses([data.id]);
      }
      else{
        setLikedCourses([...likedCourses,data.id]);
      }
      toast.success("Liked Successfully");
      
    
    }
  }

  return (
    <div className='w-[300px]  bg-cyan-800 bg-opacity-80 rounded-md overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out'>
      <div className='relative' >
        <img src={data.image.url} alt="course" />
        <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px]
            grid place-items-center'>
          <button onClick={clickHandler}>
            {
              likedCourses.includes(data.id)?(<FcLike fontSize="1.75rem" />):(<FcLikePlaceholder fontSize="1.75rem" />)
            }
          </button>
        </div>
      </div>
      <div className='p-4'>
        <p className="text-white font-semibold text-lg leading-6" >{data.title}</p>
        <p className='mt-2 text-white' >{
          data.description.length>100? (data.description.substr(0,100) + "...."): (data.description)
          }</p>
      </div>
    </div>
  )
}

export default Card

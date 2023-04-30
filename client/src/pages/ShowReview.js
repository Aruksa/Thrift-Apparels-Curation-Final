import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./ShowReview.css"

const ShowReview = () => {
  const [reviews, setReviews] = useState([])
  useEffect(()=>{
    const getReviews = async () => {
      const res = await axios.get("http://localhost:8080/reviews")
      setReviews(res.data)
    }
    getReviews();
  },[])
  console.log(reviews)
  return (
    <div>
      <h1>Reviews</h1>
      <div>
        {reviews.map(item=>(
          <div key={item._id}>
            <p>Blog</p>
            <h1 className="Label_Work1">{item.title}</h1>
            <p className="Label_Work2" >{item.content}</p>
            <p className="Label_Work3">{item.reference}</p>
          </div>
        ))}
      </div>
    </div>

  )
}

export default ShowReview
import React from 'react'

const Cards = (item) => {
    const[title,author,price,details,img]=item;
  return (
    <div>
        <div className="cards">
            <div className="image_box">
                <img src={img} alt="" srcset="" />
            </div>
            <div className="details">
                <p>{title}</p>
                <p>{author}</p>
                <p>Price-{price}</p>
                <button>Add To Cart</button>
            </div>
        </div>
    </div>
  )
}

export default Cards
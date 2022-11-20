import React from 'react'
import list from '../Data'
import Cards from './Cards'
const Shop = (item) => {
  return (
    <div>
        {
            list.map(()=>{
                <Cards item={item}/>
            })
        }

    </div>
  )
}

export default Shop
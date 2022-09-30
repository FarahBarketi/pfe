import React from 'react'
import ProductsCard from "./ProductsCard"

const ProductsList = ({tours}) => {
  console.log(tours)
  return (
    <div  style={{display:"flex",flexWrap:"wrap",gap:"30px",justifyContent:"center",marginTop:"20px",marginBottom:"20px"}}>
{tours.map((el)=><ProductsCard el={el} key={el.id}/>)}
    </div>
  )
}

export default ProductsList
import React, { useState,useEffect } from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom'
import { Heading } from '@chakra-ui/react'

const SingleProducts = () => {
    const {product_id} = useParams()

    const [singleProducts,setSingleProduct] = useState([])

    const getSingleProduct = async () => {
      try {
        const res = await axios.get(`https://fakestoreapi.com/products/${product_id}`);
        console.log(res.data);
        setSingleProduct(res.data);
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      getSingleProduct();
    }, []);

  return (
      <>
        <Heading textAlign={"center"}>Single Products</Heading>
        {singleProducts.map((ele,ind)=>{
          return (
            <div key={ind}>
              <img src={ele.image} alt={ele.name}/>
              <h3>{ele.title}</h3>
              <p>{ele.description}</p>
            </div>
          )
        })}
      </>
  )
}

export default SingleProducts
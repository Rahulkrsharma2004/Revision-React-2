import React from 'react'
import { useParams } from 'react-router-dom'

const SingleProducts = () => {
    const {product_id} = useParams()
  return (
    <div>SingleProducts:{product_id}</div>
  )
}

export default SingleProducts
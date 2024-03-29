import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Box, Heading, Image, Text, Flex, Button } from "@chakra-ui/react";
const Products = () => {
  const [products, setProducts] = React.useState([]);
  const navigate = useNavigate()
  const getProducts = async () => {
    try {
      const res = await axios.get(`https://fakestoreapi.com/products/`);
      console.log(res.data);
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

    const handleViewDetails = (id) => {
      navigate(`/products/${id}`);
    };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Heading mb={10} textAlign={"center"}>
        All Products Page
      </Heading>
      <Flex flexWrap="wrap">
        {products.map((ele, ind) => (
          <Box key={ind} width={"32%"} h={"auto"} mb={8} mx={2} bg="white" borderRadius="md" boxShadow="md">

              <Image
                src={ele.image}
                alt={ele.name}
                borderRadius="md"
                width={"200px"}
                margin={"auto"}
                height={"200px"}
              />

            <Box p={9} >
              <Heading as="h2" size="m" mb={2}>
                {ele.title}
              </Heading>
              <Text color={"blue"}>INR : {ele.price}</Text>
              <Text>Rating : {ele.rating.rate}</Text>
              <br />
              <Button onClick={()=>handleViewDetails(ele.id)} ml={"20px"}>View Details</Button>
              <Button ml={"30px"}>Add To Cart</Button>
            </Box>
          </Box>
        ))}
      </Flex>
    </>
  );
};

export default Products;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Heading, Flex, Box, Image, Text } from "@chakra-ui/react";

const SingleProducts = () => {
  const { product_id } = useParams();

  const [singleProducts, setSingleProduct] = useState([]);

  const getSingleProduct = async () => {
    try {
      const res = await axios.get(
        `https://fakestoreapi.com/products/${product_id}`
      );
      console.log(res.data);
      setSingleProduct([res.data]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, []);

  return (
    <>
      <Heading textAlign="center" mb={6}>
        Single Products
      </Heading>
      <Flex justifyContent="center">
        {singleProducts.map((ele, ind) => (
          <Box
            key={ind}
            width={800}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            m={4}
            boxShadow="lg"
            padding={10}
            display={"flex"}>
            <Box p={1}>
              <Image src={ele.image} alt={ele.title} w={500} />
            </Box>
            <Box p="6" width={700}>
              <Box d="flex" alignItems="baseline">
                <Heading fontSize="28" fontWeight="bold">
                  {ele.title}
                </Heading>
                <Text fontSize="20" color="blue" mt={2}>
                  {ele.category}
                </Text>
                <Text fontSize="15" color="blue" mt={2}>
                  INR: {ele.price}
                </Text>
                <Text fontSize="15" color="blue" mt={2}>
                  Rating: {ele.rating.rate}
                  <Text as="span">({ele.rating.count})</Text>
                </Text>
              </Box>
              <Text mt={2} fontSize="17">
                {ele.description}
              </Text>
            </Box>
          </Box>
        ))}
      </Flex>
    </>
  );
};

export default SingleProducts;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Heading, Flex, Box, Image, Text } from "@chakra-ui/react";
import { Skeleton } from "antd";

const SingleProducts = () => {
  const { product_id } = useParams();

  const [singleProducts, setSingleProduct] = useState([]);
  const [proLoading, setProLoading] = useState(true);

  const getSingleProduct = async () => {
    try {
      const res = await axios.get(
        `https://fakestoreapi.com/products/${product_id}`
      );
      console.log(res.data);
      setSingleProduct([res.data]);
      setProLoading(false);
    } catch (error) {
      console.log(error);
      setProLoading(false);
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

      {proLoading ? (
        <Flex justifyContent="center">
          {[...Array(1)].map((_, ind) => (
            <Box
              key={ind}
              width={500}
              borderWidth="1px"
              borderRadius="lg"
              m={4}
              mt={"10rem"}
              padding={"2rem"}>
              <Skeleton active paragraph={{ rows: 5 }} />
            </Box>
          ))}
        </Flex>
      ) : (
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
                  <Text
                    fontSize="20"
                    mt={2}
                    color={"white"}
                    bg={"teal"}
                    width={"300px"}
                    borderRadius={"5px"}
                    padding={"5px"}>
                    {ele.category}
                  </Text>
                  <Text
                    fontSize="15"
                    color={"white"}
                    bg={"teal"}
                    width={"300px"}
                    borderRadius={"5px"}
                    padding={"5px"}
                    mt={2}>
                    INR: {ele.price}
                  </Text>
                  <Text
                    fontSize="15"
                    color={"white"}
                    bg={"teal"}
                    width={"300px"}
                    borderRadius={"5px"}
                    padding={"5px"}
                    mt={2}>
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
      )}
    </>
  );
};
export default SingleProducts;

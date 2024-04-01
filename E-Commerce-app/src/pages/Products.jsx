import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { Skeleton } from "antd";
import {
  Box,
  Heading,
  Image,
  Text,
  Flex,
  Button,
  Divider,
  Select,
} from "@chakra-ui/react";

const Products = () => {
  const [products, setProducts] = React.useState([]);
  const [category, setCategory] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [rating, setRating] = React.useState("");
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [proLoading, setProLoading] = useState(true);

  const getProducts = async () => {
    try {
      let URL = `https://fakestoreapi.com/products/`;
      if (category) {
        URL += `category/${category}`;
      }
      const res = await axios.get(URL);
      let sortedProducts = res.data;

      if (price === "lowPrice") {
        sortedProducts = res.data.slice().sort((a, b) => a.price - b.price);
        setProducts(sortedProducts);
      } else if (price === "highPrice") {
        sortedProducts = res.data.slice().sort((a, b) => b.price - a.price);
        setProducts(sortedProducts);
      }
      if (rating === "lowRate") {
        sortedProducts = res.data
          .slice()
          .sort((a, b) => a.rating.rate - b.rating.rate);
        setProducts(sortedProducts);
      } else if (rating === "highRate") {
        sortedProducts = res.data
          .slice()
          .sort((a, b) => b.rating.rate - a.rating.rate);
        setProducts(sortedProducts);
      } else {
        setProducts(sortedProducts);
      }

      setTimeout(() => {
        setProLoading(false);
      }, 5000);
    } catch (error) {
      console.log(error);
      setProLoading(false);
    }
  };

  const handleViewDetails = (id) => {
    navigate(`/products/${id}`);
  };

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
    setSearchParams({ category: event.target.value });
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  useEffect(() => {
    getProducts();
    const categoryFromUrl = searchParams.get("category");
    if (categoryFromUrl) {
      setCategory(categoryFromUrl);
    }
  }, [category, price, rating, searchParams]);

  return (
    <>
      <Heading mb={8} textAlign={"center"} mt={"5rem"} borderBottom={"2px"}>
        All Products Page
      </Heading>
      <Flex justifyContent={"space-around"}>
        <Box>
          <Select
            placeholder="Filter By Category"
            value={category}
            onChange={handleChangeCategory}
            ml={5}
            mb={10}
            width={200}
            bg={"wheat"}>
            <option value="men's clothing">Men-Clothing</option>
            <option value="women's clothing">Women-Clothing</option>
            <option value="jewelery">Jewellery</option>
            <option value="electronics">Electronics</option>
          </Select>
        </Box>
        <Box display={"flex"}>
          <Select
            placeholder="Sort By Price"
            value={price}
            onChange={handlePriceChange}
            ml={5}
            mb={10}
            bg={"wheat"}
            width={200}>
            <option value="lowPrice">Low to High</option>
            <option value="highPrice">High to Low</option>
          </Select>
          <Select
            placeholder="Sort By Rating"
            value={rating}
            onChange={handleRatingChange}
            ml={5}
            bg={"wheat"}
            mb={10}
            width={200}>
            <option value="lowRate">Low to High Rating</option>
            <option value="highRate">High to Low Rating</option>
          </Select>
        </Box>
      </Flex>
      <Divider />
      {proLoading ? (
        <Flex flexWrap="wrap">
          {[...Array(20)].map((_, ind) => (
            <Box key={ind} width={"32%"} h={"auto"} mb={8} mx={2}>
              <Skeleton
                active
                paragraph={{ rows: 4 }}
              />
            </Box>
          ))}
        </Flex>
      ) : (
        <Flex flexWrap="wrap">
          {products.map((ele, ind) => (
            <Box
              key={ind}
              width={"32%"}
              h={"auto"}
              mb={8}
              mx={2}
              bg="white"
              borderRadius="md"
              boxShadow="md">
              <Image
                src={ele.image}
                alt={ele.name}
                borderRadius="md"
                width={"200px"}
                margin={"auto"}
                height={"200px"}
              />

              <Box p={9}>
                <Heading as="h2" size="m" mb={2}>
                  {ele.title}
                </Heading>
                <Text
                  size={9}
                  color={"white"}
                  bg={"teal"}
                  width={"300px"}
                  borderRadius={"5px"}
                  padding={"5px"}>
                  {ele.category}
                </Text>
                <br />
                <Flex gap={"2px"}>
                  <Text
                    color={"blue"}
                    bg={"wheat"}
                    width={"100px"}
                    borderRadius={"5px"}
                    padding={"5px"}>
                    INR : {ele.price}
                  </Text>
                  <Text
                    bg={"yellow"}
                    width={"100px"}
                    borderRadius={"5px"}
                    padding={"5px"}>
                    Rating : {ele.rating.rate}{" "}
                  </Text>
                </Flex>
                <br />
                <Divider />
                <br />
                <Button
                  onClick={() => handleViewDetails(ele.id)}
                  ml={"20px"}
                  bg={"silver"}>
                  View Details
                </Button>
                <Button ml={"30px"} bg={"silver"}>
                  Add To Cart
                </Button>
              </Box>
            </Box>
          ))}
        </Flex>
      )}
    </>
  );
};

export default Products;

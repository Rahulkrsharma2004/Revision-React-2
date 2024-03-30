import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
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
  const navigate = useNavigate();
  const getProducts = async () => {
    try {
      let URL = `https://fakestoreapi.com/products/`;
      if (category) {
        URL += `category/${category}`;
      }
      const res = await axios.get(URL);
      let sortedProducts = res.data;

      if (price === "low") {
        sortedProducts = res.data.slice().sort((a, b) => a.price - b.price);
        setProducts(sortedProducts)
      } else if (price === "high") {
        sortedProducts = res.data.slice().sort((a, b) => b.price - a.price);
        setProducts(sortedProducts);
      }
      else{
        setProducts(sortedProducts)
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleViewDetails = (id) => {
    navigate(`/products/${id}`);
  };

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  useEffect(() => {
    getProducts();
    console.log(price);
  }, [category, price]);

  return (
    <>
      <Heading mb={8} textAlign={"center"}>
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
            width={200}>
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
            width={200}>
            <option value="low">Low Price</option>
            <option value="high">High Price</option>
          </Select>
          <Select placeholder="Sort By Rating" ml={5} mb={10} width={200}>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </Box>
      </Flex>
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
              <Text size={9}>{ele.category}</Text>
              <Text color={"blue"}>INR : {ele.price}</Text>
              <Text>Rating : {ele.rating.rate}</Text>
              <br />
              <Divider />
              <br />
              <Button onClick={() => handleViewDetails(ele.id)} ml={"20px"}>
                View Details
              </Button>
              <Button ml={"30px"}>Add To Cart</Button>
            </Box>
          </Box>
        ))}
      </Flex>
    </>
  );
};

export default Products;

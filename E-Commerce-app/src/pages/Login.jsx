import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";
import "./Login.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  useToast,
} from "@chakra-ui/react"; // Assuming you're using Chakra UI for styling
import { useNavigate } from "react-router-dom";

function Login() {
  const { login } = useContext(AuthContext);
  const toast = useToast();
  const navigate = useNavigate();
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Required fields";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        if (!values.password) {
          errors.password = "Required fields";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          console.log(values);
          setSubmitting(false);
          toast({
            title: "Login Successful",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
          login();
          navigate("/");
        }, 400);
      }}>
      {({ isSubmitting }) => (
        <Form className="LoginForm">
          <h1>LOGIN PAGE HERE</h1>
          <br />
          <FormControl isRequired>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Field type="email" name="email" placeholder="Email" as={Input} />
            <ErrorMessage
              name="email"
              component="div"
              className="error-message"
            />
            <br />
            <FormLabel htmlFor="password">Password</FormLabel>
            <Field
              type="password"
              name="password"
              placeholder="Password"
              as={Input}
            />
            <ErrorMessage
              name="password"
              component="div"
              className="error-message"
            />
            <br />
            <Button
              mt={4}
              colorScheme="blue"
              isLoading={isSubmitting}
              type="submit">
              Submit
            </Button>
          </FormControl>
        </Form>
      )}
    </Formik>
  );
}

export default Login;

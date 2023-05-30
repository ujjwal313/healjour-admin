import { Flex, Spinner } from "@chakra-ui/react";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const Login = lazy(() => import("./pages/Login"));
const Orders = lazy(() => import("./pages/Orders"));

function App() {
  return (
    <>
      <Router>
        <Suspense
          fallback={
            <Flex
              w="100vw"
              h="100vh"
              justifyContent="center"
              alignItems="center"
            >
              <Spinner />
            </Flex>
          }
        >
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;

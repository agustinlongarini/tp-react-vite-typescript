import Header from "./components/Header/header"
import {BrowserRouter as Router} from "react-router-dom";
import AppRoutes from "./routes/AppRoutes"
import Footer from "./components/Footer/footer"
import { Container } from "react-bootstrap";
import { Suspense } from "react";
import Loader from "./components/Loader/loader";

function App() {

  return (
    <>
      <Router>
        <Header/>
        <Container style={{minHeight: '100vh', minWidth: '100%', padding: 0}}>
          <Suspense fallback={<Loader/>}></Suspense>
          <AppRoutes/>
        </Container>
        <Footer/>
      </Router>
    </>
  )
}

export default App

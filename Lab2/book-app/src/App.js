
import './App.css';

// Import boostrap compontents for navbar
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

// Import bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css'

//Import Router dom - to route for pagination
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// import components
import Header from './components/header'
import Content from './components/content'
import Footer from './components/footer'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <Navbar bg="primary" data-bs-theme="dark">
            <Container>
              {/* NavBar created */}
              <Navbar.Brand href="/">Navbar</Navbar.Brand>
              <Nav className="me-auto">
                {/* Url for each link */}
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/read">Read</Nav.Link>
                <Nav.Link href="/create">Create</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </div>
        <Routes>
          <Route path='/' element={<Content></Content>}></Route>
          <Route path='/read' element={<Header></Header>}></Route>
          <Route path='/create' element={<Footer></Footer>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

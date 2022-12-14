import styles from './App.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';
import axios from 'axios';
import { Navbar, Container, Nav, NavDropdown, Form, Button } from 'react-bootstrap'
import { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Search } from 'react-bootstrap-icons';

import MainBg from './MainBg.js'
import Footer from './Footer.js'
import kitchenData from './kitchenData'
import bathData from './bathData'
import Kitchen from './routes/Kitchen.js';
import Bath from './routes/Bath.js';
import Detail from './routes/Detail.js';
import Cart from './routes/Cart.js';
import Test from './routes/Test.js';


function App() {
  let navigate = useNavigate();
  let [kitchen, setKitchen] = useState(kitchenData);
  let [bath, setBath] = useState(bathData);

  return (
    <div className={styles.App}>
      <Navbar className={styles['nav-bar']}>
        <Container fluid>
          <Navbar.Brand
            id={styles.logo}
            onClick={() => { navigate('/') }}
          >낭만소비</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 nav"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link className={styles['nav-link']}>About</Nav.Link>
              <NavDropdown className={styles['nav-link']} title="Product" id="navbarScrollingDropdown">
                <NavDropdown.Item 
                  className={styles['drop-down']}
                  onClick={() => { navigate('/kitchen') }}
                >Kitchen</NavDropdown.Item>
                <NavDropdown.Item 
                  className={styles['drop-down']}
                  onClick={() => { navigate('/bath') }}
                >Bath</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link 
                className={styles['nav-link']}
                onClick={() => { navigate('/cart') }}
                >Cart</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                id={styles['search-box']}
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form>
            <Nav.Link><Search className={styles['search-con']} /></Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={ 
          <>
            <MainBg/> 
            <div className={styles['product-con']}>
              <h2>Product</h2>
              <h5>주방용품</h5>
              <div className={styles.item}>
                { 
                  kitchen.map((a, i)=>{
                    return(
                      <Card a={a} key={i} />
                    )
                  })
                }
              </div>
              <h5>욕실용품</h5>
              <div className={styles.item}>
                { 
                  bath.map((a, i)=>{
                    return(
                      <Card a={a} key={i} />
                    )
                  })
                }
              </div>
            </div>
            <div className={styles['main-ft']}>
              <div className={styles['left-ft']}>
                  <h4>CONTACT</h4>
                  <p className={styles['ft-big']}>02-1234-5678</p>
                  <p>평일 12:00 - 19:30</p>
              </div>
              <div className={styles['right-ft']}>
                  <h4>BANK ACCOUNT</h4>
                  <p className={styles['ft-big']}>신한 000-000-000000</p>
                  <p>예금주 : 낭만소비</p>
              </div>
            </div>
          </>
        }></Route >
        <Route path="/kitchen" element={<Kitchen kitchen={ kitchen } /> } />
        <Route path="/bath" element={<Bath bath={ bath } />} />
        <Route path="/detail/:id" element={ <Detail kitchen={kitchen} bath={bath} />} />
        <Route path="/cart"  element={<Cart />}/> 
        <Route path="/test/:num"  element={<Test />}/> 
      </Routes >
      <Footer />
    </div>

  );
}



function Card({ a }) {
  let navigate = useNavigate();
  let src = `https://raw.githubusercontent.com/rhanziy/contents/main/nmsb-${a.id}.webp`

  return (
    <div className={styles['product-item']} >
      <div>
        <img src={src}
          onClick={() => { navigate(`/detail/${a.id}`) }}
        ></img>
      </div>
      <p>{a.title}</p>
      <p>{a.price}원</p>
    </div>
  )
}



export { App, Card };

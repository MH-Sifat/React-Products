/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import watch from '../../assets/img/watch.jpeg';


const Home = () => {
    const [products,setProduct] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setProduct(data))
    })
    return (
        <div className='container my-5'>
            {
                products.map(product => <Row  key={product.id} xs={1} md={3} className="g-4">
                {Array.from({ length: 6 }).map((_, idx) => (
                  <Col key={idx}>
                    <Card>
                      <Card.Img variant="top" src={watch} />
                      <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text>
                          This is a longer card with supporting text below as a natural
                          lead-in to additional content. This content is a little bit
                          longer.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
           )
            }


        </div>
    );
};

export default Home;
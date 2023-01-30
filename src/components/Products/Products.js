import React from 'react';
import { Nav, Card, Col, Container, Row, ButtonGroup, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Product from '../Product/Product';

const Products = () => {
    // const state = useSelector(s => s)
    // const { products, loading, error } = state
    const { products, loading, error } = useSelector(s => s)

    if (loading) return <p>Loading...............</p>
    if (error) return <p>Reload Again...............</p>
    return (
        <div>
            <Container>
                <Row>
                    <div className='d-flex justify-content-end mb-2'>
                        <ButtonGroup size="sm">
                            <Button active={false}>In Stock</Button>
                            <Button active={false}>Intel</Button>
                            <Button active={false}>AMD</Button>
                        </ButtonGroup>
                    </div>
                </Row>
                <Row>
                    {
                        products?.map(product => <Col key={product._id} xs={12} sm={6} md={6} lg={4} className='mb-4'>
                            <Card className='h-100'>
                                <Product product={product}></Product>
                            </Card>
                        </Col>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Products;
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container, Row, Col } from 'react-bootstrap';

const About = () => {
    const placeholderImageUrl = 'https://via.placeholder.com/400x250.png?text=Recipe+Image';
    const img1 = "https://www.themealdb.com/images/media/meals/vdwloy1713225718.jpg";
    const img3 = "https://www.themealdb.com/images/media/meals/0206h11699013358.jpg";
    const img4 = "https://www.themealdb.com/images/media/meals/jcr46d1614763831.jpg";
    const welcomeImageUrl = "https://images.pexels.com/photos/5898313/pexels-photo-5898313.jpeg?auto=compress&cs=tinysrgb&w=800";

    return (
        <Container className="home mt-4"
            style={{
                minHeight: '100vh',
                backgroundImage: 'url("https://st4.depositphotos.com/9012638/30613/i/450/depositphotos_306130638-stock-photo-herb-and-spices-cooking-background.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <Row>
                <Col md={12} className="text-center text-light">
                    <h1>About Us</h1>
                    <p>Welcome to our recipe app! Discover amazing recipes and cooking tips.</p>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col md={4}>
                    <Card>
                        <Card.Img variant="top" src={img1} />
                        <Card.Body>
                            <Card.Title>Delicious Meals</Card.Title>
                            <Card.Text>
                                Explore our collection of delicious meals from around the world.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Img variant="top" src={img3} />
                        <Card.Body>
                            <Card.Title>Quick Recipes</Card.Title>
                            <Card.Text>
                                Find quick and easy recipes for busy weeknights.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Img variant="top" src={img4} />
                        <Card.Body>
                            <Card.Title>Healthy Options</Card.Title>
                            <Card.Text>
                                Discover healthy and nutritious recipes for a balanced diet.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default About;

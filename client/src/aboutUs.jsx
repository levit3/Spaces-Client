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
        <Container 
          className="home mt-4"
          style={{
            minHeight: '100vh',
            backgroundImage: 'url("https://st4.depositphotos.com/9012638/30613/i/450/depositphotos_306130638-stock-photo-herb-and-spices-cooking-background.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
    </Container>
  );
}

export default About;
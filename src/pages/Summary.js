import React from 'react';
import photo from '../assets/personal_photo.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import Card from 'react-bootstrap/Card';
import './Summary.css';

const Summary = () => {
    return (
        <Container fluid>
            <Row className='justify-content-center'>
                <Figure className='bio-img col-lg-4'>
                    <Figure.Image src={photo} alt='Hiu Chan' className='img-fluid img-thumbnail d-block mx-auto' />
                </Figure>
                <Col med={12} lg={4} className='text-center'>
                    <h1>About Me</h1>
                    <p>
                        I am a <span id="age">26</span> year old burgeoning software developer currently in Philadelphia, PA specializing in the MERN stack but always picking up more along the way!
                    </p>
                    <p>
                        I've been a tinkerer from my preschool legos to zoob in middle school to my desktop computer and commuter bike today. While I've always worked with my hands, I am confident in my problem solving and am ready for the next adventure.
                    </p>
                    <h3 className='mb-3'>My Links:</h3>
                        <Row>
                            <Col>
                                <a href='mailto:hiuchanhk@gmail.com'><i class='far fa-envelope' style={{ 'font-size': '48px' }}></i></a>
                                <p>Email</p>
                            </Col>
                            <Col>
                                <a href='https://www.github.com/oxfordblucher' target='_blank' rel='noreferrer'><i class='fab fa-github' style={{ 'font-size': '48px' }} /></a>
                                <p>Github</p>
                            </Col>
                            <Col>
                                <a href='https://www.linkedin.com/in/hiu-chan-37b116114' target='_blank' rel='noreferrer'><i class='fab fa-linkedin' style={{ 'font-size': '48px' }} /></a>
                                <p>LinkedIn</p>    
                            </Col>
                            <Col>
                                <a href='https://docs.google.com/document/d/1xWioPgge6F38XN11XvWhQMmDjfyxrKpTllZCe50FaeE/edit?usp=sharing' target='_blank' rel='noreferrer'><i class='far fa-file' style={{ 'font-size': '48px' }} /></a>
                                <p>Résumé</p>
                            </Col>
                        </Row>
                </Col>
            </Row>
            <br />
            <h1 className='text-center'>Recent Projects</h1>
            <h4 className='text-center'>A few examples of projects I am fond of</h4>
            <div className='d-flex align-content-stretch flex-wrap'>
                <Card className='col-lg-6'>
                    <Card.Img src='https://github.com/oxfordblucher/BikeAble/raw/master/client/src/assets/screenshot.png?raw=true' alt='Application dashboard featuring mapping features'/>
                    <Card.ImgOverlay>
                        <Card.Title>BikeAble</Card.Title>
                        <Card.Text>
                            <p className='app-summary'>
                                Prototype social media site geared towards hobbyist cyclists. Users can map and save routes of their own design, keep abreast of biking-related incidents in their area, and connect with other local users.
                            </p>
                            <p className='app-contrib'>
                                I was team lead; taking charge of overall product design, mapping implementation, and backend logic and security.
                            </p>
                        </Card.Text>
                        <Card.Link href='https://bike-able.herokuapp.com'>Deployed</Card.Link>
                        <Card.Link href='https://github.com/oxfordblucher/BikeAble'>Repo</Card.Link>
                    </Card.ImgOverlay>
                </Card>
                <Card className='col-lg-6'>
                    <Card.Img src='https://github.com/oxfordblucher/Personality-Pups/raw/master/app/public/assets/img/screenshot.png' alt='Sample quiz question'/>
                    <Card.ImgOverlay>
                        <Card.Title>Personality Pups</Card.Title>
                        <Card.Text>
                            <p className='app-summary'>
                                A personality quiz that matches the user up with certain breeds of dogs. Upon creating an account, the website returns and saves the user's results.
                            </p>
                            <p className='app-contrib'>
                                I created the algorithm behind the quiz and was in charge of backend logic and security along with some UX elements.
                            </p>
                        </Card.Text>
                        <Card.Link href='https://personality-pups.herokuapp.com'>Deployed</Card.Link>
                        <Card.Link href='https://github.com/oxfordblucher/Personality-Pups'>Repo</Card.Link>
                    </Card.ImgOverlay>
                </Card>
                <Card className='col-lg-6'>
                    <Card.Img variant='top' src='https://github.com/oxfordblucher/Restaurant-Roulette/raw/main/screenshots/sample_results.png' alt='Sample results page'/>
                    <Card.ImgOverlay>
                        <Card.Title>UMEWE</Card.Title>
                        <Card.Text>
                            <p className='app-summary'>
                                A restaurant locator based on the midpoint of 2 locations. Intended for users wishing to meet up at a mutually convenient location; they can also filter by price and distance from said midpoint.
                            </p>
                            <p className='app-contrib'>
                                I was in charge of the routing and search result features, focusing primarily on the application logic.
                            </p>
                        </Card.Text>
                        <Card.Link href='https://personality-pups.herokuapp.com'>Deployed</Card.Link>
                        <Card.Link href='https://github.com/oxfordblucher/Personality-Pups'>Repo</Card.Link>
                    </Card.ImgOverlay>
                </Card>
            </div>
        </Container>
    )
}

export default Summary;
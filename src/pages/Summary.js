import React, { useEffect, useState } from 'react';
import photo from '../assets/personal_photo.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import './Summary.css';
import Carousel from 'react-bootstrap/Carousel';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const Summary = () => {
    const [show, setShow] = useState(false);
    const [age, setAge] = useState(0);
    const [project, setProject] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = (proj) => {
        setShow(true);
        setProject(proj);
    }

    const renderProject = () => {
        switch (project) {
            case "BikeAble":
                return (
                    <React.Fragment>
                        <Modal.Body>
                            <Container>
                                <Row>
                                    <Col lg={6}>
                                        <h5>Description:</h5>
                                        <p>
                                            A MERN proto-social media application targetted at hobbyist cyclists. We set ourselves apart from competitors like Strava because we are aiming for a casual audience. Rather than the constant competition of race-times and mileage, we want users to connect based on shared proximity and preferred bike routes instead.
                                        </p>
                                        <h5>Contributions:</h5>
                                        <p>
                                            I assumed the team lead role as this was primarily my concept and design. After designing the rough skeleton of the site, I focused primarily on building the dashboard, data visualization, and additional feature implementation. In addition, I troubleshot and refined the site security building upon a colleague's foundation. Aside from the logo itself, overall aesthetic design and user experience was my handiwork as well.
                                        </p>
                                    </Col>
                                    <Col lg={6}>
                                        <Figure>
                                            <Figure.Image
                                                className='d-block w-100'
                                                src='https://github.com/oxfordblucher/BikeAble/raw/master/client/src/assets/screenshot.png?raw=true'
                                                alt='BikeAble screenshot'
                                            />
                                            <Figure.Caption>
                                                MongoDB, Express, React, Node.js, Here APIs, Bikewise, Refuge Restrooms, Passport, JWT
                                            </Figure.Caption>
                                        </Figure>
                                    </Col>
                                </Row>
                            </Container>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button href='https://bike-able.herokuapp.com' target='_blank' rel='noreferrer'>Deployed App</Button>
                            <Button href='https://github.com/oxfordblucher/BikeAble' target='_blank' rel='norefferer'>Source Code</Button>
                        </Modal.Footer>
                    </React.Fragment>
                )
            case "Personality Pups":
                return (
                    <React.Fragment>
                        <Modal.Body>
                            <Container>
                                <Row>
                                    <Col lg={6}>
                                        <h5>Description:</h5>
                                        <p>
                                            A full stack application targetted at prospective dog owners. Users take a personality quiz that will recommend to them a dog breed taking into account overall temperament, physical activity needs, and likelihood of medical condition and other potential expenses. Upon completion of the quiz, the user is prompted to make an account in order to receive their results. The ultimate goal is to connect the user to local dog shelters that may have a dog meeting the criteria and to refine the database in order to better accomodate mixed breeds.
                                        </p>
                                        <h5>Contributions:</h5>
                                        <p>
                                            I was the lead programmer of the application building upon my colleague who created the quiz itself. I built out the backend; filling the database with dog breed information, creating the user models and rudimentary site security. I also designed most of the front end user experience as well. This was a bootcamp project and unfortunately, we ran out of time but I am confident that if the site were refined, we would be able to find clients (shelters looking to market their animals). 
                                        </p>
                                    </Col>
                                    <Col lg={6}>
                                        <Figure>
                                            <Figure.Image
                                                className='d-block w-100'
                                                src='https://github.com/oxfordblucher/Personality-Pups/raw/master/app/public/assets/img/screenshot.png'
                                                alt='Personality Pups screenshot'
                                            />
                                            <Figure.Caption>
                                                Sequelize, Express, Handlebars, Node.js, dogCEO API (images), Passport
                                            </Figure.Caption>
                                        </Figure>
                                    </Col>
                                </Row>
                            </Container>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button href='https://personality-pups.herokuapp.com' target='_blank' rel='noreferrer'>Deployed App</Button>
                            <Button href='https://github.com/oxfordblucher/Personality-Pups' target='_blank' rel='noreferrer'>Source Code</Button>
                        </Modal.Footer>
                    </React.Fragment>
                )
            case "UMEWE":
                return (
                    <React.Fragment>
                        <Modal.Body>
                            <Container>
                                <Row>
                                    <Col lg={6}>
                                        <h5>Description:</h5>
                                        <p>
                                            A front end website aimed at solving the problem of finding a mutually convenient location for people to meet. Users can put in any two locations of their choosing and are returned a list of restaurants and/or cafes within a certain distance of the midpoint of the two entry locations that meet the keywords criteria. 
                                        </p>
                                        <h5>Contributions:</h5>
                                        <p>
                                            I came up with the initial concept for the project and spearheaded the functionality design as well. My code is behind every feature except for the Bing Maps integration. 
                                        </p>
                                    </Col>
                                    <Col lg={6}>
                                        <Figure>
                                            <Figure.Image
                                                className='d-block w-100'
                                                src='https://github.com/oxfordblucher/Restaurant-Roulette/raw/main/screenshots/sample_results.png'
                                                alt='Personality Pups screenshot'
                                            />
                                            <Figure.Caption>
                                                HTML, CSS, JS, Zomato API, Geocoding API, Bing Maps
                                            </Figure.Caption>
                                        </Figure>
                                    </Col>
                                </Row>
                            </Container>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button href='https://oxfordblucher.github.io/Restaurant-Roulette' target='_blank' rel='noreferrer'>Deployed App</Button>
                            <Button href='https://github.com/oxfordblucher/Restaurant-Roulette' target='_blank' rel='noreferrer'>Source Code</Button>
                        </Modal.Footer>
                    </React.Fragment>
                )
        }
    }

    useEffect(() => {
        const today = new Date()
        const currentYr = today.getFullYear();
        let ageNum = parseInt(currentYr - 1994);
        if (today.getMonth() < 9) {
            ageNum--;
        }
        setAge(ageNum);
    }, []);



    return (
        <Container fluid>
            <Row className='justify-content-center'>
                <Figure className='bio-img col-lg-4'>
                    <Figure.Image src={photo} alt='Hiu Chan' className='img-fluid img-thumbnail d-block mx-auto' />
                </Figure>
                <Col med={12} lg={4} className='text-center'>
                    <h1>About Me</h1>
                    <p>
                        Experienced full stack software engineer with a strong foundation in building efficient, well-documented code and user friendly web applications. I transitioned to tech during the pandemic, demonstrating resilience, adaptiveness and a drive for continuous learning.
                    </p>
                    <p>
                        With a keen eye for detail and a cool head under pressure, I have earned recognition from peers and mentors alike. Now, I am eager to deepen my expertise in a collaborative environment, contributing to impactful projects while learning from seasoned engineers.
                    </p>
                    <h3 className='mb-3'>My Links:</h3>
                    <Row>
                        <Col>
                            <a href='mailto:hiuchanhk@gmail.com'><i className='far fa-envelope' style={{ 'fontSize': '48px' }}></i></a>
                            <p>Email</p>
                        </Col>
                        <Col>
                            <a href='https://www.github.com/oxfordblucher' target='_blank' rel='noreferrer'><i className='fab fa-github' style={{ 'fontSize': '48px' }} /></a>
                            <p>Github</p>
                        </Col>
                        <Col>
                            <a href='https://www.linkedin.com/in/hiu-chan-37b116114' target='_blank' rel='noreferrer'><i className='fab fa-linkedin' style={{ 'fontSize': '48px' }} /></a>
                            <p>LinkedIn</p>
                        </Col>
                        <Col>
                            <a href='https://docs.google.com/document/d/1JALpuDHvtRTsy8vqZYj__83cFdaOiazraiPTx8Vt9is/edit?usp=sharing' target='_blank' rel='noreferrer'><i className='far fa-file' style={{ 'fontSize': '48px' }} /></a>
                            <p>Résumé</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <br />
            <h1 className='text-center'>Recent Projects</h1>
            <h4 className='text-center'>A few examples of projects I am fond of</h4>
            <h6>
                <i className='fas fa-mouse' /> for details
            </h6>
            <Carousel>
                <Carousel.Item interval={5000}>
                    <img
                        className='d-block w-100'
                        src='https://github.com/oxfordblucher/BikeAble/raw/master/client/src/assets/screenshot.png?raw=true'
                        alt='BikeAble screenshot'
                        onClick={() => handleShow('BikeAble')}
                    />
                    <Carousel.Caption>
                        <h3>BikeAble</h3>
                        <p className='app-summary'>
                            Prototype social media site geared towards hobbyist cyclists. Users can map and save routes of their own design, keep abreast of biking-related incidents in their area, and connect with other local users.
                        </p>
                        <p className='app-contrib'>
                            I was the team lead; taking charge of overall product design, mapping implementation, and backend logic and security.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                        className='d-block w-100'
                        src='https://github.com/oxfordblucher/Personality-Pups/raw/master/app/public/assets/img/screenshot.png'
                        alt='Personality Pups screenshot'
                        onClick={() => handleShow('Personality Pups')}
                    />
                    <Carousel.Caption>
                        <h3>Personality Pups</h3>
                        <p className='app-summary'>
                            A personality quiz that matches the user up with certain breeds of dogs. Upon creating an account, the website returns and saves the user's results.
                        </p>
                        <p className='app-contrib'>
                            I created the algorithm behind the quiz and was in charge of backend logic and security along with some UX elements.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                        className='d-block w-100'
                        src='https://github.com/oxfordblucher/Restaurant-Roulette/raw/main/screenshots/sample_results.png'
                        alt='UMEWE screenshot'
                        onClick={() => handleShow('UMEWE')}
                    />
                    <Carousel.Caption>
                        <h3>UMEWE</h3>
                        <p className='app-summary'>
                            A restaurant locator based on the midpoint of 2 locations. Intended for users wishing to meet up at a mutually convenient location; they can also filter by price and distance from said midpoint.
                        </p>
                        <p className='app-contrib'>
                            I was in charge of the routing and search result features, focusing primarily on the application logic.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <Modal show={show} onHide={handleClose} size='xl'>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {project}
                    </Modal.Title>
                </Modal.Header>
                {renderProject()}
            </Modal>

        </Container>
    )
}

export default Summary;

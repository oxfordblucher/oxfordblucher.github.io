import React, { Component } from 'react';
import photo from '../assets/personal_photo.jpg';
import coming from '../assets/coming_soon.jpg';

class Summary extends Component {

    render() {
        return <div className='container'>
            <div className="row">
                <figure className="col-6">
                    <img src={photo} alt="Hiu Chan" className="img-fluid img-thumbnail d-block mx-auto" />
                    <figcaption className="text-center">
                        Email: hiuchanhk@gmail.com
                    <br />
                    Phone: 267-709-7127
                </figcaption>
                </figure>
                <div id="bio" className="col-5">
                    <h1 className="text-center">
                        About Me
                </h1>
                    <p>
                        I am a <span id="age">26</span> year old burgeoning software developer currently residing in Philadelphia, PA. The coding bootcamp I am attending through the University of Pennsylvania has given me a solid foundation in fullstack development but I aspire to work with AI and machine learning someday.
                </p>
                    <p className="d-none d-lg-block d-xl-block">
                        I've been a tinkerer from my preschool legos to zoob in middle school to my desktop computer and commuter bike today. While I've always worked with my hands, I am confident in my problem solving and am ready for the next adventure.
                </p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="card" id="links">
                        <h1 className="card-title text-center">
                            My Links
                    </h1>
                        <ul className="list-group list-group-flush text-center">
                            <li>
                                <a href="https://www.github.com/oxfordblucher" target="_blank" rel="noopener noreferrer">Github</a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/hiu-chan-37b116114" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                            </li>
                            <li>
                                <a href="https://docs.google.com/document/d/1xWioPgge6F38XN11XvWhQMmDjfyxrKpTllZCe50FaeE/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div id="portfolio">
                <div className="row">
                    <div className="col-md">
                        <figure id="umewe"><img src="https://raw.githubusercontent.com/oxfordblucher/Restaurant-Roulette/main/screenshots/initial_page.png" alt="UMEWE" className="img-fluid mx-auto d-inline maxi" />
                            <figcaption>UMEWE</figcaption>
                        </figure>
                    </div>
                    <div className="col-md">
                        <figure id="wthrDash"><img src="https://raw.githubusercontent.com/oxfordblucher/hw6-Weather-Dashboard/main/screenshot.png" alt="Weather Dashboard" className="img-fluid mx-auto d-inline maxi" />
                            <figcaption>Weather Dashboard</figcaption>
                        </figure>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md">
                        <figure id="wkdaySched"><img src="https://raw.githubusercontent.com/oxfordblucher/hw5-Workday-Scheduler/master/assets/screenshot_working-timeblocks.png" alt="Workday Scheduler" className="img-fluid mx-auto d-inline maxi" />
                            <figcaption>Workday Scheduler</figcaption>
                        </figure>
                    </div>
                    <div className="col-md">
                        <figure><img src={coming} alt="Coming Soon" className="img-fluid mx-auto d-inline maxi" />
                            <figcaption>Coming Soon</figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Summary;
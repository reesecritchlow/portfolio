import '../App.css';
import Header from '../components/Header.jsx';
import image353 from '../media/353robot.png';

import video253 from '../media/robot-video.mp4';
import circuit253 from '../media/353circ.jpg';
import trackFilter from '../media/track-filter.png';

import pa from '../media/brave-pa.png';

function Homepage() {
    return (
        <div class="parent">
            <div class="centerParent">
                <Header pageState={'portfolio'} />
                    <div class="imageHalf">
                        <div>
                            <div class="imagetext">
                            <h2>Artificial Intelligence Robot Software</h2>
                            <h4>Fall 2022</h4>
                            <hr />
                                <p>
                                    <b>Key Technologies:</b> Python, Robot Operating System, TensorFlow Keras, OpenCV, Linux
                                    <br />
                                    <br />
                                    <b>Key Achievements:</b> Constructed software for a simulated robot in a ROS Gazebo simulation
                                    to autonomously drive and collect data using techniques in machine learning and computer vision.
                                </p>
                            </div>
                        </div>
                        <div class="imageStack">
                            <img src={image353} class='portfolio' alt='robot in a ROS gazebo simulation' />
                            Bird's Eye View of the Simulated Gazebo Environment
                            <img src={trackFilter} class='portfolio' alt='binarized view of a road simulation' />
                            Binarized Video Feed from the Robot for Neural Network Processing
                        </div>
                    </div>
                    <hr class="divider" />
                    <div class="imageHalf">
                        <div>
                            <div class="imagetext">
                            <h2>Autonomous Treasure Collecting Robot</h2>
                            <h4>Summer 2022</h4>
                            <hr />
                                <p>
                                    <b>Key Technologies:</b> Arduino, C++, PlatformIO, Circuit Design and Analysis, Signal Processing, Soldering, MATLAB, Simulink
                                    <br />
                                    <br />
                                    <b>Key Achievements:</b> Designed, prototyped, and assembled a fully autonomous treasure collecting robot from 
                                    the ground up, which placed 4th out of 16 teams during the UBC Engineering Physics robot summer competition.
                                </p>
                            </div>
                        </div>
                        <div class="imageStack">
                            <video class="portfolio" loop autoPlay muted>
                                <source src={video253} type="video/mp4" />
                                Videos not supported.
                            </video>
                            Video of the robot executing tasks on the competition surface.
                            <img class="portfolio" src={circuit253} alt="circuits"/>
                            Finished infrared signal processing filter.
                        </div>
                    </div>
                    <hr class="divider" />
                    <div class="imageHalf">
                        <div>
                            <div class="imagetext">
                            <h2>Internal Product Management Tool</h2>
                            <h4>Spring 2022</h4>
                            <hr />
                                <p>
                                    <b>Key Technologies:</b> Javascript, React.js, HTML, CSS, Express.js, Node.js
                                    <br />
                                    <br />
                                    <b>Secondary Technologies:</b> PostgreSQL, AWS
                                    <br />
                                    <br />
                                    <b>Key Achievements:</b> Created a comprehensive internal product management tool used for the provisioning and organization
                                    of products.
                                    <br />
                                    <br />

                                </p>
                            </div>
                        </div>
                        <div class="imageStack">
                            <img class="portfolio" src={pa} alt="a website"/>
                        </div>
                    </div>

            </div>
        </div>
    );
}

export default Homepage;
import '../App.css';
import Header from '../components/Header.jsx';
import image353 from '../media/353robot.png';

import video253 from '../media/robot-video_1.mp4';
import circuit253 from '../media/353circ.jpg';
import trackFilter from '../media/track-filter.png';

import pa from '../media/brave-pa.png';
import GithubButton from '../components/GithubButton';

import { useMediaQuery } from 'react-responsive';

    

function Homepage() {

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    return (
        <div class="parent">
            <div class="centerParent">
                <Header pageState={'portfolio'} />
                    <div class={isTabletOrMobile ? 'imageHalfMobile' : 'imageHalf'}>
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
                                    <br />
                                    <br />
                                    <ul>
                                        <li>Used Robot Operating System (ROS) to interop with a simulated robot in a Gazebo simulation.</li>
                                        <li>
                                            Created a neural network using TensorFlow in Google Colab to characterize images taken by the robot&apos;s
                                            camera into various driving actions to feedback into the robot's drivetrain.
                                        </li>
                                        <li>
                                            Worked with a partner to develop another neural network to identify characters on simulated license plates and 
                                            used multithreaded code to process the data in order to preserve the responsiveness of other tasks.
                                        </li>
                                        <li>
                                            Used OpenCV and techniques in computer vision to identify key features and reduce the dimensionality of spaces
                                            in order to navigate the course and collect data.
                                        </li>
                                        <li>Worked exclusively in a purpose-built Linux environment for greater control over code and software.</li>
                                    </ul>
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
                    <div class={isTabletOrMobile ? 'imageHalfMobile' : 'imageHalf'}>
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
                                    the ground up in a group of 4, which placed 4th out of 16 teams during the UBC Engineering Physics robot summer competition.
                                    <br />
                                    <br />
                                    <ul>
                                        <li>Designed and fabricated a custom circuit to filter and distinguish a 1kHz infrared signal from a 10kHz infrared signal.</li>
                                        <ul>
                                            <li>Experimented with methods in digital signal processing such as cross-correlation.</li>
                                            <li>Used MATLAB and Simulink to prototype various circuits and observe their behaviours to preserve fabrication time.</li>
                                        </ul>
                                        <li>Constructed an extensive state machine in C++ to control the robot.</li>
                                        <ul>
                                            <li>Created drivers for every component on the robot to interact with the state machine. </li>
                                            <li>Used PID control to provide output signals to the external environment based on reflectance, infrared, and rotary encoder signals on board the robot.</li>
                                        </ul>
                                    </ul>
                                </p>
                                <GithubButton repoLink='https://github.com/reesecritchlow/robot-summer' />
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
                    <div class={isTabletOrMobile ? 'imageHalfMobile' : 'imageHalf'}>
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
                                    <ul>
                                        <li>Constructed a comprehensive user interface using React and Bootstrap.</li>
                                        <li>Implemented an OAuth2 authentication pathway to access the company&apos;s ClickUp information within the app.</li>
                                        <li>Utilized several APIs to integrate and harmonize several of the company&apos;s softwares, such as:</li>
                                        <ul>
                                            <li>Particle API to monitor the statuses of IoT products in both provisioning and production.</li>
                                            <li>ClickUp API to view and modify tasks and tickets in one place.</li>
                                            <li>Amazon Web Services API to register LoRA WAN devices to AWS&apos;s IoT network.</li>
                                            <li>Twilio API to purchase phone numbers and associate them to devices.</li>
                                        </ul>
                                        <li>Developed endpoints using Express.js to perform tasks that transcended the scope of a web app.</li>
                                        <li>
                                            Interacted with the company&apos;s database using the PostgreSQL package for Node.js in order to add
                                            provisioned products to the database.
                                        </li>
                                        <li>Documented code and implemented a roadmap for future developers to continue the project after my time at the company.</li>
                                    </ul>
                                </p>
                                <br />
                                <br />
                                <br />
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

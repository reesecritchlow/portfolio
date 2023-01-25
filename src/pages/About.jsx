import Header from '../components/Header.jsx';
import '../App.css';
import SkillBadge from '../components/SkillBadge.jsx';
import pythonLogo from '../media/python.png';
import jsLogo from '../media/jslogo.png';
import javaLogo from '../media/javalogo.png';
import cppLogo from '../media/cppLogo.png';
import htmlLogo from '../media/htmlLogo.svg';
import cssLogo from '../media/cssLogo.png';
import httpLogo from '../media/httpLogo.png';
import reactLogo from '../media/reactLogo.png';
import arduinoLogo from '../media/arduinoLogo.png';
import tensorflowLogo from '../media/tensorflowLogo.png';
import opencvLogo from '../media/opencvLogo.webp';
import linuxLogo from '../media/linuxLogo.png';
import gitLogo from '../media/gitLogo.png';
import circuitLogo from '../media/circuitLogo.png';
import matlabLogo from '../media/matlabLogo.png';
import simulinkLogo from '../media/simulinkLogo.png';
import sqlLogo from '../media/sqlLogo.png';
import onshapeLogo from '../media/onshapeLogo.png';
import rosLogo from '../media/rosLogo.png';
import nodeLogo from '../media/nodeLogoEdited.svg';
import solderingLogo from '../media/solderingLogo.png';


function About() {

    

    return (
        <div class="parent">
            <div class="centerParent">
                <Header pageState={'about'} />
                <div class="imageHalf">
                        <div>
                            <div class="imagetext description">
                            <section class="hidden">
                            <h3>Overview</h3>
                            <hr />
                            My name is Reese Critchlow and I'm an Engineering Physics student at the University of British Columbia.
                            My studies and career are currently focused on software and electrical engineering, with special interests
                            in biomedical technologies, clean energy technology, robotics, and machine learning. I'm currently seeking co-op employment
                            opportunities for Summer and Fall 2023.
                            <br />
                            <br />
                            </section>
                            
                            <h3>Skills</h3>
                            <hr />

                            <br />
                            <h4 class="centered hidden">Main Programming Languages</h4>
                            <div class="skillContainer hidden">
                                <SkillBadge name={'Python'} logo={pythonLogo} /*experiences={['General Purpose Programming', 'Math and Physics', 'Machine Learning', 'Computer Vision']} */ />
                                <SkillBadge name={'JavaScript'} logo={jsLogo} />
                                <SkillBadge name={'Java'} logo={javaLogo} />
                                <SkillBadge name={'C++'} logo={cppLogo} />
                            </div>
                            <h4 class="centered hidden">Web Development</h4>
                            <div class="skillContainer hidden">
                                <SkillBadge name={'HTML'} logo={htmlLogo} />
                                <SkillBadge name={'CSS'} logo={cssLogo} />
                                <SkillBadge name={'HTTP'} logo={httpLogo} />
                            </div>
                            <h4 class="centered hidden">Supporting Frameworks and Technologies</h4>
                            <div class="skillContainer hidden">
                                <SkillBadge name={'React'} logo={reactLogo}/>
                                <SkillBadge name={'React Native'} logo={reactLogo} />
                                <SkillBadge name={'Arduino'} logo={arduinoLogo} />
                                <SkillBadge name={'TensorFlow'} logo={tensorflowLogo} />
                                <SkillBadge name={'OpenCV'} logo={opencvLogo} />
                                <SkillBadge name={'Linux/Unix'} logo={linuxLogo} />
                                <SkillBadge name={'Git/GitHub'} logo={gitLogo} />
                                <SkillBadge name={'Node.js'} logo={nodeLogo} />
                            </div>
                            <h4 class="centered hidden">Electronics and Hardware</h4>
                            <div class="skillContainer hidden">
                                <SkillBadge name={'Circuit Design and Analysis'} logo={circuitLogo} />
                                <SkillBadge name={'Soldering'} logo={solderingLogo} />
                            </div>
                            <h4 class="centered hidden">Developing Languages and Technologies</h4>
                            <div class="skillContainer hidden">
                                <SkillBadge name={'MATLAB'} logo={matlabLogo} />
                                <SkillBadge name={'Simulink'} logo={simulinkLogo} />
                                <SkillBadge name={'SQL'} logo={sqlLogo} />
                                <SkillBadge name={'CAD (OnShape)'} logo={onshapeLogo} />
                                <SkillBadge name={'ROS (Robot Operating System)'} logo={rosLogo} />
                            </div>

                            <section class="hidden">
                            <h4>Skills I&apos;m Looking to Acquire:</h4>
                            <ul>
                                <li>PCB Design and Development</li>
                            </ul>

                            </section>

                            <br />
                            <section class="hidden">
                            <h3>Technical Experience</h3>
                            <hr />
                            Some contexts and projects that I have employed my skills are:
                            <br />
                            <br />
                            <ul>
                                <li><b>Robotics, Software Development, Electronics, Fabrication: </b> Building an Autonomous Treasure Collecting Robot (Project Work, Summer 2022)</li>
                                <li><b>Robotics, Software Development:</b> Developing software in Python alongside TensorFlow and OpenCV to control a simulated robot (Project Work, Fall 2022)</li>
                                <li><b>Full-Stack Software Development:</b> Worked as a software developer to build a comprehensive web app in React (Employment, Spring 2022)</li>
                            </ul>
                            <br />
                            More information on each of these projects can be found in my <a href="/portfolio" class="nostyle" >portfolio</a>.
                            <br />
                            <br />
                            </section>
                            <section class="hidden">

                            <h3>Other Life Experiences</h3>
                            <hr />
                            I believe that aside from my technical experiences and my education, my non-technical experiences set me apart from others.
                            Some of these experiences include, but are not limited to:
                            <br />
                            <br />
                            <ul>
                                <li>Initial Attack Wildfire Fighter, British Columbia Wildfire Service, Williams Lake, British Columbia</li>
                                <li>Travel and Safety Officer, UBC Nordic Ski Team (current)</li>
                                <li>Novice Team Member, UBC Rowing Team</li>
                                <li>Lifeguard and Swim Instructor, Vancouver Parks Board</li>
                            </ul>
                            </section>
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />

                            </div>
                            
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default About;
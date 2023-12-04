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
import lispLogo from '../media/lispLogo.svg';
import jenkinsLogo from '../media/jenkins-logo.png';

function About() {

    return (
        <div className="parent">
            <div className="centerParent">
                <Header pageState={'about'} />
                <div className="imageHalf">
                        <div>
                            <div className="imagetext description">
                            <section className="hidden">
                            <h3>Overview</h3>
                            <hr />
                              My name is Reese Critchlow and I'm an Engineering Physics student at the University of British Columbia.
                              My studies and career are currently focused on software, hardware, and electrical engineering, with special interests
                              in biomedical technology, clean energy, robotics, and machine learning. I'm currently seeking co-op employment
                              opportunities for Summer 2024.
                            <br />
                            <br />
                            </section>
                            
                            <h3>Skills</h3>
                            <hr />

                            <br />
                            <h4 className="centered hidden">Main Programming Languages</h4>
                            <div className="skillContainer">
                              <SkillBadge name={'Python'} logo={pythonLogo} /*experiences={['General Purpose Programming', 'Math and Physics', 'Machine Learning', 'Computer Vision']} */ />
                              <SkillBadge name={'JavaScript'} logo={jsLogo} />
                              <SkillBadge name={'Java'} logo={javaLogo} />
                              <SkillBadge name={'C++'} logo={cppLogo} />
                              <SkillBadge name={'Common Lisp'} logo={lispLogo}/>
                            </div>
                            <h4 className="centered hidden">Web Development</h4>
                            <div className="skillContainer">
                                <SkillBadge name={'HTML'} logo={htmlLogo} />
                                <SkillBadge name={'CSS'} logo={cssLogo} />
                                <SkillBadge name={'HTTP'} logo={httpLogo} />
                            </div>
                            <h4 className="centered hidden">Supporting Frameworks and Technologies</h4>
                            <div className="skillContainer">
                              <SkillBadge name={'React'} logo={reactLogo}/>
                              <SkillBadge name={'React Native'} logo={reactLogo} />
                              <SkillBadge name={'Arduino/Embedded Development'} logo={arduinoLogo} />
                              <SkillBadge name={'Linux/Unix'} logo={linuxLogo} />
                              <SkillBadge name={'Git'} logo={gitLogo} />
                              <SkillBadge name={'Node.js'} logo={nodeLogo} />
                              <SkillBadge name={'Jenkins'} logo={jenkinsLogo}/>
                            </div>
                            <h4 className="centered hidden">Electronics and Hardware</h4>
                            <div className="skillContainer">
                              <SkillBadge name={'CAD (OnShape)'} logo={onshapeLogo} />
                              <SkillBadge name={'Circuit Design and Analysis'} logo={circuitLogo} />
                              <SkillBadge name={'Soldering'} logo={solderingLogo} />
                            </div>
                            <h4 className="centered hidden">Developing Languages and Technologies</h4>
                            <div className="skillContainer">
                              <SkillBadge name={'MATLAB'} logo={matlabLogo} />
                              <SkillBadge name={'Simulink'} logo={simulinkLogo} />
                              <SkillBadge name={'TensorFlow'} logo={tensorflowLogo} />
                              <SkillBadge name={'SQL'} logo={sqlLogo} />
                              <SkillBadge name={'OpenCV'} logo={opencvLogo} />
                              <SkillBadge name={'ROS (Robot Operating System)'} logo={rosLogo} />
                            </div>

                            <section className="hidden">
                            <h4>Skills I&apos;m Looking to Acquire:</h4>
                            <ul>
                                <li>PCB Design and Development</li>
                            </ul>

                            </section>

                            <br />
                            <section className="hidden">
                            <h3>Technical Experience</h3>
                            <hr />
                            Some contexts and projects that I have employed my skills are:
                            <br />
                            <br />
                              <ul>
                                <li><b>Electrical Design, Mechanical Design, Embedded Development, and Research</b> Currently working in the Molecular Mechatronics Lab at UBC in partnership with Honda to design novel soft sensors for humanoid robotics. (Employment, Fall 2023)</li>
                                <li><b>Backend Software Development, Testing Infrastructure</b>: Worked in the processor development software team at D-Wave systems to work on the backend infrastucutre of D-Wave's quantum computing stack. (Employment, Summer 2023)</li>
                                <li><b>Robotics, Software Development, Electronics, Fabrication: </b> Building an Autonomous Treasure Collecting Robot (Project Work, Summer 2022)</li>
                                <li><b>Robotics, Software Development:</b> Developing software in Python alongside TensorFlow and OpenCV to control a simulated robot (Project Work, Fall 2022)</li>
                                <li><b>Full-Stack Software Development:</b> Worked as a software developer to build a comprehensive web app in React (Employment, Spring 2022)</li>
                            </ul>
                            <br />
                            More information on these projects can be found in my <a href="/portfolio" className="nostyle" >portfolio</a>.
                            <br />
                            <br />
                            </section>
                            <section className="hidden">

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

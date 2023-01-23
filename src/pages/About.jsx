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


function About() {
    return (
        <div class="parent">
            <div class="centerParent">
                <Header pageState={'about'} />
                <div class="imageHalf">
                        <div>
                            <div class="imagetext">
                            <h3>Overview</h3>
                            My name is Reese Critchlow and I'm an Engineering Physics student at the University of British Columbia.
                            My studies and career are currently focused on software and electrical engineering, with special interests
                            in biomedical technologies, clean energy technology, and machine learning. I'm currently seeking co-op employment
                            opportunities for Summer and Fall 2023.
                            <br />
                            <br />
                            <h3>Skills</h3>
                            Currently, my main skills are as follows:
                            <br />
                            <br />
                            <b>Main Programming Languages:</b>
                            <div class="skillContainer">
                                <SkillBadge name={'Python'} logo={pythonLogo} experiences={['General Purpose Programming']} />
                                <SkillBadge name={'JavaScript'} logo={jsLogo} />
                                <SkillBadge name={'Java'} logo={javaLogo} />
                                <SkillBadge name={'C++'} logo={cppLogo} />
                            </div>
                            <b>Web Development:</b>
                            <div class="skillContainer">
                                <SkillBadge name={'HTML'} logo={htmlLogo} />
                                <SkillBadge name={'CSS'} logo={cssLogo} />
                                <SkillBadge name={'HTTP'} logo={httpLogo} />
                            </div>
                            <b>Supporting Frameworks and Technologies:</b>
                            <ul>
                                <li>React</li>
                                <li>React Native</li>
                                <li>Arduino</li>
                                <li>TensorFlow</li>
                                <li>OpenCV</li>
                                <li>Linux/UNIX</li>
                                <li>Git/GitHub</li>
                            </ul>
                            <b>Electronics and Hardware:</b>
                            <ul>
                                <li>Circuit Design and Analysis</li>
                            </ul>
                            <b>Developing Languages and Technologies:</b>
                            <ul>
                                <li>MATLAB</li>
                                <li>Simulink</li>
                                <li>SQL</li>
                                <li>CAD (OnShape and Solidworks)</li>
                            </ul>
                            <b>Skills I&apos;m Looking to Aquire:</b>
                            <ul>
                                <li>PCB Design and Development</li>
                                <li>Increase CAD Abilities</li>
                            </ul>

                            <br />
                            <h3>Technical Experience</h3>
                            Some contexts and projects that I have employed my skills are:
                            <ul>
                                <li><b>Robotics, Software Development, Electronics, Fabrication: </b> Building an Autonomous Treasure Collecting Robot (Project Work, Summer 2022)</li>
                                <li><b>Robotics, Software Development:</b> Developing software in Python alongside TensorFlow and OpenCV to control a simulated robot (Project Work, Fall 2022)</li>
                                <li><b>Full-Stack Software Development:</b> Worked as a software developer to build a comprehensive web app in React (Employment, Spring 2022)</li>
                            </ul>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default About;
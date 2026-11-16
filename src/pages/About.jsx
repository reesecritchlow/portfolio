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
				<p>Hi! My name is Reese Critchlow. I currently work for Stand Insurance to build better risk models for property insurance and put them into motion on scalable infrastructure.</p>
			</div>
		    </div>
		</div>
	    </div>
        </div>
    );
}

export default About;

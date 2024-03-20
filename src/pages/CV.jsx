import '../App.css';
import Header from '../components/Header.jsx';

import resume1 from '../media/electrical-resume-nc.png';
import resume2 from '../media/electrical-resume-nc2.png';
import resumePDF from '../media/Reese_Critchlow_Resume.pdf';


function CV() {
    return (
        <div className="parent">
            <div className="centerParent">
                <Header pageState={'cv'} />
                <div className="simpleCenter">
                    <h4> 
                    email: <a className="nostyle" href='mailto: reesecritchlow@gmail.com'>reesecritchlow@gmail.com</a>
                    </h4>
                </div>
                <div className="download">
                  <a href={resumePDF} className="nostyle" target="_blank" rel="noopener noreferrer">pdf</a>
                </div>
                <div>
                    <img src={resume1} className="resume" alt="resume page 1" />
                    <img src={resume2} className="resume" alt="resume page 2" />
                </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            </div>
        </div>
    );
}

export default CV;

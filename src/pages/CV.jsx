import '../App.css';
import Header from '../components/Header.jsx';

import resume1 from '../media/electrical-resume-nc.png';
import resume2 from '../media/electrical-resume-nc2.png';
import resumePDF from '../media/resume-2023-no-contact.pdf';


function CV() {
    return (
        <div class="parent">
            <div class="centerParent">
                <Header pageState={'cv'} />
                <div class="download">
                    <a href={resumePDF} class="nostyle" target="_blank" rel="noopener noreferrer">pdf</a>
                </div>
                
                <img src={resume1} class="resume" alt="resume page 1" />
                <img src={resume2} class="resume" alt="resume page 2" />
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
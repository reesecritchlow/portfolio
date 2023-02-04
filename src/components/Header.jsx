import '../App.css';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import github from '../media/github-mark.svg';
import linkedin from '../media/linkedin.svg';

function Header(props) {
    const { pageState } = props;

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 600px)' });

    if (isTabletOrMobile) {
        return (
            <>
                <div class="topDivider">
                    <div class="pageTitle">
                        Reese <br /> Critchlow
                    </div>
                </div>
                <div class="menubar">
                    <div>
                        <a class={pageState === 'about' ? 'underline' : 'nostyle'} href="/">about</a>
                    </div>
                    <div>
                        <a class={pageState === 'portfolio' ? 'underline' : 'nostyle'} href="/portfolio">portfolio</a> 
                    </div>
                    <div>
                        <a class={pageState === 'cv' ? 'underline' : 'nostyle'} href="/cv">cv</a>
                    </div>
                    <div>
                        <a class="nostyle" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/reesecritchlow/">linkedin</a>
                    </div>
                    <div>
                        <a class="nostyle" target="_blank" rel="noopener noreferrer" href="https://github.com/reesecritchlow">github</a>
                    </div>
                </div>
            </>
        );
    }

    return (
        <>
            <div class="topDivider">
                <div class="pageTitle">
                    Reese <br /> Critchlow
                </div>
                <div>
                    <div>
                        <a class="nostyle" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/reesecritchlow/">
                            <img class="logoLink" src={linkedin} alt="linkedin logo" />
                        </a>
                    </div>

                    <div>
                        <a class="nostyle" target="_blank" rel="noopener noreferrer" href="https://github.com/reesecritchlow">
                            <img class="logoLink" src={github} alt="github logo" />
                        </a>
                    </div>
                </div>
            </div>
            <div class="menubar">
                <div>
                    <a class={pageState === 'about' ? 'underline' : 'nostyle'} href="/">about</a>
                </div>
                <div>
                    <a class={pageState === 'portfolio' ? 'underline' : 'nostyle'} href="/portfolio">portfolio</a> 
                </div>
                <div>
                    <a class={pageState === 'cv' ? 'underline' : 'nostyle'} href="/cv">cv</a>
                </div>
            </div>
        </>
    );
}

Header.propTypes = {
    pageState: PropTypes.string
}

Header.defaultProps = {
    pageState: 'home'
}

export default Header;
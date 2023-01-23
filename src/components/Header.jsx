import '../App.css';
import PropTypes from 'prop-types';

function Header(props) {
    const { pageState } = props;

    return (
        <>
            <div class="topDivider">
                <div class="pageTitle">
                    Reese <br /> Critchlow
                </div>
                <div class="pageSubtitle">
                    <a class="nostyle" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/reesecritchlow/">linkedin</a>
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
import './GithubButton.css';
import githubLogo from '../media/githubLogo.svg';
import PropTypes from 'prop-types';
import githubText from '../media/github.svg';

function GithubButton(props) {
    const { repoLink } = props;

    return (
        <a href={repoLink} target="_blank" rel="noopener noreferrer" class="nostyle">
            <div class="main">
                <img src={githubLogo} alt='github logo' class='ghlogo' />
                <div class="textStack">
                    <div>
                        View the code on
                    </div>
                    <img src={githubText} alt='github text' class='ghtext' />
                </div>
            </div>
        </a>

    );
}

GithubButton.propTypes = {
    repoLink: PropTypes.string.isRequired
}

export default GithubButton
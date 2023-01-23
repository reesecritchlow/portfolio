import './SkillBadge.css';
import PropTypes from 'prop-types';

function SkillBadge(props) {
    const { name, logo, experiences } = props;
    return (
        <div class="exterior">
            <img class="icon" src={logo} alt="logo" />
            <div class="textblock">
                <h4 class="name">{name}</h4>
                {/* <ul>
                    {experiences.map(exp => {
                        return (<li>{exp}</li>)
                    })}
                </ul> */}
            </div>
        </div>
    );
}

SkillBadge.propTypes = {
    name: PropTypes.string,
    logo: PropTypes.any,
    experiences: PropTypes.arrayOf(PropTypes.string)
}

SkillBadge.defaultProps = {
    name: PropTypes.isRequired,
    logo: null,
    experiences: [],
}

export default SkillBadge;
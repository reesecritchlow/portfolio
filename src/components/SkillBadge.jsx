import './SkillBadge.css';
import PropTypes from 'prop-types';
import '../App.css';

function SkillBadge(props) {
    const { name, logo, experiences, dark } = props;
    return (
        <div class="exterior hidden">
            <div class="logoRow">
                <img class={dark ? 'darkIcon' : 'icon'} src={logo} alt="logo" />
                <h4 class="name">{name}</h4>
            </div>
            <ul>
                    {experiences.map(exp => {
                        return (<li>{exp}</li>)
                    })}
            </ul>
        </div>
    );
}

SkillBadge.propTypes = {
    name: PropTypes.string,
    logo: PropTypes.any,
    experiences: PropTypes.arrayOf(PropTypes.string),
    dark: PropTypes.bool
}

SkillBadge.defaultProps = {
    name: PropTypes.isRequired,
    logo: null,
    experiences: [],
    dark: false,
}

export default SkillBadge;
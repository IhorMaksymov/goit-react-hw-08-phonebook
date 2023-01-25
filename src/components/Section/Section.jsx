import PropTypes from 'prop-types';

import { Title } from './SectionStyled';

const Section = ({ title, children }) => {
    return (
        <>
            <Title>{title}</Title>
            {children}
        </>
    )
};

export default Section;

Section.propTtypes = {
    title: PropTypes.string.isRequired,
}
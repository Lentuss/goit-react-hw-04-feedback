import React from 'react';
import PropTypes from 'prop-types';

import { FeedbackContainer, FormTitle } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <FeedbackContainer>
      <FormTitle>{title}</FormTitle>
      {children}
    </FeedbackContainer>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Section;

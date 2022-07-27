import React from 'react';
import PropTypes from 'prop-types';
import { NotificationMes } from './Notification.styled';

const Notification = ({ message }) => {
  return <NotificationMes>{message}</NotificationMes>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;

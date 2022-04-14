import React from 'react';
import ReactTooltip from 'react-tooltip';
import PropTypes from 'prop-types';
import { BrowserView } from 'react-device-detect';

const CustomTooltip = ({ id, effect, type, offset, backgroundColor, place, textColor }) => (
  <BrowserView>
    <ReactTooltip effect={effect} id={id} place={place} type={type} offset={offset} backgroundColor={backgroundColor} textColor={textColor} />
  </BrowserView>
);

CustomTooltip.defaultProps = {
  effect: 'solid',
  type: 'info',
  place: 'top',
  textColor: '#00000',
  backgroundColor: '#72D36B',
  offset: { left: 10 },
};

CustomTooltip.propTypes = {
  id: PropTypes.string.isRequired,
  effect: PropTypes.string,
  place: PropTypes.string,
  type: PropTypes.string,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  offset: PropTypes.oneOfType([PropTypes.object]),
};

export default CustomTooltip;

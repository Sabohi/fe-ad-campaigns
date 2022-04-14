import React from 'react';
import PropTypes from 'prop-types';
import CustomTooltip from '@/utils/generalComponents/CustomTooltip';

const Button = ({ onKeyPress, tabIndex, onClick, className, title, style, right, toolTip, toolTipPlacement, hoverTitle, dataTestId }) => (
  <div
    role="button"
    data-for="custom-button"
    data-tip={toolTip}
    onKeyPress={onKeyPress}
    tabIndex={tabIndex}
    onClick={onClick}
    className={className}
    style={style}
    title={hoverTitle}
    data-testid={dataTestId}
  >
    {title}
    {right && <span>{right}</span>}
    {toolTip && <CustomTooltip place={toolTipPlacement || 'top'} offset={{ left: 0 }} id="custom-button" />}
  </div>
);

Button.defaultProps = {
  className: undefined,
  style: undefined,
  right: undefined,
  toolTip: undefined,
  toolTipPlacement: 'top',
  hoverTitle: undefined,
  dataTestId: undefined,
};

Button.propTypes = {
  onKeyPress: PropTypes.func.isRequired,
  tabIndex: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  toolTip: PropTypes.string,
  toolTipPlacement: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object]),
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  hoverTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  right: PropTypes.node,
  dataTestId: PropTypes.string,
};

export default Button;

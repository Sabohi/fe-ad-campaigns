import { createGlobalStyle } from 'styled-components';

import colors from './Colors';

const GlobalStyle = createGlobalStyle`
  :root {
    --bg-color: ${colors.primary};
    --secondary-color: ${colors.secondary};
    --secondary-text-color: ${colors.secondaryText};
    --text-color: ${colors.textColor};
    --icon-color: ${colors.iconColor};
    --btn-text-color: ${colors.btnTxtColor};
    --list-bg-color: ${colors.listBckColor};
    --success-color: ${colors.success};
    --error-color: ${colors.error};
  }

  /* Toast Notification */
  .toast-notification-error,
  .toast-notification-info,
  .toast-notification-success,
  .toast-notification-warning {
    display:flex;
    .toast-notification-body {
      padding: 30px;
      font-size: 14px;

      &:before {
        display: block;
        font-weight: bold;
        margin-bottom: 5px;
      }
    }
  }
  .toast-notification-error {
    background-color: ${colors.error};
    .toast-notification-body:before {
      content: 'Error message:';
    }
  }
  .toast-notification-info {
    background-color: ${colors.info};
    .toast-notification-body:before {
      content: 'Info message:';
    }
  }
  .toast-notification-success {
    background-color: ${colors.success};
    .toast-notification-body:before {
      content: 'Success message:';
    }
  }
  .toast-notification-warning {
    background-color: ${colors.warning};
    .toast-notification-body:before {
      content: 'Warning message:';
    }
  }
`;

export default GlobalStyle;

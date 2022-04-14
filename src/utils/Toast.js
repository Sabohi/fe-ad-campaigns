import { toast } from 'react-toastify';

const bodyClassName = 'toast-notification-body';
export default {
  info: (message) => {
    toast.info(message, {
      className: 'toast-notification-info',
      bodyClassName,
    });
  },

  success: (message) => {
    toast.success(message, {
      className: 'toast-notification-success',
      bodyClassName,
    });
  },

  error: (message) => {
    toast.error(message, {
      className: 'toast-notification-error',
      bodyClassName,
    });
  },

  warning: (message) => {
    toast.warn(message, {
      className: 'toast-notification-warning',
      bodyClassName,
    });
  },
};

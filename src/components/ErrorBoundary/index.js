import PropTypes from 'prop-types';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { equalityChecker } from '@/utils/commonFunctions/CommonFunctions';
import Button from '@/utils/generalComponents/Button';

class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }

  componentDidMount() {
    const { history } = this.props;
    const { hasError } = this.state;
    this.unlisten = history.listen(() => {
      if (hasError) {
        this.setState({ hasError: false });
      }
    });
  }

  componentDidUpdate(prevProps) {
    const { location } = this.props;
    if (!equalityChecker(location, prevProps.location)) {
      this.updateErrorState();
    }
  }

  componentDidCatch() {
    // * Catch errors in any components below and re-render with error message
    this.setState({
      hasError: true,
    });
  }

  componentWillUnmount() {
    this.unlisten();
  }

  updateErrorState = () => {
    const { hasError } = this.state;
    if (hasError) {
      this.setState({ hasError: false });
    }
  };

  render() {
    const { hasError } = this.state;
    const { history, children } = this.props;
    if (hasError) {
      // * Renders Error
      return (
        <>
          <div className="error-content">
            <h2 className="error_Heading"> Oops! Something went wrong.</h2>
            <div className="error_content_detail">
              <p className="error_details">
                We appologize for any inconvenience, but an unexpected error occured while you were browsing the ad campaigns.
              </p>
            </div>
            <hr />
            <div className="error_fallback">
              <p>
                As a fallback please try going back <br />
                <Button
                  role="button"
                  onClick={() => {
                    history.goBack();
                  }}
                  onKeyPress={() => {
                    history.goBack();
                  }}
                  title={<i className="fa fa-arrow-left" aria-label="Back" aria-required="false" aria-hidden="false" />}
                  tabIndex={0}
                  className="error-go-back"
                />
              </p>
            </div>
          </div>
        </>
      );
    }
    // * Else normally, just render children
    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.bool, PropTypes.object]).isRequired,
  history: PropTypes.oneOfType([PropTypes.object]).isRequired,
  location: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default withRouter(ErrorBoundary);

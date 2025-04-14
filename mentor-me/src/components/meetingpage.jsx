import React, { Component } from 'react';

class MeetingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scriptAppended: false,
    };
  }

  componentDidMount() {
    // Only append the script if it's not already present
    if (!document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      script.onload = () => {
        console.log('Calendly script loaded');
        this.setState({ scriptAppended: true });
      };
      script.onerror = () => {
        console.error('Failed to load Calendly script');
      };
      document.head.appendChild(script);
    } else {
      this.setState({ scriptAppended: true });
    }
  }

  render() {
    return (
      <div>
        <h1>Schedule a Meeting</h1>
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/ttaayy82823"
          style={{ minWidth: '320px', height: '580px' }}
        />
        {!this.state.scriptAppended && <div>Loading Calendly...</div>}
      </div>
    );
  }
}

export default MeetingPage;
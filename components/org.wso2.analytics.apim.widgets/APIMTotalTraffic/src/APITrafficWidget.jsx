import React, { Component } from 'react';

class APITrafficWidget extends Component {
    render() {
        return (
            <h1>Hello, World!sws</h1>
        );
    }
}

global.dashboard.registerWidget('APIMTotalTraffic', APITrafficWidget);
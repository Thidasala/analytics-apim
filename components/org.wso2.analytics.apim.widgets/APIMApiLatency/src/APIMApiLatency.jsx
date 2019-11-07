/* eslint-disable react/jsx-indent-props */
/* eslint-disable comma-dangle */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable spaced-comment */
/* eslint-disable react/jsx-one-expression-per-line */
/*
 *  Copyright (c) 2019, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 *  WSO2 Inc. licenses this file to you under the Apache License,
 *  Version 2.0 (the "License"); you may not use this file except
 *  in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing,
 *  software distributed under the License is distributed on an
 *  "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 *  KIND, either express or implied.  See the License for the
 *  specific language governing permissions and limitations
 *  under the License.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import PlayCircleFilled from '@material-ui/icons/PlayCircleFilled';
import { VictoryBar, VictoryChart, VictoryAxis,VictoryTheme,VictoryGroup } from 'victory';
import VizG from 'react-vizgrammar'

/**
 * React Component for APIM Api Created widget body
 * @param {any} props @inheritDoc
 * @returns {ReactElement} Render the APIM Api Created Count widget body
 */
export default function APIMApiLatency(props) {

    //configuration for chart
    let config = {
        x : "rpm",
        charts : [{type: "line", y : "torque", color: "EngineType"}],
        maxLength: 10,
        width: 400,
        height: 200
    }

    metadata = {
        "names" : ["rpm", "torque", "horsepower", "EngineType"],
        "types" : ["linear", "linear", "ordinal", "ordinal"]
    };

    data = [
        [8000, 75, 120, "Piston"], [9000, 81, 130, "Rotary"]
    ];

    const chartTheme = {
         axis: {
          style: {
            tickLabels: {
              // this changed the color of my numbers to white
              fill: 'white',
              fontSize: '9px',
              angle: 25
            },grid: { stroke: "none" }
          },
        },
      };

    const dataset1 = [
        { API: 'API1', MaxLatency: 1 },
        { API: 'API2', MaxLatency: 2 },
        { API: 'API3', MaxLatency: 3 },
        { API: 'API4', MaxLatency: 2 },
        { API: 'API5', MaxLatency: 1 }
        ];

    const dataset2 = [
        { API: 'API1', TopLatency: 2 },
        { API: 'API2', TopLatency: 3 },
        { API: 'API3', TopLatency: 4 },
        { API: 'API4', TopLatency: 5 },
        { API: 'API5', TopLatency: 5 }
        ]


    const { themeName, totalCount, weekCount } = props;
    const styles = {
        headingWrapper: {
            height: '5%',
            margin: 'auto',
            paddingTop: '10px',
            width: '90%',
        },
        dataWrapper: {
            textAlign: 'center',
            width: '100%',
            height: '100%',
            paddingTop: '0%',
        },
        weekCount: {
            margin: 0,
            marginTop: '5%',
            color: 'rgb(135,205,223)',
            letterSpacing: 1,
            fontSize: '80%',
        },
        typeText: {
            textAlign: 'left',
            fontWeight: 'normal',
            margin: 0,
            display: 'inline',
            marginLeft: '3%',
            letterSpacing: 1.5,
            fontSize: 'small',
        },
        playIcon: {
            position: 'absolute',
            bottom: '13%',
            right: '8%',
        },
    };
    return (
        <div
            style={{
                background: themeName === 'dark'
                    ? 'linear-gradient(to right, rgb(4, 31, 51) 0%, rgb(37, 113, 167) 46%, rgb(42, 71, 101) 100%'
                    : '#fff',
                width: '95%',
                height: '85%',
                margin: '5% 5%',
            }}
        >
            <div style={styles.headingWrapper}>
                <h3
                    style={{
                        borderBottom: themeName === 'dark' ? '1.5px solid #fff' : '3px solid #2571a7',
                        paddingBottom: '20px',
                        margin: 'auto',
                        textAlign: 'center',
                        fontWeight: 'normal',
                        letterSpacing: 1.5,
                    }}
                >
                    <FormattedMessage id='widget.heading' defaultMessage='Recent Api Alerts' />
                </h3>
                <h3
                style={{
                    fontWeight: 'normal',
                    paddingBottom: '20px'
                }}>
                   Total Traffi: 225 TPS
                </h3>
            </div>

            <div style={styles.dataWrapper}>
                    {/* <VictoryChart
                theme={chartTheme}
                // domain={{ y: [0.5, 5.5] }}
                domainPadding={{x: 30}}
                >
                <VictoryGroup offset={10}
                    style={{ data: { width: 6 } }}
                    colorScale="qualitative"
                    >
                    <VictoryBar
                        data={dataset1}
                        x="API"
                        y="MaxLatency"
                        label="API Name"
                    />
                    <VictoryBar
                        data={dataset2}
                        x="API"
                        y="TopLatency"
                    />
                </VictoryGroup>
                </VictoryChart> */}
                <VizG config={config} data={data} metadata={metadata} />

            </div>
        </div>
    );
}

APIMApiLatency.propTypes = {
    themeName: PropTypes.string.isRequired,
    totalCount: PropTypes.string.isRequired,
    weekCount: PropTypes.string.isRequired,
};

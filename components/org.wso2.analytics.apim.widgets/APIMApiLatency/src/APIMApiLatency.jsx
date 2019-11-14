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
        x : "API",
        charts : [{type: "bar", y : "Latency", colour : "latencytype"},],
        maxLength: 7,
        
    }

    let metadata = {
        names : ['API', 'Latency', 'latencytype'],
        types : ['linear', 'linear', 'ordinal']
    };

    let data = [
        ['API1', 1000, 'latencytype1'],
        ['API2', 500, 'latencytype2'],
        ['API3', 100, 'latencytype1'],
        ['API4', 10, 'latencytype2'],
        ['API5', 100, 'latencytype1'],
      
    ];

    const chartTheme = {
         axis: {
          style: {
            tickLabels: {
              // this changed the color of my numbers to white
              fill: 'white',
              fontSize: '9px',
              angle: 25
            },
            grid: { stroke: "none" },
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
                   Top latency: 225 Ms
                </h3>
            </div>

            <div style={styles.dataWrapper}>
            <VictoryChart theme={chartTheme} domainPadding={{x: 40}} colorScale="qualitative" maxDomain={{ x: 5 }}>
            <VictoryBar
                    barWidth={10}
                    style={{ display: "flex", flexWrap: "wrap", data: {fill: "#b3b9c4"} }}
                    animate={{
                        duration: 2000,
                        onLoad: { duration: 1000 }
                        }}
                    data={dataset1}
                        x="API"
                        y="MaxLatency"
                        
                        />
                        <VictoryAxis
                        label="API Name"
                        style={{
                            axisLabel: { padding: 30, fill: "#ffffff", fontSize: '11px'}
                        }}
                        />
                        <VictoryAxis dependentAxis
                        label="Top Latency"
                        style={{
                            axisLabel: { padding: 30, fill: "#ffffff", fontSize: '11px' }
                        }}
                        />
             </VictoryChart>
            </div>
        </div>
    );
}

APIMApiLatency.propTypes = {
    themeName: PropTypes.string.isRequired,
    totalCount: PropTypes.string.isRequired,
    weekCount: PropTypes.string.isRequired,
};

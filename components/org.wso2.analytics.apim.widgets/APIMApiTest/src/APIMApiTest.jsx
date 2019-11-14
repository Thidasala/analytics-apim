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
import ApiIcon from './ApiIcon';
import { VictoryBar, VictoryChart, VictoryAxis,VictoryTheme } from 'victory';
/**
 * React Component for APIM Api Created widget body
 * @param {any} props @inheritDoc
 * @returns {ReactElement} Render the APIM Api Created Count widget body
 */
export default function APIMApiTest(props) {

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

    const dataset = [
        { API: 'API1', Traffic: 100 },
        { API: 'API2', Traffic: 75 },
        { API: 'API3', Traffic: 40 },
        { API: 'API4', Traffic: 55 }
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
                    <FormattedMessage id='widget.heading' defaultMessage='Recent Api Traffic' />
                </h3>
                <h3
                style={{
                    fontWeight: 'normal',
                    paddingBottom: '20px'
                }}>
                   Total Traffic: 225 TPS
                </h3>
            </div>

            <div style={styles.dataWrapper}>
                    <VictoryChart theme={chartTheme} domainPadding={{x: 40}} maxDomain={{ x: 5 }}>
                        <VictoryBar
                        barWidth={10}
                        style={{ display: "flex", flexWrap: "wrap", data: {fill: "#b3b9c4"} }}
                        animate={{
                            duration: 2000,
                            onLoad: { duration: 1000 }
                            }}
                        data={dataset}
                        x="API"
                        y="Traffic"
                        />
                        <VictoryAxis
                        label="API Name"
                        style={{
                            axisLabel: { padding: 30, fill: "#ffffff", fontSize: '11px' }
                        }}
                        />
                        <VictoryAxis dependentAxis
                        label="Total Traffic"
                        style={{
                            axisLabel: { padding: 30, fill: "#ffffff", fontSize: '11px' }
                        }}
                        />
                    </VictoryChart>

            </div>
        </div>
    );
}

APIMApiTest.propTypes = {
    themeName: PropTypes.string.isRequired,
    totalCount: PropTypes.string.isRequired,
    weekCount: PropTypes.string.isRequired,
};

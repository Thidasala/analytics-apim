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
import { Scrollbars } from 'react-custom-scrollbars';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CustomTable from './CustomTable';

/**
 * React Component for Recent Api Traffic widget body
 * @param {any} props @inheritDoc
 * @returns {ReactElement} Render the Recent Api Traffic widget body
 */
export default function APIMApiLatency(props) {
    const {
        themeName, height, latancyData, handleChange,
    } = props;
    console.log(latancyData);
    const styles = {
        headingWrapper: {
            height: '10%',
            margin: 'auto',
            width: '90%',
        },
        paperWrapper: {
            height: '75%',
        },
        paper: {
            background: '#969696',
            width: '75%',
            padding: '4%',
            border: '1.5px solid #fff',
            margin: 'auto',
            marginTop: '5%',
        },
        formWrapper: {
            width: '90%',
            height: '10%',
            margin: 'auto',
        },
        form: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        formControl: {
            margin: '5%',
            minWidth: 120,
        },
        textField: {
            margin: '5%',
            minWidth: 120,
        },
        selectEmpty: {
            marginTop: 10,
        },
    };
    if (latancyData == null) {
        return (
            <div style={styles.paperWrapper}>
                <Paper
                    elevation={1}
                    style={styles.paper}
                >
                    <Typography variant='h5' component='h3'>
                        <FormattedMessage id='nodata.error.heading' defaultMessage='No Data Available !' />
                    </Typography>
                    <Typography component='p'>
                        <FormattedMessage
                            id='nodata.error.body'
                            defaultMessage='No data available for the selected options.'
                        />
                    </Typography>
                </Paper>
            </div>
        );
    }
    return (
        <Scrollbars
            style={{ height }}
        >
            <div style={{
                padding: '5% 5%',
            }}
            >
                <div style={styles.headingWrapper}>
                    <h3 style={{
                        borderBottom: themeName === 'dark' ? '1px solid #fff' : '1px solid #02212f',
                        paddingBottom: '10px',
                        margin: 'auto',
                        marginTop: 0,
                        textAlign: 'left',
                        fontWeight: 'normal',
                        letterSpacing: 1.5,
                    }}
                    >
                        <FormattedMessage id='widget.heading' defaultMessage='Recent Api Traffic' />

                    </h3>
                </div>
                <div style={styles.formWrapper}>
                    <form style={styles.form}>
                       
                    </form>
                </div>
                <CustomTable
                    data={latancyData}
                />
            </div>
        </Scrollbars>
    );
}

APIMRecentApiTraffic.propTypes = {
    themeName: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    latancyData: PropTypes.instanceOf(Object).isRequired,
    apiCreatedHandleChange: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
};
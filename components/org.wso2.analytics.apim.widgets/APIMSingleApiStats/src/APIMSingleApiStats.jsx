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
import AppBar from './AppBar';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import DetailBar from './DetailBar';
import Trafficchart from './Trafficchart';
import LatencyChart from './LatencyChart';
import ErrorDetailChart from './ErrorDetailChart';
import ErrorAnalysisChart from './ErrorAnalysisChart';


/**
 * React Component for Recent Api Traffic widget body
 * @param {any} props @inheritDoc
 * @returns {ReactElement} Render the Recent Api Traffic widget body
 */
export default function APIMSingleApiStats(props) {
    const {
        themeName, height, usageData, handleChange, data
    } = props;
   // console.log(usageData);
    const styles = {
        headingWrapper: {
            height: '10%',
            margin: 'auto',
            width: '100%',
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
    return (
        // <Scrollbars
        //     style={{ height }}
        // >
            <div>
                <AppBar/>
                <DetailBar/>
                <div style={{width: '50%', float: 'left'}}>
                <Trafficchart/>
                </div>
                <div style={{width: '50%', float: 'left'}}>
                <LatencyChart/>
                </div>
                <div style={{width: '50%', float: 'left'}}>
                <ErrorDetailChart/>
                </div>
                <div style={{width: '50%', float: 'left'}}>
                <ErrorAnalysisChart/>
                </div>
                
                
                
                {/* <div style={styles.headingWrapper}>
                    <h3 style={{
                        borderBottom: themeName === 'dark' ? '1px solid #fff' : '1px solid #02212f',
                        paddingBottom: '10px',
                        marginLeft: '5px',
                        textAlign: 'left',
                        fontWeight: 'bold',
                        letterSpacing: 1.2,
                    }}
                    >
                        <FormattedMessage id='widget.heading' defaultMessage='Recent Api Details' />
                        <FormattedMessage id='widget.subheading' defaultMessage='Recent' />
                    </h3>
                    
                </div> */}
                {/* <PrimarySearchAppBar/>*/}

                {/* <div style={styles.formWrapper}>
                    <form style={styles.form}>
                    <AppBar/>
                <DetailBar/>
                    </form>
                </div>  */}
                {/* <CustomTable
                  data={usageData}
                /> */}
            </div>
        // </Scrollbars>
    );
}

APIMSingleApiStats.propTypes = {
    themeName: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    usageData: PropTypes.instanceOf(Object).isRequired,
    apiCreatedHandleChange: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
};

/* eslint-disable indent */
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
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import MUIDataTable from 'mui-datatables';


const styles = theme => ({

  root: {
      width: '100%',
      backgroundColor: theme.palette.type === 'light' ? '#fff' : '#162638',
  },
  table: {
      minWidth: 200,
  },
  tableWrapper: {
      overflowX: 'auto',
  },
  loadingIcon: {
      margin: 'auto',
      display: 'block',
  },
  paginationRoot: {
      color: theme.palette.text.secondary,
      fontSize: theme.typography.pxToRem(12),
      '&:last-child': {
          padding: 0,
      },
  },
  paginationToolbar: {
      height: 56,
      minHeight: 56,
      padding: '0 5%',
  },
  paginationCaption: {
      flexShrink: 0,
  },
  paginationSelectRoot: {
      marginRight: '10px',
  },
  paginationSelect: {
      paddingLeft: 8,
      paddingRight: 16,
  },
  paginationSelectIcon: {
      top: 1,
  },
  paginationInput: {
      color: 'inherit',
      fontSize: 'inherit',
      flexShrink: 0,
  },
  paginationMenuItem: {
      backgroundColor: theme.palette.type === 'light' ? '#fff' : '#162638',
  },
  paginationActions: {
      marginLeft: 0,
  },
});

//define table columns
const columns = ["Proxy", "Target", "Traffic", "Error 5XX", "Error 4XX", "Latency P99"];

//define data
const data = [
  ["API1", "show", "15554", "54", "41", "545Ms"],
  ["API2", "show", "1555", "54", "41", "54Ms"],
  ["API3", "show", "154", "54", "41", "55Ms"],
  ["API4", "show", "1554", "54", "41", "5Ms"],
 ];


class CustomTable extends React.Component {

  constructor(props) {
    super(props);

      this.state = {
          tableData: [],
          orderBy: 'hits',
          order: 'desc',
          expanded: false,
          query: '',
      };
  }

  render() {
    return(
      <Paper>
          <MUIDataTable
            title={"Api Monitoring"}
            data={data}
            columns={columns}
          />
      </Paper>
    );
  }

}


export default withStyles(styles)(CustomTable);
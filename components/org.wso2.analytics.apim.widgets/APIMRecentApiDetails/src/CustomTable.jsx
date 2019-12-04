/* eslint-disable react/no-unused-state */
/* eslint-disable require-jsdoc */
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
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { FormattedMessage } from 'react-intl';
import ApiInfo from './ApiInfo';


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


// define data
// const datas = [[["API1", "show", "15554", "54", "41", "545M"],
// ["API2", "show", "1555", "54", "41", "54Ms"],
// ["API3", "show", "154", "54", "41", "55Ms"]],[["API1", "show", "15554", "54", "41", "545M"],
// ["API2", "show", "1555", "54", "41", "54Ms"],
// ["API3", "show", "154", "54", "41", "55Ms"]],[["API1", "show", "15554", "54", "41", "545M"],
// ["API2", "show", "1555", "54", "41", "54Ms"],
// ["API3", "show", "154", "54", "41", "55Ms"]]
//  ];


class CustomTable extends React.Component {
  constructor(props) {
    super(props);

    const { data } = this.props;

      this.state = {
          tableData: [],
          orderBy: 'hits',
          order: 'desc',
          expanded: false,
          query: '',
          datas: null,
          datass: null,
          finaldata: [],
      };
    }

    getData() {
      console.log('This works');
    }

  renderdata(data) {
  // console.log(data);
    const finaldata = [];
    data.forEach((element) => {
    // console.log(element)
      const avglatency = element[4] / element[2];
      if (element[3] > 399 && element[3] < 499) {
        finaldata.push([element[0], element[1], element[2], 0, element[3], parseInt(avglatency)]);
      } else if (element[3] > 499) {
        finaldata.push([element[0], element[1], element[2], element[3], 0, parseInt(avglatency)]);
      } else {
        finaldata.push([element[0], element[1], element[2], 0, 0, parseInt(avglatency)]);
      }
    });
    // console.log(finaldata);
   this.setState({ finaldata });
  }

  render() {
    const { data } = this.props;

       // define table columns
    const columns = ['Proxy', 'Target', 'Traffic', 'Error 5XX', 'Error 4XX', 'Latency P99'];

        // define options for table
    const options = {
      filter: true,
      filterType: 'checkbox',
      expandableRows: false,
      selectableRows: true,
      expandableRowsOnClick: true,

      onRowClick: (rowData, rowMeta) => {
          console.log(rowData);
          console.log(rowMeta);
          this.render();
      },
    };

    console.log(data);
    const { finaldata } = this.state;


   // console.log(finaldata);

    return (
        <Paper>
            <MUIDataTable
                title={'Api Monitoring -> Recent'}
                data={data}
                columns={columns}
                options={options}
            />
        </Paper>
    );
  }
}

CustomTable.propTypes = {
    // eslint-disable-next-line react/no-unused-prop-types
    usageData: PropTypes.instanceOf(Object).isRequired,
};

export default withStyles(styles)(CustomTable);

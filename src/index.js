import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

const StyledTableCell = withStyles((theme) => ({
	head: {
	  backgroundColor: theme.palette.common.black,
	  color: theme.palette.common.white,
	},
	body: {
	  fontSize: 14,
	},
  }))(TableCell);
  

  const StyledTableRow = withStyles((theme) => ({
	root: {
	  '&:nth-of-type(odd)': {
		backgroundColor: theme.palette.action.hover,
	  },
	},
  }))(TableRow);

const useStyles = makeStyles({
	table: {
	  minWidth: 700,
	},
  });
  
  function createData(customerId, customerName, customerBank, currency) {
	return { customerId, customerName, customerBank, currency };
  }

  
  let rows = [
	createData(1, 'Ragul', 'ABC Bank', 'INR'),
	createData(2, 'Vignesh', 'XYZ Bank', 'USD'),
	createData(3, 'Ragul', 'QWE Bank', 'EUR'),
	createData(4, 'Vignesh', 'ABC Bank', 'INR'),
	createData(5, 'Ragul', 'QWE Bank', 'USD'),
  ];

  let displayRows  = rows;
  
  export default function BasicTable() {
	const classes = useStyles();
	
	//const [name, setRow] = React.useState('check');
	const [custName, setName] = React.useState('');

	// const onclickFunc = (event) =>{
	// 	setRow(event.target.value);
	// 	 return console.log(event.target.value, name);
	//  }

	const edit = (data) => { 
		// Do whatever you want
		return console.log( data);

	}
	const handleChange = (event) => {
		console.log(event.target.value,  custName);
	  setName(event.target.value);
	  const filteredRows = rows.filter( row => {
		 if(row.customerName.toLowerCase().includes(event.target.value)) {
			 console.log('row-->', row);
			 return row;
		 }
		});
		displayRows = filteredRows;
		return;
	};

	return (
		<>
		<form>
            <FormControl>
            <InputLabel>Name</InputLabel>
          <Input value={custName} onChange={handleChange} /> 
            </FormControl>
        </form>

	  <TableContainer component={Paper}>
		<Table className={classes.table} aria-label="customized table">
		  <TableHead>
		  <TableRow>
            <StyledTableCell align="right">Customer Id</StyledTableCell>
            <StyledTableCell align="right">Customer Name&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Customer Bank&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Currency&nbsp;</StyledTableCell>
			<StyledTableCell align="left">Button&nbsp;</StyledTableCell>
          </TableRow>
		  </TableHead>
		  <TableBody>
			{displayRows.map((row) => (
			  <StyledTableRow key={row.customerId}>
              <StyledTableCell component="th" scope="row">
                {row.customerId}
              </StyledTableCell>
              <StyledTableCell align="right">{row.customerName}</StyledTableCell>
              <StyledTableCell align="right">{row.customerBank}</StyledTableCell>
              <StyledTableCell align="right">{row.currency}</StyledTableCell>
			<StyledTableCell ><Button onClick={() => edit(row)} variant="outlined" color="primary">Click</Button></StyledTableCell>
			  </StyledTableRow>
			))}
		  </TableBody>
		</Table>
	  </TableContainer>
	  </>
	);
  }

ReactDOM.render(
    <BasicTable  />,
  document.getElementById('root')
);




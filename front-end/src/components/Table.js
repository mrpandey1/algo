import React, { useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { blue, green, pink, yellow } from '@material-ui/core/colors';


const StyledTableCell = withStyles((theme) => ({
    head: {
        // backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const useStyles = makeStyles({
    table: {
        minWidth: 380,
    },
});

function createData(name, result) {
    return { name, result };
}

let rows = [{ name: 'URL', }, { name: 'Title' }, { name: 'Content' }]

export default function BasicTable({ ans }) {
    const classes = useStyles();

    if (ans) {
        if (ans.domain.category) {
            rows.splice(0, 1, createData('URL', ans.domain.category))
        }

        if (ans.title.decision) {
            rows.splice(1, 1, createData('Title', ans.title.decision))
        }

        if (ans.content.decision) {
            rows.splice(2, 1, createData('Content', ans.content.decision))
        }
    }

    return (
        <TableContainer component={Paper} style={{ marginTop: 15 }}>
            <Table className={classes.table} aria-label="simple table" >
                <TableHead style={{ backgroundColor: '#3F51B5' }}>
                    <TableRow>
                        <StyledTableCell>Index</StyledTableCell>
                        <StyledTableCell align="right">Result</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.result}>
                            <StyledTableCell component="th" scope="row">
                                {row.name}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.result}</StyledTableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

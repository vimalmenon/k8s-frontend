

import React from "react";
import { IProps, IValue } from "../types";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';
import { ApiHistory, checkEmptyValue } from "./ApiHistory";
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const CheckEmptyValue: React.FC<IValue> = ({ value }) => {
  if (checkEmptyValue(value)) {
    return <span>{value}</span>;
  }
  return <DoNotDisturbIcon sx={{ color: "red" }} />;
}

export const App: React.FC<IProps> = (props) => {
  return (
    <Box sx={{ display: "flex", flex: "1 1 100%", flexDirection: "column" }}>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Show all" />
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Environment</TableCell>
              <TableCell>Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Env</TableCell>
              <TableCell>
                <CheckEmptyValue value={props.env} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>App Name</TableCell>
              <TableCell>
                <CheckEmptyValue value={props.appName} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>App Version</TableCell>
              <TableCell><CheckEmptyValue value={props.appVersion} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Node Name</TableCell>
              <TableCell>
                <CheckEmptyValue value={props.nodeName} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Pod Name</TableCell>
              <TableCell>
                <CheckEmptyValue value={props.podName} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Pod Namespace</TableCell>
              <TableCell>
                <CheckEmptyValue value={props.podNamespace} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Pod IP</TableCell>
              <TableCell>
                <CheckEmptyValue value={props.podIp} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>API</TableCell>
              <TableCell>
                <CheckEmptyValue value={props.api} />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <ApiHistory value={props.api} />
    </Box>
  );
}

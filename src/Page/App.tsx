

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
  const [show, setShow] = React.useState<boolean>(false);
  return (
    <Box sx={{ display: "flex", flex: "1 1 100%", flexDirection: "column" }}>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell colSpan={2}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={show}
                      onClick={() => setShow(!show)} />}
                  label={show ?"Hide empty values" : "Show all" } />

              </TableCell>
            </TableRow>
          </TableHead>
          <TableHead>
            <TableRow>
              <TableCell sx={{ width: "40%" }}>Environment</TableCell>
              <TableCell>Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {checkEmptyValue(props.env) || show ?
              <TableRow>
                <TableCell>Env</TableCell>
                <TableCell>
                  <CheckEmptyValue value={props.env} />
                </TableCell>
              </TableRow> : null}
            {checkEmptyValue(props.appName) || show ?
              <TableRow>
                <TableCell>App Name</TableCell>
                <TableCell>
                  <CheckEmptyValue value={props.appName} />
                </TableCell>
              </TableRow> : null
            }
            {checkEmptyValue(props.appVersion) || show ?
              <TableRow>
                <TableCell>App Version</TableCell>
                <TableCell><CheckEmptyValue value={props.appVersion} />
                </TableCell>
              </TableRow> : null}
            {checkEmptyValue(props.nodeName) || show ?
              <TableRow>
                <TableCell>Node Name</TableCell>
                <TableCell>
                  <CheckEmptyValue value={props.nodeName} />
                </TableCell>
              </TableRow> : null}
            {checkEmptyValue(props.podName) || show ?
              <TableRow>
                <TableCell>Pod Name</TableCell>
                <TableCell>
                  <CheckEmptyValue value={props.podName} />
                </TableCell>
              </TableRow> : null}
            {checkEmptyValue(props.podNamespace) || show ?
              <TableRow>
                <TableCell>Pod Namespace</TableCell>
                <TableCell>
                  <CheckEmptyValue value={props.podNamespace} />
                </TableCell>
              </TableRow> : null}
            {checkEmptyValue(props.podIp) || show ?
              <TableRow>
                <TableCell>Pod IP</TableCell>
                <TableCell>
                  <CheckEmptyValue value={props.podIp} />
                </TableCell>
              </TableRow> : null}
            {checkEmptyValue(props.api) || show ?
              <TableRow>
                <TableCell>API</TableCell>
                <TableCell>
                  <CheckEmptyValue value={props.api} />
                </TableCell>
              </TableRow> : null}
          </TableBody>
        </Table>
      </TableContainer>
      {checkEmptyValue(props.api) ? <ApiHistory value={props.api} /> : null}
    </Box>
  );
}

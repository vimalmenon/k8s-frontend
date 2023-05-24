

import React from "react";
import { IProps } from "../types";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';


const checkEmptyValue = (value: string | undefined): boolean => {
  if (!value) {
    return false;
  }
  if (value === "") {
    return false;
  }
  if (value === "None") {
    return false;
  }
  return true;
}
const CheckEmptyValue: React.FC<{ value: string | undefined }> = ({ value }) => {
  if (checkEmptyValue(value)) {
    return <span>{value}</span>;
  }
  return <DoNotDisturbIcon sx={{ color: "red" }} />;
}


export const App: React.FC<IProps> = (props) => {
  const [flavor, setFlavor] = React.useState<string>()
  const getApiData = async (api: string) => {
    try {
      const value = await fetch(api);
      const data = await value.json();
      setFlavor(data.appFlavor)
    } catch (error) {
      console.log(error)
    }
  };
  React.useEffect(() => {
    if (checkEmptyValue(props.api)) {
      getApiData(props.api);
    }
  }, [])
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Environment</TableCell>
            <TableCell  >Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Env</TableCell>
            <TableCell  >
              <CheckEmptyValue value={props.env} />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>App Name</TableCell>
            <TableCell  >
              <CheckEmptyValue value={props.appName} />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>App Version</TableCell>
            <TableCell  ><CheckEmptyValue value={props.appVersion} />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Node Name</TableCell>
            <TableCell  >
              <CheckEmptyValue value={props.nodeName} />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Pod Name</TableCell>
            <TableCell  >
              <CheckEmptyValue value={props.podName} />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Pod Namespace</TableCell>
            <TableCell  >
              <CheckEmptyValue value={props.podNamespace} />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Pod IP</TableCell>
            <TableCell  >
              <CheckEmptyValue value={props.podIp} />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>API</TableCell>
            <TableCell  >
              <CheckEmptyValue value={props.api} />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Flavor</TableCell>
            <TableCell  >
              <CheckEmptyValue value={flavor} />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

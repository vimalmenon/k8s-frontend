
import { IProps } from "../types";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export const App: React.FC<IProps> = (props) => {
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
            <TableCell>App Name</TableCell>
            <TableCell  >{props.appName || "None"}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Node Name</TableCell>
            <TableCell  >{props.nodeName || "None"}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Pod Name</TableCell>
            <TableCell  >{props.podName || "None"}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Pod Namespace</TableCell>
            <TableCell  >{props.podNamespace || "None"}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>POD IP</TableCell>
            <TableCell  >{props.podIp || "None"}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Env</TableCell>
            <TableCell  >{props.env || "None"}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>

  );
}

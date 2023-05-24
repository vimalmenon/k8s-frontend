
import { IProps } from "../types";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';


const CheckEmptyValue: React.FC<{ value: string }> = ({ value }) => {
  if (!value) {
    return <DoNotDisturbIcon sx={{ color: "red" }} />;
  }
  if (value === "") {
    return <DoNotDisturbIcon sx={{ color: "red" }} />;
  }
  if (value === "None") {
    return <DoNotDisturbIcon sx={{ color: "red" }} />;
  }
  return <span>{value}</span>;
}


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
            <TableCell>Env</TableCell>
            <TableCell  >
              <CheckEmptyValue value={props.env} />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

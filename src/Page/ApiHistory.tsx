import React from "react";
import Box from '@mui/material/Box';
import { IValue, IApiResponse } from "../types";

export const checkEmptyValue = (value: string | undefined): boolean => {
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

export const ApiItem: React.FC<IApiResponse> = ({ appFlavor, nodeName, podName, podIp, date, status }) => {
  return (
    <Box sx={{ display: "flex", flex: "0 0 48%", background: appFlavor, padding: 2, flexDirection: "column", gap: 2, color: "white" }}>
      {status === "success" ?
        <>
          <Box sx={{ display: "flex", flex: "1" }}>
            <Box sx={{ display: "flex", flex: "0 0 50%" }}>
              Time
            </Box>
            <Box sx={{ display: "flex", flex: "0 0 50%" }}>
              {date}
            </Box>
          </Box>
          <Box sx={{ display: "flex", flex: "1" }}>
            <Box sx={{ display: "flex", flex: "0 0 50%" }}>
              Node Name
            </Box>
            <Box sx={{ display: "flex", flex: "0 0 50%" }}>
              {nodeName}
            </Box>
          </Box>
          <Box sx={{ display: "flex", flex: "1" }}>
            <Box sx={{ display: "flex", flex: "0 0 50%" }}>
              Pod Name
            </Box>
            <Box sx={{ display: "flex", flex: "0 0 50%" }}>
              {podName}
            </Box>
          </Box>
          <Box sx={{ display: "flex", flex: "1" }}>
            <Box sx={{ display: "flex", flex: "0 0 50%" }}>
              Pod IP
            </Box>
            <Box sx={{ display: "flex", flex: "0 0 50%" }}>
              {podIp}
            </Box>
          </Box></> : <Box sx={{ display: "flex", flex: "1" }}>API Error : API call made at {date} </Box>}
    </Box>
  );
}

export const ApiHistory: React.FC<IValue> = ({ value }) => {
  const [flavors, setFlavors] = React.useState<IApiResponse[]>([]);
  const getApiData = async (api: string) => {
    try {
      const value = await fetch(api);
      const result = await value.json();
      setFlavors((data) => {
        return [{ ...result, status: "success" }, ...data]
      })
    } catch (error) {
      const d = new Date();
      setFlavors((data) => {
        return [{
          appFlavor: "red",
          nodeName: "",
          podName: "",
          podIp: "",
          date: d.toLocaleString(),
          status: "error"
        }, ...data]
      })
    }
  };
  React.useEffect(() => {
    let index = 0;
    const data = setInterval(() => {
      if (checkEmptyValue(value) && value) {
        getApiData(value);
        index++;
      }
    }, 1000);
    return () => clearInterval(data);
  }, [])

  if (checkEmptyValue(value) && value) {
    return (<Box sx={{ display: "flex", flex: "2 2 100%", flexWrap: "wrap", gap: 0.5, margin: "1em 0", justifyContent: "space-evenly", maxHeight: "500px", overflow: "scroll" }}>
      {flavors.map((flavor, key) => {
        return (
          <ApiItem {...flavor} key={key} />
        )
      })}
    </Box>);
  }
  return null;
}
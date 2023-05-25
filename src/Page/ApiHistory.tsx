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

const tableValue = 60;

export const ApiItem: React.FC<IApiResponse> = ({ appFlavor, nodeName, podName, podIp, date }) => {
  return (
    <Box sx={{ display: "flex", flex: "0 0 48%", background: appFlavor, padding: 2, flexDirection: "column", gap: 2, color: "white" }}>
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
      </Box>
    </Box>
  );
}

export const ApiHistory: React.FC<IValue> = ({ value }) => {
  const [flavors, setFlavors] = React.useState<IApiResponse[]>([]);
  const getApiData = async (api: string, index: number) => {
    try {
      const value = await fetch(api);
      const result = await value.json();
      setFlavors((data) => {
        return [result, ...data]
      })
    } catch (error) {
      // setFlavors((data) => {
      //   const newData = [...data];
      //   newData[index] = "red";
      //   return newData;
      // })
    }
  };
  React.useEffect(() => {
    let index = 0;
    const data = setInterval(() => {
      if (checkEmptyValue(value) && value) {
        getApiData(value, index % tableValue);
        index++;
      }
    }, 1000);
    return () => clearInterval(data);
  }, [])

  if (checkEmptyValue(value) && value) {
    return (<Box sx={{ display: "flex", flex: "2 2 100%", flexWrap: "wrap", gap: 0.5, margin: "1em", justifyContent: "space-evenly", maxHeight: "500px", overflow: "scroll" }}>
      {flavors.map((flavor, key) => {
        return (
          <ApiItem {...flavor} key={key} />
        )
      })}
    </Box>);
  }
  return null;
}
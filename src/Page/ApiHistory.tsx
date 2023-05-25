import React from "react";
import Box from '@mui/material/Box';
import { IValue } from "../types";
import { styled } from '@mui/material/styles';

const BoxStyle = styled("div")(({ theme }) => {
  return {
    display: "flex",
    flex: "0 0 50px",
    height: "50px",
    border: "1px solid black",
    "&:last-child": {
      background: "red"
    }
  }
})

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

export const ApiHistory: React.FC<IValue> = ({ value }) => {
  const [flavors, setFlavors] = React.useState<string[]>([]);
  const getApiData = async (api: string, index: number) => {
    try {
      const value = await fetch(api);
      const result = await value.json();
      setFlavors((data) => {
        const newData = [...data];
        newData[index] = result.appFlavor;
        return newData;
      })
    } catch (error) {
      setFlavors((data) => {
        const newData = [...data];
        newData[index] = "red";
        return newData;
      })
    }
  };
  const makeEmptyTable = () => {
    const value = Array.from({ length: 60 }, (x, i) => "white")
    setFlavors(value)
  }
  React.useEffect(() => {
    let index = 0;
    const data = setInterval(() => {
      if (checkEmptyValue(value) && value) {
        getApiData(value, index % 60);
        index++;
      }
    }, 1000);
    makeEmptyTable()
    return () => clearInterval(data);
  }, [])
  if (checkEmptyValue(value) && value) {
    return (<Box sx={{ display: "flex", flex: "1", flexWrap: "wrap", gap: 0.5, margin: "1em" }}>
      {flavors.map((flavor, key) => {
        return (
          <Box style={{ height: "50px", width: "50px", "border": "1px solid black", background: flavor }} key={key}></Box>
        )
      })}
    </Box>);
  }
  return null;
}
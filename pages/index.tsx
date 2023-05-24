import React from "react";
import { Layout } from "../src/Layout";
import { App } from "../src/Page/App";
import getConfig from "next/config";
import { NextPage } from 'next/types';
import { IProps } from "../src/types";

const { publicRuntimeConfig } = getConfig();

const Home: NextPage<IProps> = (props) => {
  return (
    <Layout>
      <div>
        <App {...props} />
      </div>
    </Layout>
  );
};

Home.getInitialProps = () => {
  return {
    ...publicRuntimeConfig,
  };
};

export default Home;
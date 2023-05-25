export interface IProps {
  appName: string;
  nodeName: string;
  podName: string;
  podNamespace: string;
  appVersion: string;
  podIp: string;
  env: string;
  api: string;
}

export interface IValue {
  value: string | undefined;
}

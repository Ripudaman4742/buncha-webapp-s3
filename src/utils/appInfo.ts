import { Config, EnvConfig } from "./types";

export const config: EnvConfig = {
  endpointEnv: process.env.NEXT_PUBLIC_ENDPOINT_ENV,
  version: process.env.NEXT_PUBLIC_VERSION,
  devTool: process.env.NEXT_PUBLIC_DEV_TOOL,
  smartlook: process.env.NEXT_PUBLIC_SMARTLOOK,
  mixpanelKey: process.env.NEXT_PUBLIC_MIXPANEL_KEY,
  mapsGoogleKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API,
  driverAssignment: process.env.NEXT_PUBLIC_DRIVER_ASSIGNMENT,
  intercomKey: process.env.NEXT_PUBLIC_INTERCOM_KEY
};

/**
 * @param configKey string
 * @returns string
 */
export function getConfig(configKey: Config) {
  return config[configKey] || "";
}

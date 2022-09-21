// eslint-disable-next-line no-shadow
export enum userTypes {
  user = 'user',
  shopper = 'shopper',
  driver = 'driver',
  admin = 'admin',
  merchant = 'merchant',
  dispatcher = 'dispatcher',
  runOwner = 'runOwner',
  superAdmin = 'superAdmin',
  catalogManager = 'catalogManager',
  operations = 'operations',
  customerSupport = 'customerSupport',
  marketing = 'marketing',
}

export interface User {
  avatar: string;
  email: string;
  firstName: string;
  id: number;
  lastName: string;
  phoneNumber: string;
  userTypes: userTypes[];
  createdAt: number
}

export interface GlobalState {
  currentUser?: User;
}

export interface LogsApiInterface {
	apiName: string
	parameters: any
	response: any
	hadError: boolean
}

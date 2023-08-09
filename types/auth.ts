export interface IFormLogin {
  phone: string;
  password: string;
}

export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  dob: string;
  email: string;
  gender: string;
  ward: string;
  district: string;
  password: string;
  phone: string;
  isArgeRule: string;
  isReciveNews: string;
  createdAt: string;
  updatedAt: string;
}

export interface IDataStoreAuth {
  token: string;
  user: IUser;
}

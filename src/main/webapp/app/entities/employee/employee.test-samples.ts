import dayjs from 'dayjs/esm';

import { IEmployee, NewEmployee } from './employee.model';

export const sampleWithRequiredData: IEmployee = {
  id: 160,
};

export const sampleWithPartialData: IEmployee = {
  id: 19104,
  firstName: 'Jennyfer',
  lastName: "O'Conner",
  phoneNumber: 'authorisation',
  salary: 1447,
};

export const sampleWithFullData: IEmployee = {
  id: 9386,
  firstName: 'Herminia',
  lastName: 'Hintz',
  email: 'Shyanne.MacGyver@hotmail.com',
  phoneNumber: 'in unto whoever',
  hireDate: dayjs('2024-02-10T18:53'),
  salary: 23119,
  commissionPct: 17058,
};

export const sampleWithNewData: NewEmployee = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);

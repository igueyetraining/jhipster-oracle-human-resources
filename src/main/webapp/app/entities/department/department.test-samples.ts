import { IDepartment, NewDepartment } from './department.model';

export const sampleWithRequiredData: IDepartment = {
  id: 15105,
  departmentName: 'geez',
};

export const sampleWithPartialData: IDepartment = {
  id: 9182,
  departmentName: 'dad',
};

export const sampleWithFullData: IDepartment = {
  id: 17350,
  departmentName: 'digitalize',
};

export const sampleWithNewData: NewDepartment = {
  departmentName: 'consequently versus',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);

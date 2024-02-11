import { IJob, NewJob } from './job.model';

export const sampleWithRequiredData: IJob = {
  id: 17778,
};

export const sampleWithPartialData: IJob = {
  id: 20844,
  jobTitle: 'Forward Creative Engineer',
};

export const sampleWithFullData: IJob = {
  id: 7118,
  jobTitle: 'Corporate Usability Associate',
  minSalary: 15722,
  maxSalary: 22219,
};

export const sampleWithNewData: NewJob = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);

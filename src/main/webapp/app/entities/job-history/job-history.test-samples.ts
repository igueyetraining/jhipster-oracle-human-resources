import dayjs from 'dayjs/esm';

import { IJobHistory, NewJobHistory } from './job-history.model';

export const sampleWithRequiredData: IJobHistory = {
  id: 27938,
};

export const sampleWithPartialData: IJobHistory = {
  id: 16527,
  language: 'SPANISH',
};

export const sampleWithFullData: IJobHistory = {
  id: 20338,
  startDate: dayjs('2024-02-10T07:58'),
  endDate: dayjs('2024-02-11T00:55'),
  language: 'SPANISH',
};

export const sampleWithNewData: NewJobHistory = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);

import { ITask, NewTask } from './task.model';

export const sampleWithRequiredData: ITask = {
  id: 1688,
};

export const sampleWithPartialData: ITask = {
  id: 8875,
};

export const sampleWithFullData: ITask = {
  id: 19002,
  title: 'ick ew',
  description: 'massive broadly cartridge',
};

export const sampleWithNewData: NewTask = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);

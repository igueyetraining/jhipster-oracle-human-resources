import { IRegion, NewRegion } from './region.model';

export const sampleWithRequiredData: IRegion = {
  id: 30866,
};

export const sampleWithPartialData: IRegion = {
  id: 2172,
  regionName: 'impure evoke bah',
};

export const sampleWithFullData: IRegion = {
  id: 2764,
  regionName: 'incidentally inasmuch',
};

export const sampleWithNewData: NewRegion = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);

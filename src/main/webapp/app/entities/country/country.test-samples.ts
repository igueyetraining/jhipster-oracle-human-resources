import { ICountry, NewCountry } from './country.model';

export const sampleWithRequiredData: ICountry = {
  id: 21049,
};

export const sampleWithPartialData: ICountry = {
  id: 24002,
};

export const sampleWithFullData: ICountry = {
  id: 23761,
  countryName: 'deliberately dirty rough',
};

export const sampleWithNewData: NewCountry = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);

import { ILocation, NewLocation } from './location.model';

export const sampleWithRequiredData: ILocation = {
  id: 28307,
};

export const sampleWithPartialData: ILocation = {
  id: 26457,
  streetAddress: 'a hexagon duh',
  city: 'North Sigurd',
};

export const sampleWithFullData: ILocation = {
  id: 22601,
  streetAddress: 'tabletop',
  postalCode: 'comedy spark tan',
  city: 'North Josiannetown',
  stateProvince: 'dense insistent',
};

export const sampleWithNewData: NewLocation = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);

import { ILine } from '../types/types'

const API_URL = 'https://api.tfl.gov.uk/Line/Mode/Tube/Status?app_key=00982225f03f43e3ab891aeda69c1c91';

export const getLineStatus = () : Promise<ILine[]> => fetch(API_URL)
  .then((response) => response.json())
  .catch(err => console.log(err));

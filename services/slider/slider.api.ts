import { DOMAIN } from '../constApi';
import http from '../http';
import { ISlider } from '@/types/slider';

export const getSliders = async () => {
  const response = await http.get<{ data: ISlider[] }>(DOMAIN.GET_SLIDER);
  return response.data.data;
};

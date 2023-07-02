import { IConfigPage } from '@/types/settings';
import { DOMAIN } from '../constApi';
import http from '../http';

export const getConfigPage = () => http.get<Response, IConfigPage[]>(DOMAIN.GET_CONFIG_PAGE);
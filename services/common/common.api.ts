import { INameCode } from '@/types/common';
import { DOMAIN } from '../constApi';
import http from '../http';

export const getColors = async () => {
    const response = await http.get<{data: INameCode[]}>(DOMAIN.GET_COLOR);
    return response.data.data
}

export const getSizes = async () => {
    const response = await http.get<{data: INameCode[]}>(DOMAIN.GET_SIZE);
    return response.data.data
}
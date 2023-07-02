import { ICategory } from '@/types/category';
import { DOMAIN } from '../constApi';
import http from '../http';

export const getCategories = async () => {
    const response = await http.get<{data: ICategory[]}>(DOMAIN.GET_CATEGORY);
    return response.data.data
}

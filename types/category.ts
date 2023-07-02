export interface ICategory {
  id: string;
  name: string;
  parent_id: string;
  slug: string;
  link: string;
  isSale: string;
  children: ICategory[];
  leafNode?: Omit<ICategory, 'children'>[];
}

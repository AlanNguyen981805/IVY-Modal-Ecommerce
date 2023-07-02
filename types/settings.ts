export interface IConfigPage {
  home: {
    title: string;
    sub_cate: ISubCate[];
  };
}

export interface ISubCate {
  query: string;
  title: string;
}

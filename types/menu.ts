import { IconType } from 'react-icons';

export interface IMenuHeaderRight {
  title: string;
  icon: IconType;
  link: string;
  onClick?: () => void;
}

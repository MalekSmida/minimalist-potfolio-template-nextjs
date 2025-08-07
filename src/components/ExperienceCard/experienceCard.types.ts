export interface IExperience {
  _id: string;
  contractType: string;
  position: string;
  company?: string;
  summary: string;
  dates: string;
  iconPath: string;
  iconWidth: number;
  iconHeight: number;
  contributions: string[];
}

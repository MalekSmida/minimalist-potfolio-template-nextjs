export interface IExperience {
  _id: string;
  contractType: string;
  company?: string;
  dates: string;
  positions: string[];
  iconPath: string;
  iconWidth: number;
  iconHeight: number;
  contributions: string[];
  summary: string;
}

export interface IExperienceCard {
  _id: string;
  contractType: string;
  positions: string[];
  company?: string;
  summary: string;
}

export interface IExperience extends IExperienceCard {
  dates: string;
  iconPath: string;
  iconWidth: number;
  iconHeight: number;
  contributions: string[];
}

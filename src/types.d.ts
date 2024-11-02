export interface IFormMeal {
  time: string;
  description: string;
  calories: number;
}

export interface IMutation {
  id: string;
  time: string;
  description: string;
  calories: number;
}

export type ApiNewMeal = Omit<IFormMeal, 'id'>

export interface IApiMeals {
  [id: string]: IFormMeal;
}
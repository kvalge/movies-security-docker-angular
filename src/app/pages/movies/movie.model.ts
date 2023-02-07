import {CategoryModel} from "../categories/category.model";

export class MovieModel {
  public id: number;
  public name: string;
  public description: string;
  public category: CategoryModel;
}

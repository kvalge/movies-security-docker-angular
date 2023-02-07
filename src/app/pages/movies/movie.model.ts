import {CategoryModel} from "../categories/category.model";

export class MovieModel {
  public id: number;
  public name: string;
  public description: string;
  public category: CategoryModel;

  constructor(id: number, name: string, description: string, category: CategoryModel) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.category = category;
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/category';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs';

@Injectable()
export class CategoryService {
    private url: string = "http://192.168.88.103:9009";

  constructor(private http: HttpClient) { }

  getPopularCategories(): Observable<Category[]> { 
    return this.http.get(this.url + "/category/main")
    .pipe(map(v => {
        var popularCategories: Category[] = []; 
        var aData = v as any[];
        aData.forEach(element => {
        popularCategories.push(
            new Category(element.name, element.imageURL, element.id, element.mainPage));
      });
      return popularCategories;
    }));
  }

  getAllCategories(): Observable<Category[]> { 
    return this.http.get(this.url + "/category/all")
    .pipe(map(v => {
        var popularCategories: Category[] = []; 
        var aData = v as any[];
        aData.forEach(element => {
        popularCategories.push(
            new Category(element.name, element.imageURL, element.id, element.mainPage));
      });
      return popularCategories;
    })); 
  }
}
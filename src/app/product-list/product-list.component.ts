import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, filter } from 'rxjs';
import { Category, CategoryService, Product, ProductService } from 'src/openapi';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public defaultSelectedCategory = 0;
  public title: string = "Каталог";
  public searchString: string = "";
  public selectedCategory: number = 0;
  public priceFrom: number = 0;
  public priceTo: number = 99999999;
  public productList = new BehaviorSubject([] as Product[]);
  public categoryList =  new BehaviorSubject([] as Category[]);

  constructor(
    private readonly productService: ProductService,
    private readonly categoryService: CategoryService,
    private readonly route: ActivatedRoute,
    private readonly router: Router) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe(d => {
      var v = Number.parseInt(d.get("id") || "0");
      this.defaultSelectedCategory = v;
      this.selectedCategory = v;
    });
    this.updateCategoryList();
    this.updateProductList();
   
  }

  updateProductList() {
    console.log(this.selectedCategory);
    this.productService.productList(
      this.selectedCategory || 0, this.priceFrom, this.priceTo, this.searchString
    ).subscribe(data => this.productList.next(data.products || []));
  }

  updateCategoryList() {
    this.categoryService.categoryList(false).subscribe(data =>
      this.categoryList.next(this.combineCategory(data.categories || [])));
  }

  filterCanged() {
    this.updateProductList();
  }

  toProductPage(productId: number | undefined) {
    this.router.navigate(["/product/" + productId])
  }

  resetFilter() {
    this.searchString = "";
    this.priceFrom = 0;
    this.priceTo = 99999999;
    this.selectedCategory = 0;
    this.updateCategoryList();
    this.updateProductList();
  }

  private combineCategory(category: Category[]) {
    var allCat: Category = {
      id:0,
      name:"Все категории"
    };
    category.push(allCat);
    return category;
  }


}

import { Component, OnInit } from '@angular/core';
import { Product } from './list.model';
import { ListService } from './list.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  productList: Product[];
  name: string;
  rate: number;
  quality: number;
  qualities = [{ name: 'Good', value: 1 }, { name: 'Better', value: 2 }, { name: 'Best', value: 3 }]

  constructor(private listService: ListService) {
  }

  ngOnInit(): void {
    this.getAllProjects();
  }

  getAllProjects(): void {
    this.listService.getProducts().subscribe(res => {
      this.productList = res;
    })
  }

  addProduct(name: string, rate: number, quality: number): void {
    let newProduct: Product = {
      id: this.productList[this.productList.length - 1].id + 1,
      name: name,
      rate: rate,
      quality: quality
    }
    this.listService.addProduct(newProduct).subscribe(res => {
      console.log('new product: ' + res);
      this.getAllProjects();
    });
  }

  deleteProduct(id: number): void {
    this.productList.splice(this.productList.findIndex(x => x.id === id), 1);
  }
}

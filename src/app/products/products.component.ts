import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  Products = [
    {
      id: "ABC8441189035",
      name: "CAMISA",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      id: "DEF6510463347",
      name: "ZAPATOS",
      description: "Proin ac metus in diam porttitor viverra eu sit amet ligula."
    },
    {
      id: "GHI0831819467",
      name: "NIÑOS",
      description: "Duis sodales dui vitae urna varius, at ullamcorper purus tempor."
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}

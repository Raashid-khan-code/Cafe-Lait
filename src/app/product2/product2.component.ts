import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product2',
  templateUrl: './product2.component.html',
  styleUrls: ['./product2.component.css']
})
export class Product2Component implements OnInit {

  cards = [
    {
      title: "Black Coffee",
      description: "Black coffee is as simple as it gets – ground coffee beans soaked in hot water, served warm. And if you want to sound fancy, you can call black coffee by its proper name: café noir.",
      ingredients: [
        "Coffee"
      ],
      image: "https://images.unsplash.com/photo-1494314671902-399b18174975?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      id: 1,
      price: "₹ 450/-"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

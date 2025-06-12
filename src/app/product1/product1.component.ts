import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product1',
  templateUrl: './product1.component.html',
  styleUrls: ['./product1.component.css']
})
export class Product1Component implements OnInit {
    cards = [
      {
        title: "Black Coffee",
        description: "Black coffee is as simple as it gets – ground coffee beans soaked in hot water, served warm. And if you want to sound fancy, you can call black coffee by its proper name: café noir.",
        ingredients: [
          "Coffee"
        ],
        image: "https://images.unsplash.com/photo-1494314671902-399b18174975?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        id: 1,
        price: "₹ 239/-"
      },

      {
        title: "Latte",
        description: "As the most popular coffee drink out there, a latte consists of a shot of espresso and steamed milk with just a touch of foam. It can be ordered plain or flavored with anything from vanilla to pumpkin spices.",
        ingredients: [ "Espresso", "Steamed Milk" ],
        image: "https://images.unsplash.com/photo-1561882468-9110e03e0f78?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxhdHRlfGVufDB8fDB8fHww",
        id: 2,
        price: "₹ 350/-"
      },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

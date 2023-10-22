import { Component } from '@angular/core';
import { WishItem } from 'src/shared/wishItem';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = "Hello worlds"
  wishItems : WishItem[] = [
    new WishItem("Item 1"),
    new WishItem("Item 2", true),
    new WishItem("Item 3"),
  ]

  items = ['asds','sadasd']

  toggleItem(e: any) {
    // e.preventDefault();
    console.log("Items clicked")
  }
}

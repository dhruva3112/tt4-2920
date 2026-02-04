import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'my-app-angular';
  name = 'Renan';

  imageUrl =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJffy5BzAqh_fl9LjrAPi-lDsx05wdFQHUjA&s';

  isLoggedIn = true;

  items = [
    'Item A',
    'Item B',
    'Item C',
    'Item D',
    'Item E',
    'Item F',
    'Item G'
  ];

  isActive = false;
  textColor = 'red';
  fontSize = 50;

  clickButton() {
    console.log('Button Clicked!');

    this.name = 'Ronaldo';

    this.imageUrl =
      'https://media.istockphoto.com/id/154401486/photo/button-blue-blank.jpg?s=612x612&w=0&k=20&c=hI3EJRMxiY4UrIXTEKDxObYTkKOg1TusSI7T8TL0SDw=';

    this.isActive = true;
    this.textColor = 'yellow';
    this.fontSize--;
  }


  logout() {
    this.isLoggedIn = false;
  }

  login() {
    this.isLoggedIn = true;
  }



  removeFromCart(index: number) {
    this.items.splice(index, 1);
  }

}
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class navbarComponent {
  title = 'chrome';
}

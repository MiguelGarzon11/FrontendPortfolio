import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './presentation/shared/components/header/header';
import { Footer } from './presentation/shared/components/footer/footer';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, FormsModule],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'portfolio';
}

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {KMI} from '../views/kmi/kmi';
import {Header} from '../components/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, KMI, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('KMI');
}

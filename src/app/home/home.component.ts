import { Component } from '@angular/core';
import { HeaderComponent} from '../header/header.component';
import { MatCard } from '@angular/material/card';
import { MatCardHeader} from '@angular/material/card';
import { MatCardImage} from '@angular/material/card';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, MatCard, MatCardHeader, MatCardImage],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  skills = [
    { title: 'AI Development', description: 'Building intelligent systems that learn and evolve.' },
    { title: 'Software Development', description: 'Producing robust and usable softwares.'},
    { title: 'Creative Design', description: 'Crafting visually stunning and user-centric designs.' },
    { title: 'Web Development', description: 'Creating responsive, efficient, and scalable web applications.' },
    { title: 'Data Science', description: 'Managing sensible data and carefully studying it.' },
  ];
}

import { Component } from '@angular/core';
import {NgForOf, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-portfolio',
  imports: [
    NgForOf,
    NgOptimizedImage
  ],
  templateUrl: './portfolio.component.html',
  standalone: true,
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

  projects = [
    {
      title: 'BluM',
      description: 'A mobile application that will first help users to easily grab the recipes of dishes. It will permit them to visualize a dish, alert them about the ingredients , prepare the dish following steps(videos are included).',
      techStack: 'React Native, JavaScript, Node.js, MySQL',
      image: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505',
      githubLink: 'https://github.com/SimenMacRoy/BluM'
    },
    {
      title: 'E-Simen',
      description: 'A website that is involved in the selling of dresses for men, women, children and also linens such as towels, curtains,',
      techStack: 'JavaScript, HTML, CSS, Python, MySQL',
      image: 'https://st.depositphotos.com/4678277/57557/i/450/depositphotos_575576920-stock-photo-photo-sweet-pretty-lady-dressed.jpg',
      githubLink: 'https://github.com/SimenMacRoy/Esimen'
    },
    {
      title: 'Jambo',
      description: 'An app that will simulate a game of cards.',
      techStack: 'C#',
      image: 'https://img.freepik.com/free-vector/playing-cards-aces-set_78370-2354.jpg',
      githubLink: 'https://github.com/SimenMacRoy/Jambo'
    },
    {
      title: 'Json Hack',
      description: 'This mini-application is designed to serialize instances of a class into a JSON file. These objects can have properties of simple types, objects, or collections. The second part of the application is used to deserialize a JSON file, meaning that, starting from a JSON file, an instance of a class can be recreated',
      techStack: 'Java',
      image: 'https://blogs.uoregon.edu/cis111spring16/files/2016/05/json-logo-2dor7vq-zxosi2.png',
      githubLink: 'https://github.com/SimenMacRoy/JsonHack'
    },
    {
      title: 'Actividad',
      description: 'A mini website that allows the addition and display of clients as well as the activities they participate in within a database.',
      techStack: 'Hack, JavaScript, PHP, CSS, MySQL',
      image: 'https://img.freepik.com/free-vector/kids-learning-playing-illustration_53876-40285.jpg',
      githubLink: 'https://github.com/SimenMacRoy/Actividad'
    },
    {
      title: 'Evolution',
      description: 'This project uses genetic algorithms, in order to solve for which generation best fits a given problem.',
      techStack: 'Python',
      image: 'https://assets.newatlas.com/dims4/default/4edb3e8/2147483647/strip/true/crop/1536x1024+128+0/resize/1200x800!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2F79%2Ffc%2F951f19e44be787dbc2ad991f3547%2Fcrispr.jpg',
      githubLink: 'https://github.com/SimenMacRoy/Evolution'
    },
    {
      title: 'Game of Life',
      description: 'This project uses Conway\'s algorithm, to simulate the Game of life.',
      techStack: 'Python',
      image: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Gospers_glider_gun.gif',
      githubLink: 'https://github.com/SimenMacRoy/JeuDeLaVie'
    }
  ];

}

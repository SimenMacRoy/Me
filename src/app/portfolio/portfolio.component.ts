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
      image: 'assets/images/ai-chatbot.png',
      liveLink: 'https://example.com/ai-chatbot',
      githubLink: 'https://github.com/SimenMacRoy/BluM'
    },
    {
      title: 'E-Simen',
      description: 'A website that is involved in the selling of dresses for men, women, children and also linens such as towels, curtains,',
      techStack: 'JavaScript, HTML, CSS, Python, MySQL',
      image: 'assets/images/portfolio-website.png',
      liveLink: 'https://example.com/portfolio',
      githubLink: 'https://github.com/SimenMacRoy/Esimen'
    },
    {
      title: 'Jambo',
      description: 'An app that will simulate a game of cards.',
      techStack: 'C#',
      image: 'assets/images/e-commerce.png',
      liveLink: 'https://example.com/e-commerce',
      githubLink: 'https://github.com/SimenMacRoy/Jambo'
    },
    {
      title: 'Json Hack',
      description: 'This mini-application is designed to serialize instances of a class into a JSON file. These objects can have properties of simple types, objects, or collections. The second part of the application is used to deserialize a JSON file, meaning that, starting from a JSON file, an instance of a class can be recreated',
      techStack: 'Java',
      image: 'assets/images/e-commerce.png',
      liveLink: 'https://example.com/e-commerce',
      githubLink: 'https://github.com/SimenMacRoy/JsonHack'
    },
    {
      title: 'Actividad',
      description: 'A mini website that allows the addition and display of clients as well as the activities they participate in within a database.',
      techStack: 'Hack, JavaScript, PHP, CSS, MySQL',
      image: 'assets/images/e-commerce.png',
      liveLink: 'https://example.com/e-commerce',
      githubLink: 'https://github.com/SimenMacRoy/Actividad'
    },
    {
      title: 'Evolution',
      description: 'This project uses genetic algorithms, in order to solve for which generation best fits a given problem.',
      techStack: 'Python',
      image: 'assets/images/e-commerce.png',
      liveLink: 'https://example.com/e-commerce',
      githubLink: 'https://github.com/SimenMacRoy/Evolution'
    }
  ];

}

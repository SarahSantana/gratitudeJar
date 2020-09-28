import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gratitude-jar';

  boasVindas = [
    'e aí xuxu?',
    'qual a boa bebê?',
    'Bem-Vindo lindeza!',
    'tutu bene?',
    'E aí flor do deserto?',
    'Oi migo! que saudades :)',
    'Que bom que você está aqui!',
    'Demorou hein xuxu? Volte mais vezes!'
  ];
}

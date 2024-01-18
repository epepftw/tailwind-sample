import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ButtonStylesModel } from '../models/button-styles.model';
import { PageStylesModel } from '../models/page-styles.model';
import { SpacingStylesModel } from '../models/spacing-styles.model';
import { CardModel } from '../models/component-models/card.model';
import { CardComponent } from './components/shared/card/card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CardComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  buttonStyles = new ButtonStylesModel();
  pageStyles = new PageStylesModel();
  spacingStyles = new SpacingStylesModel();
  myCard = new CardModel('Sample Title', 'Sample Description');
}

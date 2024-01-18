import { Component, Input } from '@angular/core';
import { PageStylesModel } from '../../../../models/page-styles.model';
import { CardModel } from '../../../../models/component-models/card.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() card!: CardModel;

  pageStyles = new PageStylesModel();
}

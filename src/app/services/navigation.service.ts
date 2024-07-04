import { Injectable } from '@angular/core';
import { NavOption } from '../types/navOptions';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private options: NavOption[] = [
    {
      title: 'SKILLS',
      isUntouched: false,
      isSelected: false
    },
    {
      title: 'INVENTORY',
      isUntouched: true,
      isSelected: false
    },
    {
      title: 'CRAFTING',
      isUntouched: true,
      isSelected: true
    },
    {
      title: 'MAP',
      isUntouched: false,
      isSelected: false
    },
    {
      title: 'QUESTS',
      isUntouched: true,
      isSelected: false
    },
    {
      title: 'NOTEBOOK',
      isUntouched: true,
      isSelected: false
    },
  ];

  getItems() {
    return this.options;
  }
}

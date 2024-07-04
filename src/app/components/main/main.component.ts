import { CommonModule } from '@angular/common';
import { Component, ElementRef, QueryList, ViewChild, ViewChildren, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationService } from '../../services/navigation.service';
import { NavOption } from '../../types/navOptions';

import { InteractionManager }  from 'coherent-gameface-interaction-manager';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  @ViewChildren('option') navItems!: QueryList<ElementRef>;

  navOptions!: NavOption[];

  navigationService = inject(NavigationService);

  interactionManager = new InteractionManager();

  ngOnInit(): void {
    
    this.navOptions = this.navigationService.getItems();
  }

  onNavItemClick(event: MouseEvent) {
    this.navItems.forEach(item => {
      item.nativeElement.classList.remove('selected', 'animate');
    });

    const target = event.target as HTMLElement;
    target.classList.add('selected');
    target.classList.add('animate');
  }
}

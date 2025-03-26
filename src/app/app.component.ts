import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
// import { CommonModule } from '@angular/common';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { MenuItem } from 'primeng/api';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [RouterOutlet, HomeComponent, MenuModule], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = ' Friends';
  menuItems: MenuItem[] = [
    { label: '☕ Coffee or Tea',command: () => this.selectItem('Coffee or Tea') },
    { separator: true },
    { label: '🍳 Breakfast',command: () => this.selectItem('Breakfast') },
    { separator: true },
    { label: '🍛 Lunch', command: () => this.selectItem('Lunch')},
    { separator: true },
    { label: '🍽 Dinner',command: () => this.selectItem('Dinner')},
    { separator: true },
    { label: '🍨 Desserts',command: () => this.selectItem('Desserts')},
    { separator: true },
    { label: '🥗 Healthy Options',command: () => this.selectItem('Healthy Options')},
    { separator: true },
    { label: '🍷 Bevarages',command: () => this.selectItem('Bevarages')},
    
  ];
  // Add selectItem method to handle menu clicks
  selectItem(item: string) {
    console.log('Selected:', item);
  }
}


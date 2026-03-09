import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  title = 'meet5-web';
  logout() {
  // Example: clear localStorage / redirect to login
  console.log('Logging out...');
  // localStorage.clear();
  // this.router.navigate(['/login']);
}}
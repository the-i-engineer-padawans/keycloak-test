import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private router: Router,
  ) {
  }

  goToPublicSpace(): void {
    this.router.navigate(['/public-space']);
  }

  goToRestrictedSpace(): void {
    this.router.navigate(['/restricted-space']);
  }

}

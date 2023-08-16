import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-public-space',
  templateUrl: './public-space.page.html',
  styleUrls: ['./public-space.page.scss'],
})
export class PublicSpacePage implements OnInit {

  constructor(
    private router: Router,
  ) {
  }

  ngOnInit() {
  }

  goToPublicSpace(): void {
    this.router.navigate(['/public-space']);
  }

  goToRestrictedSpace(): void {
    this.router.navigate(['/restricted-space']);
  }

  goHome(): void {
    this.router.navigate(['/home']);
  }
}

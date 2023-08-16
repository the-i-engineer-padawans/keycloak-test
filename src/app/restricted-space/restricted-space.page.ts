import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {KeycloakService} from 'keycloak-angular';

@Component({
  selector: 'app-restricted-space',
  templateUrl: './restricted-space.page.html',
  styleUrls: ['./restricted-space.page.scss'],
})
export class RestrictedSpacePage implements OnInit {

  constructor(
    private router: Router,
    private keycloakService: KeycloakService
  ) {
  }

  ngOnInit() {
  }

  username(): string {
    return this.keycloakService.getUsername();
  }

  logout() :void {
    this.keycloakService.logout('http://localhost:4200');
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

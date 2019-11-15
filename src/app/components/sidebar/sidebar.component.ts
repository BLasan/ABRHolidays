import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'design_app', class: '' },
  //  { path: '/icons', title: 'Icons',  icon:'education_atom', class: '' },
    // { path: '/maps', title: 'Maps',  icon:'location_map-big', class: '' },
    { path: '/notifications', title: 'Notifications',  icon:'ui-1_bell-53', class: '' },
    { path: '/manage-news-feed', title: 'News Feed',  icon:'education_paper', class: '' },
    { path: '/add-package_details', title: 'Add Package',  icon:'ui-1_simple-add', class: '' },
    // { path: '/accomodation-transfer', title: 'Accomodation',  icon:'business_bank', class: '' }, 
    // { path: '/user-profile', title: 'User Profile',  icon:'users_single-02', class: '' },
    { path: '/view-details', title: 'View Details',  icon:'design_bullet-list-67', class: '' },
    // { path: '/settings', title: 'Settings',  icon:'loader_gear', class: '' },

    // { path: '/typography', title: 'Typography',  icon:'text_caps-small', class: '' },
    // { path: '/upgrade', title: 'Upgrade to PRO',  icon:'objects_spaceship', class: 'active active-pro' }

];


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ( window.innerWidth > 991) {
          return false;
      }
      return true;
  };
}

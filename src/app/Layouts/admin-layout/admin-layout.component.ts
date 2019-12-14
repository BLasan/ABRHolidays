import {filter} from 'rxjs/operators';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy, PopStateEvent } from '@angular/common';
import { enable_search_bar,disable_search_bar} from '../../../scripts/frontend/disable_enable_search_bar.js';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { Subscription ,  Observable } from 'rxjs';
import PerfectScrollbar from 'perfect-scrollbar';
import { UserIdleService } from 'angular-user-idle';
import { AngularFireAuth } from '@angular/fire/auth';
@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {
  private _router: Subscription;
  private lastPoppedUrl: string;
  private yScrollStack: number[] = [];

  constructor( public location: Location, private router: Router,private userIdle:UserIdleService,private auth:AngularFireAuth) {}

  ngOnInit() {
     // this.disable_enable_navbar_search_bar();
      const isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;

      if (isWindows && !document.getElementsByTagName('body')[0].classList.contains('sidebar-mini')) {
          // if we are on windows OS we activate the perfectScrollbar function

          document.getElementsByTagName('body')[0].classList.add('perfect-scrollbar-on');
      } else {
          document.getElementsByTagName('body')[0].classList.remove('perfect-scrollbar-off');
      }
      const elemMainPanel = <HTMLElement>document.querySelector('.main-panel');
      const elemSidebar = <HTMLElement>document.querySelector('.sidebar .sidebar-wrapper');

      this.location.subscribe((ev:PopStateEvent) => {
          this.lastPoppedUrl = ev.url;
      });
       this.router.events.subscribe((event:any) => {
          if (event instanceof NavigationStart) {
             if (event.url != this.lastPoppedUrl)
                 this.yScrollStack.push(window.scrollY);
         } else if (event instanceof NavigationEnd) {
             if (event.url == this.lastPoppedUrl) {
                 this.lastPoppedUrl = undefined;
                 window.scrollTo(0, this.yScrollStack.pop());
             } else
                 window.scrollTo(0, 0);
         }
      });
      this._router = this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => {
           elemMainPanel.scrollTop = 0;
           elemSidebar.scrollTop = 0;
      });
      if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
          let ps = new PerfectScrollbar(elemMainPanel);
          ps = new PerfectScrollbar(elemSidebar);
      }

      this.userIdle.startWatching();

      this.userIdle.onTimerStart().subscribe(count =>{
        // console.log(count);
        var eventList= ['click', 'mouseover','keydown','DOMMouseScroll','mousewheel','mousedown','touchstart','touchmove','scroll','keyup'];
          for(let event of eventList) {
          document.getElementById('wrapper_admin').addEventListener(event, () =>this.userIdle.resetTimer());
          }
      })
      
  
      this.userIdle.onTimeout().subscribe(() =>{
        this.auth.auth.signOut();
        localStorage.removeItem('login');
        alert('Your Session has been Expired');
        this.router.navigate(['login']);
        localStorage.setItem('session','timeout');
  
      });

      // this.userIdle.onTimerStart().subscribe(count =>{
      //   console.log(count);
      //   var eventList= ['click', 'mouseover','keydown','DOMMouseScroll','mousewheel','mousedown','touchstart','touchmove','scroll','keyup'];
      //     for(let event of eventList) {
      //     document.getElementById('wrapper_admin').addEventListener(event, () =>this.userIdle.resetTimer());
      //     }
      // })
      
  
      // this.userIdle.onTimeout().subscribe(() =>{
      //   this.auth.auth.signOut();
      //   localStorage.removeItem('login');
      //   alert('Your Session has been Expired');
      //   this.router.navigate(['login']);
      //   localStorage.setItem('session','timeout');
  
      // });
  }

  ngAfterViewInit() {
      this.runOnRouteChange();
  }

  stop() {
    this.userIdle.stopTimer();
  }
 
  stopWatching() {
    this.userIdle.stopWatching();
  }
 
  startWatching() {
    this.userIdle.startWatching();
  }
 
  restart() {
    this.userIdle.resetTimer();
  }


  isMaps(path){
      var titlee = this.location.prepareExternalUrl(this.location.path());
      titlee = titlee.slice( 1 );
      if(path == titlee){
          return false;
      }
      else {
          return true;
      }
  }
  runOnRouteChange(): void {
    if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
      const elemMainPanel = <HTMLElement>document.querySelector('.main-panel');
      const ps = new PerfectScrollbar(elemMainPanel);
      ps.update();
    }
  }
  isMac(): boolean {
      let bool = false;
      if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
          bool = true;
      }
      return bool;
  }

  disable_enable_navbar_search_bar(){
    var titlee = this.location.prepareExternalUrl(this.location.path());
    console.log(titlee)
    if(titlee.charAt(0) === '#'){
      titlee = titlee.slice( 2 );
    }

    if(titlee==="/dashboard"){
      disable_search_bar();
    }

    if(titlee==="/notifications"){
      disable_search_bar();
    }

    if(titlee==="/manage_news_feed"){
      disable_search_bar();
    }

    if(titlee==="/settings"){
      disable_search_bar();
    }

    if(titlee==="/manage_news_feed"){
      enable_search_bar();
    }

    if(titlee==="/table-list"){
      disable_search_bar();
    }

    if(titlee==="/add-package_details"){
      disable_search_bar();
    }
  }

}

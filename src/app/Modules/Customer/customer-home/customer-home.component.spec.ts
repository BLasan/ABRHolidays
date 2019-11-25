import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerHomeComponent } from './customer-home.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule, AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage, AngularFireStorageModule } from '@angular/fire/storage';

describe('CustomerHomeComponent', () => {
  let component: CustomerHomeComponent;
  let fixture: ComponentFixture<CustomerHomeComponent>;

  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [ CustomerHomeComponent ]
  //   })
  //   .compileComponents();
  // }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(CustomerHomeComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  it('should return none',()=>{
    let db:AngularFirestore;
    const result=new CustomerHomeComponent(db).printH();
    expect(result).toBe("Hello");
  })
});

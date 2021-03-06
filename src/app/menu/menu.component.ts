import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ShowMenuModalComponent } from '../show-menu-modal/show-menu-modal.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  public uiInvalidCredential = false;
  tempo;
  arr;
  constructor(private http: HttpClient, private modalService: NgbModal) {}

  ngOnInit(): void {}

  async showMenu() {
    let x = new Date();
    let data = x.getDay();
    console.log('data', data);
    let y = '';
    if (data == 1) {
      y = 'monday';
    }
    if (data == 2) {
      y = 'tuesday';
    }
    if (data == 3) {
      y = 'wednesday';
    }
    if (data == 4) {
      y = 'thursday';
    }
    if (data == 5) {
      y = 'friday';
    }
    if (data == 6) {
      y = 'saturday';
    }

    if (y == 'sunday') {
    }
    let abc = { y };

    console.log('y', y);
    console.log(abc);

    // ajax call
    const url = 'http://localhost:3500/showmenu';
    const result: any = await this.http.post(url, abc).toPromise();
    console.log(result);
    this.tempo = result;
    this.arr = this.tempo[0];

    this.uiInvalidCredential = true;

    //this.modalService.open(ShowMenuModalComponent, {
    //centered: true,
    //});
  }
}

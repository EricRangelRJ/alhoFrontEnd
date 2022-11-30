import { DialogLogoutComponent } from './../dialog-logout/dialog-logout.component';
import { HeaderComponent } from './../header/header.component';
import { AppComponent } from './../../../app.component';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogLogoutComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });

  }

}

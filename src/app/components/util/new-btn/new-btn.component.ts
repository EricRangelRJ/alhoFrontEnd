import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';

@Component({
  selector: 'app-new-btn',
  templateUrl: './new-btn.component.html',
  styleUrls: ['./new-btn.component.scss']
})
export class NewBtnComponent implements OnInit {

  //Parâmetros passados pelo HTML
  @Input() rota: string;
  @Input() transaction: string;
  @Input() tooltip: string;

  showIcon = false;

  constructor(private router: Router, private auth: AuthGuard) { }

  ngOnInit(): void {
    this.showIcon = true;
  }

  navigate(): void{
    console.log(this.rota);
    if(this.rota !== ''){
        this.router.navigate([this.rota]);
      };
  
}

}
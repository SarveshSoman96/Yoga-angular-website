import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() {  }

  ngOnInit(): void {
  }


@ViewChild('myForm') Form: NgForm;

formSubmit(){
  console.log(this.Form)
}

}

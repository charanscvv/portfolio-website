import { Component, OnInit,OnDestroy  } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit,OnDestroy  {
  shake;
  constructor() {
   }
   
  ngOnInit(): void {
      this.shake = setInterval(() => {
        document.getElementsByClassName('contact')[0].classList.toggle('animate');
      }, 800);
    
  }

  ngOnDestroy() {
    clearInterval(this.shake);
  }

}

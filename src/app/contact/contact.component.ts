import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  ngOnInit(){
    let h3 = document.querySelector('.div_row2_col2 h3 br') as HTMLBRElement;

    if (document.body.offsetWidth < 1108){
      h3.style.display = "none";
    }
  }
}

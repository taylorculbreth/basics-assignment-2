import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = '';
  enableResetNameButton = true;


  updateUserName(event){
    console.log(event);
    if(event.target.value != ''){
      this.enableResetNameButton = false;
    }
  }

  resetUserName(){
    this.username = '';
    this.enableResetNameButton = true;
  }
}


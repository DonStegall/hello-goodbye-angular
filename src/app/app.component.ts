import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'hello-goodbye-angular';

  private inputText: string = null;

  public handleHello() {
    this.inputText = 'Hello';
  }

  public handleGoodbye() {
    this.inputText = 'Goodbye';
  }

  public handleUpperCase() {
    this.inputText = this.inputText.toUpperCase();
  }

  public handleLowerCase() {
    this.inputText = this.inputText.toLowerCase();
  }

  public handleMessage() {
    alert(this.inputText);
  }

  public handleClear() {
    this.inputText = null;
  }

}

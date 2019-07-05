import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { ConfigService } from 'src/app/config.service';
declare var jquery:any;
declare var $:any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public contacts = [];

  constructor(private _setHeaders : AppComponent, private _contactDataService: ConfigService) {
    this._setHeaders.subMenuSwitch("contactSubMenu");
  }

  ngOnInit() {
    // sets the page title when loaded from URL
    this._setHeaders.pageTitle = "Contact";
    // gets the data fom the JSON file
    this._contactDataService.getContactData()
      .subscribe(data => this.contacts = data);
    // takes all highlights away besides the one active
    var elemID = "men3";
    this._setHeaders.clearHighlight();
    this._setHeaders.setHighlight(elemID);
  }

}

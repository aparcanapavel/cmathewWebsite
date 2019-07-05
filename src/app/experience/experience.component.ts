import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { ConfigService } from 'src/app/config.service';
declare var jquery:any;
declare var $:any;

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  // title of portfolios(like data structures, comp arch, side projects)
  public portTitles = [];
  // details like the work position, location, time
  public workDetails = [];

  constructor(private _setHeaders : AppComponent, private _experienceDataService: ConfigService) {
    this._setHeaders.subMenuSwitch("experienceSubMenu");
  }

  ngOnInit() {
    // sets the page title when loaded from URL
    this._setHeaders.pageTitle = "Experience";
    // gets the data fom the JSON file
    this._experienceDataService.getExperienceData()
      .subscribe(data => {
      this.SetPortTitles(data);
    });
    // takes all highlights away besides the one active
    var elemID = "men2";
    this._setHeaders.clearHighlight();
    this._setHeaders.setHighlight(elemID);
  }

  SetPortTitles(data : any) {
    // set portfolio data to portTitles
   this.portTitles = data['portfolio'];
   this.workDetails = data['workXp'];
  }
}

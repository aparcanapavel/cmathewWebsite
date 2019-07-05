import { Component, OnInit } from '@angular/core';
import { BlogComponent } from 'src/app/home/blog/blog.component';
import { ConfigService } from 'src/app/config.service';
import { AppComponent } from 'src/app/app.component'
// import { BlogConfigService } from 'src/app/blog-config.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public aboutMe =  [];
  public blogs =  [];

  constructor(private _aboutDataService: ConfigService, private _setTitle : AppComponent) {
    // sets the sub menu type form the app compoment
    this._setTitle.subMenuSwitch("homeSubMenu");
  }

  ngOnInit() {
    this._aboutDataService.getData()
      .subscribe(data => {
      this.SetQueryOptionsData(data);
    });
    // takes all highlights away besides the one active
    var elemID = "men1";
    this._setTitle.clearHighlight();
    this._setTitle.setHighlight(elemID);
  }
  SetQueryOptionsData(data : any) {
   this.aboutMe = data;
   this.blogs = data['blogs'];
  }
  // checks what was just clicked and assigns it to the page title
  setTitleTo(e)
  {
    var target = e.target || e.srcElement || e.currentTarget;
    // var idAttr = target.attributes;
    var title = target.innerText;
    console.log(target);
    this._setTitle.pageTitle = title;
  }

}

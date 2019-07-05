import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/config.service';
import { HomeComponent } from 'src/app/home/home.component';
import { AppComponent } from 'src/app/app.component'

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  public blogs =  [];

  constructor(private _dataService: ConfigService, private _setTitle : AppComponent){
  this._setTitle.subMenuSwitch("homeSubMenu");
  }

  ngOnInit() {
    this._setTitle.pageTitle = "Blog";
    this._dataService.getData()
      .subscribe(data => this.blogs = data['blogs']);
  }
}

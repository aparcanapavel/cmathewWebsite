import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from 'src/app/config.service';
import { AppComponent } from 'src/app/app.component'

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  posts = [];

  constructor(private route:ActivatedRoute, private config: ConfigService,private _setTitle : AppComponent) { }

  ngOnInit() {
    // sets the title of the page to Blog onn Init.
    this._setTitle.pageTitle = "Blog";
    // gets the ID of the blog post number
    let id = +this.route.snapshot.paramMap.get('id');
    // console.log(id);
    // console.log(this.posts);
    // sends the id number to getPostById
    this.getPostById(id)
  }
  getPostById(id)
  {
    // grab the data from the JSON
    this.config.getData()
    .subscribe(data => {
      // have to do it this way to solve errors. no idea why.
      // sends the data and the Id to be computed on SetOptionsData
      this.SetOptionsData(data, id);
    });
  }
  SetOptionsData(data : any, id: any) {
    // gets the blog objects and computes it accordingly to the array number.
   var blogs = data['blogs'];
   this.posts = blogs[id-1];
  }
  // this is how i had it before and it gave me the error
  // getPostById(id)
  // {
  //   this.config.getData()
  //   .subscribe(data => this.posts = data.blogs[id-1]);
  // }
}

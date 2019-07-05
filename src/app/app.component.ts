import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { animate, state, style, transition, trigger, query, group } from '@angular/animations';
import { ConfigService } from 'src/app/config.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
declare var jquery:any;
declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('titleSwitch', [
      transition(':enter', [
        style({ opacity: '0' }),
        animate(500)
      ]),
      transition(':leave', [
        animate(0)
      ]),
      // state('*', style({ backgroundColor: 'green' })),
    ]),
    // animations for the router
    trigger('routeAnimations', [
      transition('1=>2, 1=>3, 1=>4, 1=>5, 2=>3, 2=>4, 2=>5, 3=>4, 3=>5, 4=>5', [
        style({ height: '!'}), //sets the height to be the height at the end of the amination
        query(':enter', style({ transform: 'translateX(100%)' })),
        query(':enter, :leave', style({
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0
        })),
        // animate the leave page away
        group([
            query(':leave', [
                animate('0.3s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(-100%)' })),
            ]),
            // and now reveal the enter
            query(':enter', animate('0.3s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(0)' }))),
        ]),
      ]),
      transition('5=>4, 5=>3, 5=>2, 5=>1, 4=>3, 4=>2, 4 =>1 , 3=>2, 3=>1, 2=>1', [
        style({ height: '!'}), //sets the height to be the height at the end of the amination
        query(':enter', style({ transform: 'translateX(-100%)' })),
        query(':enter, :leave', style({
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0
        })),
        // animate the leave page away
        group([
            query(':leave', [
                animate('0.3s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(100%)' })),
            ]),
            // and now reveal the enter
            query(':enter', animate('0.3s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(0)' }))),
        ]),
      ])
    ])
  ]
})
export class AppComponent implements OnInit {
  // page title is set based on what menu option is clicked. It is also set by each component when the window is opened just in case someone goes to the page via URL not through the landing page.
  pageTitle = '';
  // this is the swich variable that selects which sub menu is
  public subMenus = "";

  contact = [];

  constructor(private _contactDataService: ConfigService){
    this.subMenus= "homeSubMenu";
    // this.pageTitle = "Home"
  }

  ngOnInit()
  {
    this._contactDataService.getContactData()
      .subscribe(data => this.contact = data);
      this.pageTitle = "Home";

    // $(document).on("click", function (e) {
    //     if ($(e.target).is("#men1 ,#men2 ,#men3") == false) {
    //       $("#mainMenu > label").removeClass("active");
    //       $("#pages").removeClass("slide");
    //       $("#headerLeft> a > h2, #headerLeft>span, #headerRight > a, #BridgePicture > img, #pageTitle, #subMenu, #rotateLine, #rightLine, #trapezoid, #container2").removeClass("blurBackground");
    //     }
    // });

  }
  // slide anination for the menu.
  toggleMenu()
  {
    $("#mainMenu > label").toggleClass("active");
    $("#pages").toggleClass("slide");
  }
  slideMenuOut()
  {
    $("#mainMenu > label").removeClass("active");
    $("#pages").removeClass("slide");
    // console.log("Menu clicked!");
  }
  toggleBlur()
  {
      $("#headerLeft> a > h2, #headerLeft>span, #headerRight > a, #BridgePicture > img, #pageTitle, #subMenu, #rotateLine, #rightLine, #trapezoid, #container2").toggleClass("blurBackground");
  }
  removeBlur()
  {
      $("#headerLeft> a > h2, #headerLeft>span, #headerRight > a, #BridgePicture > img, #pageTitle, #subMenu, #rotateLine, #rightLine, #trapezoid, #container2").removeClass("blurBackground");
  }
  onClickedOutside(e: Event) {
    // console.log('Clicked outside:', e);
    this.slideMenuOut();
    this.removeBlur();
  }
  // sets title based on what was just clicked
  setTitleTo(e)
  {
    var target = e.target || e.srcElement || e.currentTarget;
    var idAttr = target.attributes;
    var title = target.innerText;
    this.pageTitle= title;
    this.clearHighlight();
    var targetID = target.id;
    this.setHighlight(targetID);
  }
  clearHighlight()
  {
    $("#men1 ,#men2 ,#men3").removeClass("active");
  }
  setHighlight(target)
  {
    $("#"+target).addClass("active");
  }
  subMenuSwitch(x)
  {
    // x is whatever was clicked. it then changes the value depending on which click.
    this.subMenus = x;
  }
  // to find the id of element for the auto scroll
  toElement(elem)
  {
    document.getElementById(elem).scrollIntoView();
  }
  onActivate(event)
  {
    window.scroll(0,0);
    //or document.body.scrollTop = 0;
    //or document.querySelector('body').scrollTo(0,0)
    this.ngOnInit();
  }

  prepareRoute(outlet)
  {
    return outlet.activatedRouteData['depth'];
  }
}

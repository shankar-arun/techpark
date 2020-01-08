import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() {
}
status: boolean = false;
  ngOnInit() {
        

       var myIndex = 0;
        carousel();
        function carousel() {
            var i;
            var x = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;
            for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";
            }
            myIndex++;
            if (myIndex > x.length) {
                myIndex = 1;
            }
            x[myIndex - 1].style.display = "block";
            setTimeout(carousel, 4000);
        }
        
  }
  
        public open(event, item)
        {
          this.status = !this.status;
          
        }
  

}

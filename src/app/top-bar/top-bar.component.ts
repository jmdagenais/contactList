import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'top-bar',
  templateUrl: './top-bar.component.html'
})
export class TopBarComponent implements OnInit {
  filter: string = '';

  categories: Array<string> = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  constructor(private route: ActivatedRoute){}

  ngOnInit() {
    this.route.queryParams
      .subscribe((params: Params) => {
        this.filter = params['filter'] ? params['filter'].toUpperCase() : '';
      });
  }
}

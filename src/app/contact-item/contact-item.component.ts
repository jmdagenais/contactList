import {Component, OnInit, Input, HostListener} from '@angular/core';
import {Contact} from '../shared/contact';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.sass']
})
export class ContactItemComponent implements OnInit {
  @Input() contact: Contact;

  pencilVisible: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  @HostListener('mouseover')
  mouseover() {
    this.pencilVisible = true;
  }

  @HostListener('mouseout')
  mouseout() {
    this.pencilVisible = false;
  }

}

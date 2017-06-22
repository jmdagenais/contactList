import {Component, OnInit} from "@angular/core";
import {Contact} from "../shared/contact";
import {ContactServcice} from '../shared/contact.service';

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.sass']
})
export class ContactListComponent implements OnInit {

  contacts: Array<Contact>;

  constructor(private contactService: ContactServcice) {  }

  ngOnInit() {
    this.contactService.listContacts()
      .then((data: Contact[]) => {
        this.contacts = data;
      });
  }

}

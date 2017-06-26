import {Component, OnInit} from "@angular/core";
import {Contact} from "../shared/contact";
import {ContactServcice} from '../shared/contact.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.sass']
})
export class ContactListComponent implements OnInit {

  contacts: Array<Contact>;
  source: Array<Contact>;

  constructor(
    private contactService: ContactServcice,
    private route: ActivatedRoute) {  }

  ngOnInit() {
    this.contactService.listContacts()
      .then((data: Contact[]) => {
        this.contacts = data;
        this.route.queryParams
          .subscribe((params: Params) => {
            let filter = params['filter'] ? params['filter'].toUpperCase() : '';
            this.source = this.contacts.filter((contact: Contact) => {
              return filter === '' ? true : contact.name.charAt(0) == filter;
            })
          });

    });
  }

}

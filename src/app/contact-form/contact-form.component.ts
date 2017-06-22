import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {ActivatedRoute, Data, Params, Router} from '@angular/router';
// import {FormGroup, FormBuilder} from "@angular/forms";

import {Contact} from '../shared/contact';
import {FORM_MODE} from '../shared/constants';
import {ContactServcice} from '../shared/contact.service';

@Component({
  selector: 'contact-edit',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.sass']
})
export class ContactFormComponent implements OnInit {
  mode: string;
  contact: Contact;
  inEdition: boolean = false;
  // contactForm: FormGroup;
  // @Output() completed: EventEmitter<any> = new EventEmitter();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contactService: ContactServcice
  ) {

  }

  ngOnInit() {
    this.mode = this.route.snapshot.data['mode'];
    if (this.mode === FORM_MODE.EDIT) {
      this.inEdition = true;
      this.route.params
        .subscribe((params: Params) => {
          this.contact = this.contactService.getContact(+params['id']);
        });
    } else {
      this.contact = new Contact();
      this.inEdition = false;
    }
  }

  onSubmit() {
    if (this.inEdition) {
      this.contactService.updateContact(this.contact)
        .then((data) => {
          this.router.navigate(['/']);
        })
    } else {
      this.contactService.createContact(this.contact)
        .then((data) => {
          this.router.navigate(['/']);
        })
    }
  }


}

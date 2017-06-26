import {Injectable} from '@angular/core';
import {BackandService} from '@backand/angular2-sdk';
import {Contact} from './contact';

@Injectable()
export class ContactServcice {
  contacts: Array<Contact>;

  constructor(private backand: BackandService) {
    backand.init({
      appName: 'jmdcontact',
      anonymousToken: 'cfb01242-bb2c-4272-b73c-0dec947a3483'
    });
  }

  listContacts(): Promise<Contact[]> {
    return this.backand.object.getList('contacts', { pageSize: 1000 })
      .then((data) => {
        this.contacts = data.data;
        return this.contacts;
      })
  }

  getContact(id: number): Contact {
    return this.contacts.find((contact: Contact) => {
      return contact.id === id;
    })
  }

  updateContact(contact: Contact): Promise<Contact> {
    return this.backand.object.update('contacts', contact.id, contact, this.getOptions())
      .then((data: any) => {
        return data.data;
      })
  }

  createContact(contact: Contact): Promise<Contact> {
    return this.backand.object.create('contacts', contact, this.getOptions())
      .then((data: any) => {
        console.log(data);
        this.contacts.push(data.data);
        return data.data;
      })
  }

  deleteContact(contact: Contact) {
    return this.backand.object.remove('contacts', contact.id)
      .then((data: any) => {
        let idx: number = this.contacts.indexOf(contact);
        this.contacts.splice(idx, 1);
      })
  }

  private getOptions(): any {
    return {
      returnObject: true
    };
  }
}

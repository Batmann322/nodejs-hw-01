import * as fs from 'node:fs/promises';
import createFakeContact from '../utils/createFakeContact.js';
import getAllContacts from './getAllContacts.js';
import { PATH_DB } from '../constants/contacts.js';

export const addOneContact = async () => {
  const contactList = await getAllContacts();
  const newContsct = createFakeContact();
  contactList.push(newContsct);
  await fs.writeFile(PATH_DB, JSON.stringify(contactList, null, 2));
};

addOneContact();

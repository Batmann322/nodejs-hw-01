import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import createFakeContact from '../utils/createFakeContact.js';
import getAllContacts from './getAllContacts.js';

const generateContacts = async (number) => {
  const contactList = await getAllContacts();
  const newConactList = Array(number)
    .fill(0)
    .map(() => createFakeContact());
  contactList.push(...newConactList);
  await fs.writeFile(PATH_DB, JSON.stringify(contactList, null, 2));
};

generateContacts(5);

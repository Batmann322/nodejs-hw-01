import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeLastContact = async () => {
  const data = await fs.readFile(PATH_DB, 'utf8');
  const contacts = JSON.parse(data);
  contacts.pop();
  await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
};

removeLastContact();

import { promises as fs } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const contactsPath = join(__dirname, 'db', 'contacts.json');

async function listContacts() {
    try {
        const data = await fs.readFile(contactsPath);
        const contacts = JSON.parse(data);
        return [...contacts];
    } catch (error) {
        console.error('Error reading file contacts.json');
        return [];
    }
}

async function getContactById(contactId) {
  // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
}

async function removeContact(contactId) {
  // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
}

async function addContact(name, email, phone) {
  // ...твій код. Повертає об'єкт доданого контакту (з id).
}


export { listContacts, getContactById, removeContact, addContact };
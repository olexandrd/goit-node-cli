import { promises as fs } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { hexoid } from "hexoid";

// Don't work if run from another directory
// const contactsPath = join(process.cwd(), "src", "db", "contacts.json");

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const contactsPath = join(__dirname, "db", "contacts.json");

async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data);
    return [...contacts];
  } catch (error) {
    console.error("Error reading file contacts.json");
    return [];
  }
}

async function getContactById(contactId) {
  try {
    const contacts = await listContacts();
    const contact = contacts.find(({ id }) => id === contactId);
    return contact;
  } catch (error) {
    console.error("Error reading file contacts.json");
    return null;
  }
}

async function removeContact(contactId) {
  try {
    const contacts = await listContacts();
    const idx = contacts.findIndex(({ id }) => id === contactId);
    if (idx === -1) {
      return null;
    }
    const [contact] = contacts.splice(idx, 1);
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    return contact;
  } catch (error) {
    console.error("Error writing file contacts.json");
    return null;
  }
}

async function addContact(name, email, phone) {
  try {
    const contacts = await listContacts();
    const id = hexoid();
    const newContact = { id: id(), name, email, phone };
    contacts.push(newContact);
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    return newContact;
  } catch (error) {
    console.error("Error writing file contacts.json");
    return null;
  }
}

export { listContacts, getContactById, removeContact, addContact };

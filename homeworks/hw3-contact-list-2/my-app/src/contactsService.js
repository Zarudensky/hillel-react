const URL = 'https://5ee7807effee0c0016a12329.mockapi.io/contacts';

function getContacts() {
	return fetch(URL).then((res) => res.json());
}

function addContact(contact) {
	return fetch(URL, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(contact),
	}).then((res) => res.json());
}

function updateContact(contact) {
	return fetch(URL + '/' + contact.id, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(contact),
	}).then((res) => res.json());
}

function deleteContact(id) {
	return fetch(URL + '/' + id, {
		method: 'DELETE',
	}).then((res) => res.json());
}

export default {
	getContacts,
	addContact,
	updateContact,
	deleteContact,
};
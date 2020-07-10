import {
	ACTION_DELETE,
	ACTION_OPEN_MODAL,
	ACTION_CLOSE_MODAL,
	ACTION_CHANGE_FORM_ITEM,
	ACTION_SET_CONTACTS,
	ACTION_UPDATE_ITEM,
	ACTION_CREATE_ITEM,
} from '../actions/contacts';

const initialState = {
	contacts: [],
	formItem: null,
};

function getEmptyItem() {
	return { name: '', surname: '', phone: '' };
}

function updateContact(contacts, contact) {
	return contacts.map((item) => (item.id === contact.id ? contact : item));
}

function createContact(contacts, contact) {
	return [...contacts, contact];
}

export default function (state = initialState, { type, payload }) {
	switch (type) {
		case ACTION_SET_CONTACTS:
			return { ...state, contacts: payload };
		case ACTION_DELETE:
			return {
				...state,
				contacts: state.contacts.filter((item) => item.id !== payload),
			};
		case ACTION_OPEN_MODAL:
			return {
				...state,
				formItem: payload
				? state.contacts.find((item) => item.id === payload)
				: getEmptyItem(),
			};
		case ACTION_CLOSE_MODAL:
			return {
				...state,
				formItem: null,
			};
		case ACTION_CHANGE_FORM_ITEM:
			return {
				...state,
				formItem: { ...state.formItem, ...payload },
			};
		case ACTION_UPDATE_ITEM:
			return {
				...state,
				contacts: updateContact(state.contacts, payload),
			};
		case ACTION_CREATE_ITEM:
			return {
				...state,
				contacts: createContact(state.contacts, payload),
			};
		default:
			return state;
	}
}

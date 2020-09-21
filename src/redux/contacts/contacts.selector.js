import { createSelector } from "reselect";
import { GENDER } from "../../constants/gender";
import { NATIONALITIES } from "../../constants/nationalities";
import { isEmpty } from '../../utils/isObjEmpty';
import { deleteKeyFromObj } from '../../utils/deleteKeyFromObj';

const getContacts = (state) => state.contacts.contacts;

const getVisibilityFilter = (state) => state.contacts.visibilityFilter;

export const selectContacts = createSelector(
    [getContacts],
    (contacts) => contacts
);

export const filterAllContacts = (filter, contacts) => {
    let contactsArr = [];
    let filteredFilter = deleteKeyFromObj(filter, 'fullName');

    if (filter.hasOwnProperty('fullName')) {
        contactsArr = contacts.filter(contact => contact.fullName.includes(filter.fullName));
    } else {
        contactsArr = contacts;
    }

    return contactsArr.filter((contact) => {
        return Object.keys(filteredFilter).every(key =>
            contact[key] === filteredFilter[key])
    })
}

export const selectVisibleContacts = createSelector(
    [getVisibilityFilter, selectContacts],
    (visibilityFilter, contacts) => {
        if (isEmpty(visibilityFilter)) {
            return contacts;
        } else {
            return filterAllContacts(visibilityFilter, contacts)
        }
    }
);

const genderStatistics = {};
const calculateStatistics = (data, statisticData) => {
    Object.entries(statisticData).forEach(([key, value]) => {
        const result = data.filter((contact) => contact.gender === value);
        genderStatistics[value] = result.length;
    });
};

const nationStatistics = {};
const calculateNationalities = (data, statisticData) => {
    Object.entries(statisticData).forEach(([key, value]) => {
        const result = data.filter((contact) => contact.nat === key);
        nationStatistics[value.name] = result.length;
    });
};

export const selectStatistics = createSelector([getContacts], (contacts) => {
    if (contacts) {
        calculateStatistics(contacts, GENDER);
        calculateNationalities(contacts, NATIONALITIES);
        return {
            size: contacts.length,
            gender: genderStatistics,
            nat: nationStatistics,
        };
    }
});

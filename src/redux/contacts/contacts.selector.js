import { createSelector } from 'reselect';
import { GENDER } from '../../constants/gender';
import { NATIONALITIES } from '../../constants/nationalities';

const getContacts = (state) => state.contacts.contacts;

export const selectContacts = createSelector([getContacts], contacts => contacts.results);

const genderStatistics = {};
const calculateStatistics = (data, statisticData) => {
    Object.entries(statisticData).forEach(([key, value]) => {
        const result = data.filter(contact => contact.gender === value);
        genderStatistics[value] = result.length;
    })
};

const nationStatistics = {};
const calculateNationalities = (data, statisticData) => {
    Object.entries(statisticData).forEach(([key, value]) => {
        const result = data.filter(contact => contact.nat === key);
        nationStatistics[value.name] = result.length;
    })
};


export const selectStatistics = createSelector([getContacts], contacts => {
    calculateStatistics(contacts.results, GENDER);
    calculateNationalities(contacts.results, NATIONALITIES);

    // const male = contacts.results.filter(contact => contact.gender === 'male');
    return { size: contacts.results.length, gender: genderStatistics, nat: nationStatistics }
})
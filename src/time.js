import moment from 'moment';
/**
 * sorts the order of an object array by date
 * '2044-02-16T09:30:21-05:00'
 * @param {Array} arr - array of ojects
 * @param {String} prop - the property containing the date on the object
 * @param {Boolean} reverse - option to reverse the order
 * @returns {Array} - sorted array
 */
export const sortObjArrByDateTime = (arr, prop, reverse) => {

    return arr.sort((a, b) => {

        let comparison = 0;

        if (moment(a[prop]).isAfter(b[prop])) {
            comparison = reverse ? -1 : 1;
        } else if (moment(b[prop]).isAfter(a[prop])) {
            comparison = reverse ? 1 : -1;
        }
        return comparison;
    });
};

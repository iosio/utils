/**
 * provides a unix time stamp number
 * @returns {number} - unix time stamp
 */
export const getUnixTimeStampNow = ()=> Math.round(+new Date()/1000);
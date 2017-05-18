import moment from 'moment';

const DEPRECATION_MESSAGE = 'isSameUser and isSameDay should be imported from the utils module instead of using the props functions';

export function isSameDay(currentMessage = {}, diffMessage = {}) {

  // let currentCreatedAt = moment(currentMessage.createdAt);
  // let diffCreatedAt = moment(diffMessage.createdAt);

  // if (!currentCreatedAt.isValid() || !diffCreatedAt.isValid()) {
  //   return false;
  // }

  // return currentCreatedAt.isSame(diffCreatedAt, 'day') && currentCreatedAt.isSame(diffCreatedAt, 'hour') && currentCreatedAt.isSame(diffCreatedAt, 'minutes');
  return Math.floor(currentMessage.createdAt/(1000*60)) == Math.floor(diffMessage.createdAt/(1000*60))
}

export function isSameUser(currentMessage = {}, diffMessage = {}) {

  return !!(diffMessage.user && currentMessage.user && diffMessage.user._id === currentMessage.user._id);

}

export function warnDeprecated(fn) {

  return (...args) => {
    console.warn(DEPRECATION_MESSAGE);
    return fn(...args);
  };

}

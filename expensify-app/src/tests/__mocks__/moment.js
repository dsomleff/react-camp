/**
 * Mocking moment library for testing.
 */
const moment = jest.requireActual('moment'); // Jest feature to mocking libraries.

export default (timestamp = 0) => {
  return moment(timestamp);
};

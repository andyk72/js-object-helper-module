/**
 * object-helper module
 * @public methods
 *  getItem(itemPath, object = {}, separator = PATH_SEPARATOR)
 *  setItem(itemPath, value, object = {}, separator = PATH_SEPARATOR)
 *  some(testFn, obj)
 */

const PATH_SEPARATOR = ".";

/**
 * Reads and returns the object's item identified by itemPath
 * @param {String} itemPath
 * @param {Object} object
 * @return {Mixed|null}
 *
 * @usage
 *  const obj = {
 *      user: {
 *          profile: {
 *              name: 'Andrea',
 *              birth: '2000-01-27',
 *          }
 *      },
 *      location: {
 *          name: 'Milano'
 *      }
 *  }
 *  const item = getItem('user', obj);
 *      {profile:{name:'Andrea', birth:'2000-01-27'}}
 *  const item = getItem('user.profile.name', obj);
 *      'Andrea'
 *  const item = getItem('location.name', obj);
 *      'Milano'
 */
const getItem = (itemPath, object = {}, separator = PATH_SEPARATOR) => {
  // get access keys as an array
  const itemAccessKeys = itemPath.split(separator);

  // extract first key
  const itemAccessKey = itemAccessKeys.shift();

  // read item with the exctracted key
  const readItem = object[itemAccessKey];

  // if it was the last key, return the item
  if (itemAccessKeys.length === 0) {
    return readItem;
    // if more keys are left to read, recurse
  } else {
    if (readItem) {
      return getItem(itemAccessKeys.join(separator), readItem);
    } else {
      return null;
    }
  }
};

/**
 * Sets the object's item value identified by itemPath to value
 * @param {String} itemPath
 * @param {Mixed} value
 * @param {Object} object
 *
 * @usage
 *  const obj = {
 *      user: {
 *          profile: {
 *              name: 'Andrea',
 *              birth: '2000-01-27',
 *          }
 *      },
 *      location: {
 *          name: 'Milano'
 *      }
 *  }
 *  setItem('user.profile.name', 'Marco')
 *  setItem('location.name', 'Genova')
 */
const setItem = (itemPath, value, object = {}, separator = PATH_SEPARATOR) => {
  // get access keys as an array
  const itemAccessKeys = itemPath.split(separator);

  // extract first key
  const itemAccessKey = itemAccessKeys.shift();

  // if it was the last key, set the value
  if (itemAccessKeys.length === 0) {
    object[itemAccessKey] = value;
    // if more keys are left, recurse
  } else {
    setItem(itemAccessKeys.join(separator), value, object[itemAccessKey]);
  }
};

/**
 * Returns if any of the obj's properties satisfies the testFn test
 * The test is not a deep one (only the first level properties are evaluated)
 * @param {Function} testFn
 *  Function against which each obj's property is evaluated
 *  Accepts two arguments, property name and property value
 * @param {Object} obj
 * @returns {Boolean}
 */
const some = (testFn, obj) => {
  var match = false;
  for (let prop in obj) {
    if (testFn(prop, obj[prop])) {
      match = true;
      break;
    }
  }
  return match;
};

module.exports = {
  getItem,
  setItem,
  some
};

// Code your solution here
const drivers = ['Driver 1', 'Driver 2', 'Driver 3'];
function findMatching(drivers, name) {
    return drivers.filter(driver => driver === name);
  }
  function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }
  function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.startsWith(letters));
  }
  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
  }
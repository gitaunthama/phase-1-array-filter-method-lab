const drivers = [
    [{
        "id": 1,
        "name": "Bobby",
        "gender": "Male"
      }, {
        "id": 2,
        "name": "Sammy",
        "gender": "Male"
      }, {
        "id": 3,
        "name": "Sally",
        "gender": "Female"
      }, {
        "id": 4,
        "name": "Annette",
        "gender": "Female"
      }, {
        "id": 5,
        "name": "Sarah ",
        "gender": "Female"
      },{
          "id": 5,
          "name": "Bobby",
          "gender": "Female"
        }
      

    ]]

function findMatching(drivers, name) {
  return drivers.filter(driver => 
    driver.toLowerCase() === name.toLowerCase());
}


function fuzzyMatch(drivers, letters) {
  return drivers.filter(driver => typeof driver === 'string' && driver.startsWith(letters));
}






function matchName(drivers, name) {
  return drivers.filter(driver => driver.name === name);
}


 
  


document.addEventListener('DOMContentLoaded', function() {
  checkBirthday();
});
  
// Fetch data from JSON file
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      const students = data.students;
      const birthdayPerson = students.find(student => student.birthday === todayDate);
      
function checkBirthday() {
  // Fetch today's date in dd-mm format
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const todayDate = `${dd}-${mm}`;

      if (birthdayPerson) {
        displayBirthdayMessage(birthdayPerson);
      } else {
        document.getElementById('birthdayMessage').innerHTML = 'No birthdays today.';
      }
    })
    .catch(error => console.error('Error fetching JSON:', error));
}

function displayBirthdayMessage(person) {
  const message = `Happy Birthday ${person.name} from Class ${person.class}, Section ${person.section}! 🎉🎂`;
  document.getElementById('birthdayMessage').innerHTML = message;
}

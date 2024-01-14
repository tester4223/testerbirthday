document.addEventListener('DOMContentLoaded', function () {
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      checkBirthdays(data);
    })
    .catch(error => console.error('Error fetching birthdays:', error));
});

function checkBirthdays(birthdayData) {
  const today = new Date();
  const todayString = `${today.getMonth() + 1}/${today.getDate()}`;

  const birthdayContainer = document.getElementById('birthdayContainer');

  birthdayData.forEach(person => {
    if (person.birthday === todayString) {
      const birthdayMessage = document.createElement('div');
      birthdayMessage.innerHTML = `
        <h2>Happy Birthday, ${person.name}!</h2>
        <img src="${person.photo}" alt="${person.name}'s photo" style="max-width: 100px; border-radius: 50%;">
        <p>Birthday: ${person.birthday}</p>
      `;
      birthdayContainer.appendChild(birthdayMessage);
    }
  });
}

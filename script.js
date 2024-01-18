document.addEventListener('DOMContentLoaded', function() {
    checkBirthday();
});

function checkBirthday() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const today = new Date();
            const todayFormatted = formatDate(today);

            data.students.forEach(student => {
                if (student.birthday === todayFormatted) {
                    displayBirthdayMessage(student);
                }
            });
        })
        .catch(error => console.error('Error fetching data:', error));
}

function formatDate(date) {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
}

function displayBirthdayMessage(student) {
    const birthdayMessageElement = document.getElementById('birthdayMessage');
    birthdayMessageElement.innerHTML = `Happy Birthday ${student.name} from Class ${student.class}, Section ${student.section}! 🎉🎂`;
}

document.addEventListener("DOMContentLoaded", function () {
    // Load JSON data
    fetch('data.json')
        .then(response => response.json())
        .then(data => checkBirthday(data))
        .catch(error => console.error('Error loading JSON:', error));

    function checkBirthday(data) {
        // Get current date
        const today = new Date();
        const todayFormatted = formatDate(today);

        // Check if any birthdays match today's date
        const matchingBirthdays = data.filter(person => person.birthday === todayFormatted);

        // Display birthday message
        const birthdayMessage = document.getElementById('birthdayMessage');

        if (matchingBirthdays.length > 0) {
            matchingBirthdays.forEach(person => {
                const message = `Happy Birthday ${person.name} (${person.class}-${person.section})! 🎉<br>
                                Birthday: ${formatDateFromString(person.birthday)}`;
                birthdayMessage.innerHTML += message;
            });
        } else {
            birthdayMessage.innerHTML = "No birthdays today. Check back tomorrow! :)";
        }
    }
// parth noob hain
    function formatDate(date) {
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        return `${day}-${month}`;
    }

    function formatDateFromString(dateString) {
        const [day, month] = dateString.split('-');
        return `${day}-${month}`;
    }
});

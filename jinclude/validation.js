function nextPage(pageId) {
    if (pageId === 'confirmationPage') {
        // Fill confirmation page with user input
        document.getElementById("confirmName").innerText = "Full Name: " + document.getElementById("name").value;
        document.getElementById("confirmDob").innerText = "Date of Birth: " + document.getElementById("dob").value;
        document.getElementById("confirmEmail").innerText = "Email: " + document.getElementById("email").value;
        document.getElementById("confirmPhone").innerText = "Phone Number: " + document.getElementById("phone").value;
        document.getElementById("confirmAddress").innerText = "Address: " + document.getElementById("address").value;
        document.getElementById("confirmCollege").innerText = "College: " + document.getElementById("college").value;
        document.getElementById("confirmCourse").innerText = "Course: " + document.getElementById("course").value;
    }

    // Hide all containers and show the specified container
    showContainer(pageId);
}

function validateForm(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let dob = document.getElementById("dob").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let address = document.getElementById("address").value;
    let college = document.getElementById("college").value;
    let course = document.getElementById("course").value;

    if (!name || !dob || !email || !phone || !address || !college || !course) {
        showErrorMessage("Please fill out all fields.");
        return false;
    }

    if (!validateEmail(email)) {
        showErrorMessage("Please enter a valid email address.");
        return false;
    }

    if (!validatePhone(phone)) {
        showErrorMessage("Please enter a valid phone number.");
        return false;
    }

    nextPage('confirmationPage');
    return true;
}

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}

function validatePhone(phone) {
    const re = /^[0-9]{10}$/;
    return re.test(String(phone));
}

function showErrorMessage(message) {
    alert(message);
}

function submitForm() {
    showContainer("successMessage");
}

function goBack(pageId) {
    showContainer(pageId);
}

function showContainer(pageId) {
    // Hide all containers
    document.querySelectorAll('.container').forEach(function(container) {
        container.classList.add('hidden');
    });
    // Show the specified container
    document.getElementById(pageId).classList.remove('hidden');
}

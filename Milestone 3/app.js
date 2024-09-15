var _a;
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    // Type Assertion
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var cityElement = document.getElementById('city');
    var summaryElement = document.getElementById('summary');
    var qualificationElement = document.getElementById('education'); // Updated to match the HTML ID
    var skillsElement = document.getElementById('skills');
    var experienceElement = document.getElementById('experience');
    var name = "", email = "", phone = "", city = "", summary = "", qualification = "", skills = "", experience = "";
    if (nameElement && emailElement && phoneElement && cityElement && summaryElement && qualificationElement && skillsElement && experienceElement) {
        name = nameElement.value;
        email = emailElement.value;
        phone = phoneElement.value;
        city = cityElement.value;
        summary = summaryElement.value;
        qualification = qualificationElement.value;
        skills = skillsElement.value;
        experience = experienceElement.value;
    }
    // Creating Resume Output
    var resumeOutput = "\n        <h2>Resume</h2>\n        <p><strong>Name:</strong> ".concat(name, " </p>\n        <p><strong>Email:</strong> ").concat(email, " </p>\n        <p><strong>Phone:</strong> ").concat(phone, " </p>\n        <p><strong>City:</strong> ").concat(city, " </p>\n        <p><strong>Summary:</strong> ").concat(summary, " </p>\n        <h3>Education</h3>\n        <p>").concat(qualification, "</p>\n        <h3>Skills</h3>\n        <p>").concat(skills, "</p>\n        <h3>Experience</h3>\n        <p>").concat(experience, "</p>\n    ");
    // Append the resume output to a container in your HTML
    var resumeOutputElement = document.getElementById('resumeOutput'); // Fixed typo in ID
    if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeOutput;
    }
});

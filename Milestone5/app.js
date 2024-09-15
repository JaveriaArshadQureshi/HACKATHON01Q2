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
    var usernameElement = document.getElementById('username');
    var name = "", email = "", phone = "", city = "", summary = "", qualification = "", skills = "", experience = "", username = "";
    if (nameElement && emailElement && phoneElement && cityElement && summaryElement && qualificationElement && skillsElement && experienceElement && usernameElement) {
        name = nameElement.value;
        email = emailElement.value;
        phone = phoneElement.value;
        city = cityElement.value;
        summary = summaryElement.value;
        qualification = qualificationElement.value;
        skills = skillsElement.value;
        experience = experienceElement.value;
        username = usernameElement.value;
        var uniquePath = "resume/".concat(username.replace(/\s+/g, '_'), "_cv.html");
        // Creating Resume Output
        var resumeOutput = "\n        <h2>Resume</h2>\n        <p><strong>Name:</strong>  <span id=\"edit-name\" class=\"editable\"> ".concat(name, " </span> </p>\n        <p><strong>Email:</strong> <span id=\"edit-email\" class=\"editable\"> ").concat(email, " </span></p>\n        <p><strong>Phone:</strong> <span id=\"edit-phone\" class=\"editable\"> ").concat(phone, " </span> </p>\n        <p><strong>City:</strong>  <span id=\"edit-city\" class=\"editable\">").concat(city, " </span></p>\n        <p><strong>Summary:</strong> <span id=\"edit-summary\" class=\"editable\">").concat(summary, " </span> </p>\n       \n        <h3>Education</h3>\n        <p id=\"edit-education\" class=\"editable\">").concat(qualification, "</p>\n        \n        <h3>Skills</h3>\n        <p id=\"edit-skills\" class=\"editable\">").concat(skills, "</p>\n        \n        <h3>Experience</h3>\n        <p id=\"edit-experience\" class=\"editable\">").concat(experience, "</p>\n    ");
        var downloadLink = document.createElement('a');
        downloadLink.href = 'data:text/html;charset=utf-8' + encodeURIComponent(resumeOutput);
        downloadLink.download = uniquePath;
        downloadLink.textContent = 'Download Unique Path Resume';
        // Append the resume output to a container in your HTML
        var resumeOutputElement = document.getElementById('resumeOutput'); // Fixed typo in ID
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            makeEditable();
            resumeOutputElement.appendChild(downloadLink);
        }
        else {
            console.error('The output element is missing.');
        }
    }
    else {
        console.error('One or more form elements are missing.');
    }
});
function makeEditable() {
    var editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(function (element) {
        element.addEventListener('click', function () {
            var _a;
            var currentElement = element;
            var currentValue = currentElement.textContent || "";
            // Replace Content 
            if (currentElement.tagName === "P" || currentElement.tagName === "SPAN") {
                var input_1 = document.createElement('input');
                input_1.type = 'text';
                input_1.value = currentValue;
                input_1.classList.add('editing-input');
                input_1.addEventListener('blur', function () {
                    currentElement.textContent = input_1.value;
                    currentElement.style.display = 'inline';
                    input_1.remove();
                });
                currentElement.style.display = 'none';
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
                input_1.focus();
            }
        });
    });
}
var shareableLink = document.getElementById("shareable-link");
shareableLink === null || shareableLink === void 0 ? void 0 : shareableLink.addEventListener("click", function () {
});
var downloadResume = document.getElementById("download-btn");
downloadResume === null || downloadResume === void 0 ? void 0 : downloadResume.addEventListener("click", function () {
    window.print();
});

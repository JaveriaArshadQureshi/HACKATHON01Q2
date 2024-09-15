document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    // Type Assertion
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const cityElement = document.getElementById('city') as HTMLInputElement;
    const summaryElement = document.getElementById('summary') as HTMLInputElement;
    const qualificationElement = document.getElementById('education') as HTMLInputElement; // Updated to match the HTML ID
    const skillsElement = document.getElementById('skills') as HTMLInputElement;
    const experienceElement = document.getElementById('experience') as HTMLInputElement;

    let name = "", email = "", phone = "", city = "", summary = "", qualification = "", skills = "", experience = "";

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
    const resumeOutput = `
        <h2>Resume</h2>
        <p><strong>Name:</strong> ${name} </p>
        <p><strong>Email:</strong> ${email} </p>
        <p><strong>Phone:</strong> ${phone} </p>
        <p><strong>City:</strong> ${city} </p>
        <p><strong>Summary:</strong> ${summary} </p>
        <h3>Education</h3>
        <p>${qualification}</p>
        <h3>Skills</h3>
        <p>${skills}</p>
        <h3>Experience</h3>
        <p>${experience}</p>
    `;

    // Append the resume output to a container in your HTML
    const resumeOutputElement = document.getElementById('resumeOutput'); // Fixed typo in ID
    if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeOutput;
    }
});

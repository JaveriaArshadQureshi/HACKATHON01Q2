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
    const usernameElement = document.getElementById('username') as HTMLInputElement;

    let name = "", email = "", phone = "", city = "", summary = "", qualification = "", skills = "", experience = "", username="";

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
       const uniquePath = `resume/${username.replace(/\s+/g,'_')}_cv.html`
    

    // Creating Resume Output
    const resumeOutput = `
        <h2>Resume</h2>
        <p><strong>Name:</strong>  <span id="edit-name" class="editable"> ${name} </span> </p>
        <p><strong>Email:</strong> <span id="edit-email" class="editable"> ${email} </span></p>
        <p><strong>Phone:</strong> <span id="edit-phone" class="editable"> ${phone} </span> </p>
        <p><strong>City:</strong>  <span id="edit-city" class="editable">${city} </span></p>
        <p><strong>Summary:</strong> <span id="edit-summary" class="editable">${summary} </span> </p>
       
        <h3>Education</h3>
        <p id="edit-education" class="editable">${qualification}</p>
        
        <h3>Skills</h3>
        <p id="edit-skills" class="editable">${skills}</p>
        
        <h3>Experience</h3>
        <p id="edit-experience" class="editable">${experience}</p>
    `;

    const downloadLink = document.createElement('a')
    downloadLink.href = 'data:text/html;charset=utf-8' + encodeURIComponent(resumeOutput)
    downloadLink.download = uniquePath;
    downloadLink.textContent = 'Download Unique Path Resume';

    // Append the resume output to a container in your HTML
    const resumeOutputElement = document.getElementById('resumeOutput'); // Fixed typo in ID
    if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeOutput;
        makeEditable();
    resumeOutputElement.appendChild(downloadLink)
    }
    else{
        console.error('The output element is missing.');
    }
 } else{
    console.error('One or more form elements are missing.');
}
});



function makeEditable(){
    const editableElements = document.querySelectorAll('.editable')
    editableElements.forEach(element =>{
        element.addEventListener('click', function(){
            const currentElement = element as HTMLElement;
            const currentValue = currentElement.textContent || "";

            // Replace Content 
            if(currentElement.tagName === "P" || currentElement.tagName === "SPAN"){
                const input = document.createElement('input')
                input.type = 'text'
                input.value = currentValue
                input.classList.add('editing-input')

                input.addEventListener('blur', function(){
                    currentElement.textContent = input.value;
                    currentElement.style.display = 'inline'
                    input.remove()
                })



                currentElement.style.display = 'none'
                currentElement.parentNode?.insertBefore(input, currentElement)
                input.focus()
            } 
        })

    })
}

const shareableLink = document.getElementById("shareable-link") as HTMLAnchorElement;
shareableLink?.addEventListener("click",()=>{

})

const downloadResume = document.getElementById("download-btn") as HTMLButtonElement;
downloadResume?.addEventListener("click",()=>{
    window.print()
})

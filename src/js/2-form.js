

const form = document.querySelector(".feedback-form");
const keyForLocalStorage = "feedback-form-state";



function checkInput(event) {
    
    event.preventDefault();
    
    const feedbackForm = {
        
        email: form.elements.email.value,
        message: form.elements.message.value,

    };
    
        localStorage.setItem(keyForLocalStorage, JSON.stringify(feedbackForm));
    
    }

function resetForm(event) {
    event.preventDefault();
    localStorage.removeItem(keyForLocalStorage)
    form.reset();
}

function fillAfterReload(event) {
    
    event.preventDefault();

    const dataInStorage = localStorage.getItem(keyForLocalStorage);
    const parsedData = JSON.parse(dataInStorage);
        
    form.elements.email.value = parsedData.email;
    form.elements.message.value = parsedData.message;

}


document.addEventListener("DOMContentLoaded", fillAfterReload);
form.addEventListener("input", checkInput);
form.addEventListener("submit", resetForm);

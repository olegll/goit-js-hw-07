const fieldEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');


fieldEl.addEventListener('input', () => { 
    const fieldValue = fieldEl.value.trim();
    
    if (fieldValue === '') {
        return spanEl.textContent ='Anonymous';
        
    } return spanEl.textContent = fieldValue;
    
});







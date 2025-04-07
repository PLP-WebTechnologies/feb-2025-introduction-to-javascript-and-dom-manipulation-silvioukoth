// script.js

// Change Text Content Dynamically
const changeTextButton = document.getElementById('changeTextButton');
const dynamicText = document.getElementById('dynamicText');

changeTextButton.addEventListener('click', () => {
    dynamicText.textContent = 'Text content has been changed!';
    dynamicText.style.color = 'red';
});

// Modify CSS Styles via JavaScript
const styleDiv = document.getElementById('styleDiv');
const changeStyleButton = document.getElementById('changeStyleButton');

changeStyleButton.addEventListener('click', () => {
    styleDiv.style.backgroundColor = 'lightblue';
    styleDiv.style.padding = '15px';
    styleDiv.style.borderRadius = '8px';
    styleDiv.style.color = 'darkblue';
});

// Add or Remove an Element
const addElementButton = document.getElementById('addElementButton');
const removeElementButton = document.getElementById('removeElementButton');
const elementContainer = document.getElementById('elementContainer');

addElementButton.addEventListener('click', () => {
    const newElement = document.createElement('div');
    newElement.id = 'addedElement';
    newElement.textContent = 'This element was added dynamically.';
    elementContainer.appendChild(newElement);
});

removeElementButton.addEventListener('click', () => {
    const addedElement = document.getElementById('addedElement');
    if (addedElement) {
        elementContainer.removeChild(addedElement);
    }
});
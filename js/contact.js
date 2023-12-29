var fields = {};

/* contact form ma bhako kura liyo */
document.addEventListener("DOMContentLoaded", function() {
    fields.fullname = document.getElementById('fullname');
    fields.subject = document.getElementById('subject');
    fields.comment = document.getElementById('comment');
})

/*khali chha ki chhaina bhaner check garne function */
function isNotEmpty(value) {
    if (value == null || typeof value == 'undefined') return false;
    return (value.length > 0);
}

// function isEmail(email) {
//     let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
//     return regex.test(String(email).toLowerCase());
// }

/* validation check garchha ani error msg dekhauxa */
function fieldValidation(field, validationFunction) {
    if (field == null) return false;

    let isFieldValid = validationFunction(field.value)
    if (!isFieldValid) {
        field.nextElementSibling.classList.remove('d-none')
    } else {
        field.nextElementSibling.classList.add('d-none')
    }

    return isFieldValid;
}

/*valid ho ki hoina bhanera check garxa */
function isValid() {
    var valid = true;

    valid &= fieldValidation(fields.fullname, isNotEmpty);
    valid &= fieldValidation(fields.subject, isNotEmpty);
    valid &= fieldValidation(fields.comment, isNotEmpty);

    return valid;
}


function submitform() {
    // if (isValid()) {
    //     window.location.href = `mailto:info@rmcnepal.com?subject=${encodeURIComponent(fields.subject.value)}&body=${encodeURIComponent(fields.fullname.value + '\n' + fields.comment.value)}`
    // } 
    if (isValid()) {
        var recipients = "info@rmcnepal.com, yash@rmcnepal.com"; // Add more email addresses separated by commas
        var subject = encodeURIComponent(fields.subject.value);
        var body = encodeURIComponent(fields.fullname.value + '\n' + fields.comment.value);

        window.location.href = `mailto:${recipients}?subject=${subject}&body=${body}`;
    } else {
        alert("error text")
    }
}

// console.log('ields', fields)
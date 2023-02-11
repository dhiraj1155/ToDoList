// exports is exporting the getDate function to app.js page where this module is called by app.js page

exports.getDate = function () {
    var today = new Date();

    var options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    }

    return today.toLocaleDateString("en-US", options) //The toLocaleDateString() method returns a string with a language-sensitive representation of the date portion of the specified date in the user agent's timezone.



}

exports.getDay = function() { 
    var today = new Date();

    var options = {
        weekday: 'long',

    }

    return today.toLocaleDateString("en-US", options) //The toLocaleDateString() method returns a string with a language-sensitive representation of the date portion of the specified date in the user agent's timezone.

}


console.log(module.exports)
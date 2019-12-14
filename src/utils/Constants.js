const APP_TYPE = 1;
const BRANCH = 1;
const AUTHORIZATION = ''
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];

class Constants {
    formatDate(input) {
        var datePart = input.match(/\d+/g),
            year = datePart[0],// get only two digits
            month = monthNames[(+datePart[1])],
            day = datePart[2];

        return day + '/' + month + '/' + year;
    }
}

export default Constants;
const months = {
    Jan: 'January',
    Feb: 'February',
    Mar: 'March',
    Apr: 'April',
    May: 'May',
    Jun: 'June',
    Jul: 'July',
    Aug: 'August',
    Sep: 'September',
    Oct: 'October',
    Nov: 'November',
    Dec: 'December'
}

const naturalDate = date => {
    const parts = date.split(' ')
    // parts -> [ 'Fri', 'Nov', '26', '1987', '00:00:00', 'GMT+0000', '(UTC)' ]
    return `${months[parts[1]]} ${parts[2]}, ${parts[3]}`
}
    
const dateOrNull = str => str === 'Invalid Date' ? null : naturalDate(str)

const numOrString = date => isNaN(Number(date)) ? date : Number(date) * 1000

const timestamp = datestring => {
    const date = new Date(numOrString(datestring))
    return {
        unix: date.valueOf() / 1000 || null,
        natural: dateOrNull(date.toString())
    }
}

module.exports = {
    timestamp,
    naturalDate
}
export const FormatDate = (date) => {
    var d = new Date(0)

    d.setUTCSeconds(date)

    return (
        (d.getDate() < 10 ? '0' + d.getDate() : d.getDate()) +
        '/' +
        (d.getMonth() < 10 ? '0' + d.getMonth() : d.getMonth()) +
        '/' +
        d.getFullYear()
    )
}

<<<<<<< HEAD
=======
export const FormatDistance = (distance) => {
    const formattedDistance = new Intl.NumberFormat('fr-FR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(distance.toFixed(2))

    return formattedDistance + ' Km'
}

>>>>>>> 7d8678aaec67156e82b10d165bc3b2e19947bc26
export default FormatDate

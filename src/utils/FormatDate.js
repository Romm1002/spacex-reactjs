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

export const FormatDistance = (distance) => {
    const formattedDistance = new Intl.NumberFormat('fr-FR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(distance.toFixed(2))

    return formattedDistance + ' Km'
}

export default FormatDate

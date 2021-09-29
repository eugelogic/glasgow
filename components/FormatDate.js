const FormatDate = ({ date }) => {

    const dateObject = new Date(date)

    const formattedDate = new Intl.DateTimeFormat("en-GB", {
        year: "numeric",
        month: "long",
        day: "2-digit"
    }).format(dateObject)

    return (
        formattedDate
    )
}

export default FormatDate
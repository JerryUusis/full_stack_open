const Notification = ({errorMessage}) => {
    if (errorMessage === null) {
        return null
    }

    return (
        <div className="error-message">
            <p>{errorMessage}</p>
        </div>
    )
}

export default Notification
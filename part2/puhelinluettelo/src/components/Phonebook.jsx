const Persons = ({ persons, filterPhonebook }) => {
    return (
        <>
            <h2>Numbers</h2>
            <ul>
                {persons.filter((person) => person.name.toLowerCase().includes(filterPhonebook.toLowerCase()))
                    .map((person) => {
                        return <li key={person.name}>{person.name} {person.number}</li>
                    })}
            </ul>
        </>

    )
}

export default Persons
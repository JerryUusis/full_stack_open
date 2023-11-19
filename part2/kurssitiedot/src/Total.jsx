const Total = ({ exerciseTotal }) => {

    const countTotal = exerciseTotal.reduce((accumulator, anonObject) =>
        accumulator + anonObject.exercises, 0)
    return (
        <p>Number of exercises {countTotal} </p>
    );
}

export default Total;
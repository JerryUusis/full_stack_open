const Total = ({ exerciseTotal }) => {

    const countTotal = exerciseTotal.reduce((accumulator, anonObject) =>
        accumulator + anonObject.exercises, 0)
    return (
        <strong>Total amount of exercises {countTotal} </strong>
    );
}

export default Total;
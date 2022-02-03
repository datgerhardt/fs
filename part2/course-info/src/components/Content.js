import Part from "./Part"

const Content = ({parts}) => {
    let arr = parts.map(x => x.exercises)
    let total = arr.reduce((previousValue, currentValue) => previousValue + currentValue)
    return(
        <>
            <ul >
                {parts.map(part => 
                    <Part key={part.id} part={part} />
                )}

            </ul>
            <h4>total of {total} exercises </h4>
        </>
    )
}

export default Content 
const FamilyMember = ({ name, age, hobbies }) => {
    let canVote;
    if (age > 18) {
        canVote = "Please go vote!"
    } else {
        canVote = <h3>You must be 18.</h3>
    }
    // let hobbies = ["Gardening", "Coding", "Drumming"]
    return (
        <div>
            <p>Learn some information about this person.</p>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Vote status: {canVote}</p>
            <p>Hobbies:</p>
            <ul>{hobbies.map(hobby => (
                <li>{hobby}</li>))}
            </ul>
        </div>
    )
    
}
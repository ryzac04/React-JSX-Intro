const App = () => (
    <div>
        <FamilyMember
            name="Ryan"
            age={32}
            hobbies={["Gardening", "Coding", "Drumming", "Cooking"]} />
        <FamilyMember
            name="Sammy"
            age={6}
            hobbies={["Barking", "Fetching", "Sniffing", "Belly Rubs"]} />
        <FamilyMember
            name="Gracie"
            age={10}
            hobbies={["Purring", "Pets", "Chasing Strings"]} />
    </div>
)

ReactDOM.render(<App />, document.getElementById("root"))
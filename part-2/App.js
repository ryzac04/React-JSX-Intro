const App = () => (
    <div>
        <Tweet
            username="username1"
            name="John Doe"
            date={new Date().toDateString()}
            message="Greetings from John Doe!" />
        <Tweet
            username="username2"
            name="Jane Doe"
            date={new Date().toDateString()}
            message="Greetings from Jane Doe!" />
        <Tweet
            username="username3"
            name="John Smith"
            date={new Date().toDateString()}
            message="Greetings from John Smith!" />
    </div>
)

ReactDOM.render(<App />, document.getElementById("root"))
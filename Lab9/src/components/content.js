function Content() {
    return (
        <div>
            {/* Ttitle */}
            <h1>Hello World!</h1>
            {/* get's  current date and time */}
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
}
export default Content;
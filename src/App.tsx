function App() {
    const demoUrl = "/src/Demos/";
    return (
        <div class="App" style={{ padding: "2rem", "text-align": "center" }}>
            <h1>Welcome to MyUI</h1>
            <p>The component demos have been rewritten using Web Components.</p>
            <p>
                You can view them here: <a href={demoUrl}>{demoUrl}</a>
            </p>
        </div>
    );
}

export default App;

const HooksLifecycle = () => {
    const [count, setCount] = React.useState(0);

    // Simulating componentDidMount
    React.useEffect(() => {
        console.log('useEffect (Mount): Component mounted');
    }, []); // Empty dependency array = runs once on mount

    // Simulating componentDidUpdate
    React.useEffect(() => {
        if (count > 0) {
            console.log('useEffect (Update): Count updated', count);
        }
    }, [count]); // Runs whenever count changes

    // Note: Unmounting cleanup will be shown in the next example

    return (
        <div className="p-4 border rounded-lg shadow-md">
            <h2 className="text-xl font-bold">Simulating Lifecycle with Hooks</h2>
            <p>Count: {count}</p>
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={() => setCount(count + 1)}
            >
                Increment
            </button>
            <p className="mt-2">Check the console for lifecycle logs.</p>
        </div>
    );
};
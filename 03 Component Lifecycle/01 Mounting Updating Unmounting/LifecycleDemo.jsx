const LifecycleDemo = class extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
        console.log('Constructor: Component is being initialized');
    }

    componentDidMount() {
        console.log('componentDidMount: Component is mounted');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate: Component updated', {
            prevState,
            currentState: this.state
        });
    }

    componentWillUnmount() {
        console.log('componentWillUnmount: Component is unmounting');
    }

    render() {
        return (
            <div className="p-4 border rounded-lg shadow-md">
                <h2 className="text-xl font-bold">Mounting, Updating, Unmounting</h2>
                <p>Count: {this.state.count}</p>
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    onClick={() => this.setState({ count: this.state.count + 1 })}
                >
                    Increment
                </button>
                <p className="mt-2">Check the console for lifecycle logs.</p>
            </div>
        );
    }
};
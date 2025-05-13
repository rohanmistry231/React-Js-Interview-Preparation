const ClassLifecycle = class extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: 'Initial Data' };
        console.log('constructor: Component initialized');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps: Before render');
        return null; // No state update needed
    }

    componentDidMount() {
        console.log('componentDidMount: Component mounted');
        setTimeout(() => {
            this.setState({ data: 'Updated Data' });
        }, 2000);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate: Should component update?', nextState);
        return true; // Allow update
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate: Before update', prevState);
        return { previousData: prevState.data };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate: Component updated', snapshot);
    }

    componentWillUnmount() {
        console.log('componentWillUnmount: Component unmounting');
    }

    render() {
        return (
            <div className="p-4 border rounded-lg shadow-md">
                <h2 className="text-xl font-bold">Lifecycle Methods (Class Component)</h2>
                <p>Data: {this.state.data}</p>
                <p className="mt-2">Check the console for lifecycle logs.</p>
            </div>
        );
    }
};
# React.js Interview Questions for AI/ML Roles

This README provides **170 React.js interview questions** tailored for AI/ML students preparing for technical interviews, focusing on React’s role in building dynamic and responsive web interfaces for AI/ML applications (e.g., dashboards, model deployment UIs, and data visualizations). The questions are categorized into **React Basics**, **Components**, **Hooks**, **State Management**, **Routing**, **Styling**, **Performance Optimization**, **Testing**, and **Integration with AI/ML**. Each category is divided into **Basic**, **Intermediate**, and **Advanced** levels, with practical code snippets using JSX, CDN-hosted React, and Tailwind CSS for styling. This resource supports candidates aiming for roles that combine front-end development with AI/ML workflows, such as creating interactive interfaces for model outputs or deploying ML models via web applications.

## React Basics

### Basic
1. **What is React.js, and why is it used in web development?**  
   React is a JavaScript library for building user interfaces using components.  
   ```html
   <div id="root"></div>
   <script src="https://cdn.jsdelivr.net/npm/react@18/umd/react.development.js"></script>
   <script src="https://cdn.jsdelivr.net/npm/react-dom@18/umd/react-dom.development.js"></script>
   <script src="https://cdn.jsdelivr.net/npm/babel@5.8.38/standalone/babel.min.js"></script>
   <script type="text/babel">
       const App = () => <h1>Hello, React!</h1>;
       ReactDOM.render(<App />, document.getElementById('root'));
   </script>
   ```

2. **What is JSX, and how does it work?**  
   JSX is a syntax extension for JavaScript, allowing HTML-like code in React.  
   ```html
   <div id="root"></div>
   <script type="text/babel">
       const element = <div className="text-blue-500">JSX Example</div>;
       ReactDOM.render(element, document.getElementById('root'));
   </script>
   ```

3. **How do you create a React component?**  
   Uses functions or classes.  
   ```html
   <div id="root"></div>
   <script type="text/babel">
       const MyComponent = () => <p className="text-lg">Component</p>;
       ReactDOM.render(<MyComponent />, document.getElementById('root'));
   </script>
   ```

4. **What is the difference between functional and class components?**  
   Functional uses functions, class uses ES6 classes.  
   ```html
   <div id="root"></div>
   <script type="text/babel">
       const Functional = () => <p>Functional</p>;
       class Class extends React.Component {
           render() { return <p>Class</p>; }
       }
       ReactDOM.render(<div><Functional /><Class /></div>, document.getElementById('root'));
   </script>
   ```

5. **How do you render a React component?**  
   Uses `ReactDOM.render`.  
   ```html
   <div id="root"></div>
   <script type="text/babel">
       const App = () => <h1>Render Example</h1>;
       ReactDOM.render(<App />, document.getElementById('root'));
   </script>
   ```

6. **How do you visualize React rendering?**  
   Plots render times (mock).  
   ```python
   import matplotlib.pyplot as plt
   def plot_react_render_times(times):
       plt.plot(times, 'o-', label='Render Time')
       plt.title('React Rendering Performance')
       plt.savefig('react_render_times.png')
   ```

#### Intermediate
7. **Write a function to conditionally render components.**  
   Uses ternary operators.  
   ```html
   <div id="root"></div>
   <script type="text/babel">
       const Conditional = ({ isVisible }) => (
           <div className="p-4">
               {isVisible ? <p className="text-green-500">Visible</p> : <p className="text-red-500">Hidden</p>}
           </div>
       );
       ReactDOM.render(<Conditional isVisible={true} />, document.getElementById('root'));
   </script>
   ```

8. **How do you handle events in React?**  
   Uses event handlers.  
   ```html
   <div id="root"></div>
   <script type="text/babel">
       const Button = () => {
           const handleClick = () => alert('Clicked!');
           return <button className="bg-blue-500 text-white p-2" onClick={handleClick}>Click Me</button>;
       };
       ReactDOM.render(<Button />, document.getElementById('root'));
   </script>
   ```

9. **Write a function to update component props.**  
   Passes dynamic props.  
   ```html
   <div id="root"></div>
   <script type="text/babel">
       const Display = ({ text }) => <p className="text-lg">{text}</p>;
       const App = () => {
           const [text, setText] = React.useState('Initial');
           return (
               <div>
                   <Display text={text} />
                   <button className="bg-blue-500 text-white p-2" onClick={() => setText('Updated')}>
                       Update
                   </button>
               </div>
           );
       };
       ReactDOM.render(<App />, document.getElementById('root'));
   </script>
   ```

10. **How do you use React fragments?**  
    Wraps multiple elements without extra nodes.  
    ```html
    <div id="root"></div>
    <script type="text/babel">
        const List = () => (
            <>
                <li className="text-blue-500">Item 1</li>
                <li className="text-blue-500">Item 2</li>
            </>
        );
        ReactDOM.render(<List />, document.getElementById('root'));
    </script>
    ```

11. **Write a function to manage component lifecycle (mock).**  
    Simulates mounting/unmounting.  
    ```html
    <div id="root"></div>
    <script type="text/babel">
        const Lifecycle = () => {
            React.useEffect(() => {
                console.log('Mounted');
                return () => console.log('Unmounted');
            }, []);
            return <p className="text-lg">Lifecycle</p>;
        };
        ReactDOM.render(<Lifecycle />, document.getElementById('root'));
    </script>
    ```

12. **How do you pass props to child components?**  
    Uses props object.  
    ```html
    <div id="root"></div>
    <script type="text/babel">
        const Child = ({ name }) => <p className="text-blue-500">Hello, {name}</p>;
        const Parent = () => <Child name="React" />;
        ReactDOM.render(<Parent />, document.getElementById('root'));
    </script>
    ```

#### Advanced
13. **Write a function to optimize React rendering.**  
    Uses `React.memo`.  
    ```html
    <div id="root"></div>
    <script type="text/babel">
        const Memoized = React.memo(({ value }) => (
            <p className="text-lg">Value: {value}</p>
        ));
        const App = () => {
            const [count, setCount] = React.useState(0);
            return (
                <div>
                    <Memoized value={42} />
                    <button className="bg-blue-500 text-white p-2" onClick={() => setCount(count + 1)}>
                        Count: {count}
                    </button>
                </div>
            );
        };
        ReactDOM.render(<App />, document.getElementById('root'));
    </script>
    ```

14. **How do you handle errors in React components?**  
    Uses error boundaries.  
    ```html
    <div id="root"></div>
    <script type="text/babel">
        class ErrorBoundary extends React.Component {
            state = { hasError: false };
            static getDerivedStateFromError() {
                return { hasError: true };
            }
            render() {
                return this.state.hasError ? (
                    <p className="text-red-500">Error!</p>
                ) : (
                    this.props.children
                );
            }
        }
        const Buggy = () => { throw new Error('Crash!'); };
        ReactDOM.render(
            <ErrorBoundary><Buggy /></ErrorBoundary>,
            document.getElementById('root')
        );
    </script>
    ```

15. **Write a function to dynamically load components.**  
    Uses lazy loading.  
    ```html
    <div id="root"></div>
    <script type="text/babel">
        const LazyComponent = React.lazy(() =>
            Promise.resolve({ default: () => <p className="text-green-500">Lazy Loaded</p> })
        );
        const App = () => (
            <React.Suspense fallback={<p>Loading...</p>}>
                <LazyComponent />
            </React.Suspense>
        );
        ReactDOM.render(<App />, document.getElementById('root'));
    </script>
    ```

16. **How do you use React portals?**  
    Renders children outside DOM hierarchy.  
    ```html
    <div id="root"></div>
    <div id="portal"></div>
    <script type="text/babel">
        const Portal = () => {
            return ReactDOM.createPortal(
                <p className="text-blue-500">In Portal</p>,
                document.getElementById('portal')
            );
        };
        ReactDOM.render(<Portal />, document.getElementById('root'));
    </script>
    ```

17. **Write a function to measure React render time.**  
    Logs performance.  
    ```html
    <div id="root"></div>
    <script type="text/babel">
        const App = () => {
            const start = performance.now();
            const end = () => console.log(`Render time: ${performance.now() - start}ms`);
            React.useEffect(end, []);
            return <p className="text-lg">Performance</p>;
        };
        ReactDOM.render(<App />, document.getElementById('root'));
    </script>
    ```

18. **How do you use React context for global state?**  
    Shares data across components.  
    ```html
    <div id="root"></div>
    <script type="text/babel">
        const ThemeContext = React.createContext('light');
        const Display = () => (
            <ThemeContext.Consumer>
                {theme => <p className={theme === 'light' ? 'text-gray-800' : 'text-white'}>Theme: {theme}</p>}
            </ThemeContext.Consumer>
        );
        ReactDOM.render(
            <ThemeContext.Provider value="dark"><Display /></ThemeContext.Provider>,
            document.getElementById('root')
        );
    </script>
    ```

## Components

### Basic
19. **What is a React component?**  
   Reusable UI building block.  
   ```html
   <div id="root"></div>
   <script type="text/babel">
       const Card = () => <div className="bg-gray-100 p-4 rounded">Card</div>;
       ReactDOM.render(<Card />, document.getElementById('root'));
   </script>
   ```

20. **How do you create reusable components?**  
   Uses props for flexibility.  
   ```html
   <div id="root"></div>
   <script type="text/babel">
       const Button = ({ label }) => (
           <button className="bg-blue-500 text-white p-2 rounded">{label}</button>
       );
       ReactDOM.render(<Button label="Click Me" />, document.getElementById('root'));
   </script>
   ```

21. **What are props in React?**  
   Inputs to components.  
   ```html
   <div id="root"></div>
   <script type="text/babel">
       const Welcome = ({ name }) => <p className="text-lg">Hi, {name}</p>;
       ReactDOM.render(<Welcome name="User" />, document.getElementById('root'));
   </script>
   ```

22. **How do you use default props?**  
   Sets fallback values.  
   ```html
   <div id="root"></div>
   <script type="text/babel">
       const Greeting = ({ name }) => <p className="text-lg">Hello, {name}</p>;
       Greeting.defaultProps = { name: 'Guest' };
       ReactDOM.render(<Greeting />, document.getElementById('root'));
   </script>
   ```

23. **What is prop drilling?**  
   Passing props through multiple components.  
   ```html
   <div id="root"></div>
   <script type="text/babel">
       const Child = ({ data }) => <p className="text-lg">{data}</p>;
       const Parent = ({ data }) => <Child data={data} />;
       ReactDOM.render(<Parent data="Drilled" />, document.getElementById('root'));
   </script>
   ```

24. **How do you visualize component hierarchy?**  
   Plots component depth.  
   ```python
   import matplotlib.pyplot as plt
   def plot_component_hierarchy(depths):
       plt.bar(range(len(depths)), depths, label='Depth')
       plt.title('Component Hierarchy')
       plt.savefig('component_hierarchy.png')
   ```

#### Intermediate
25. **Write a function to compose components.**  
   Combines multiple components.  
   ```html
   <div id="root"></div>
   <script type="text/babel">
       const Header = () => <h1 className="text-2xl">Header</h1>;
       const Content = () => <p className="text-lg">Content</p>;
       const Composed = () => (
           <div className="p-4">
               <Header />
               <Content />
           </div>
       );
       ReactDOM.render(<Composed />, document.getElementById('root'));
   </script>
   ```

26. **How do you use higher-order components (HOCs)?**  
   Wraps components for reusability.  
   ```html
   <div id="root"></div>
   <script type="text/babel">
       const withStyle = Component => props => (
           <Component {...props} className="bg-blue-100 p-4" />
       );
       const Base = ({ className }) => <p className={className}>Styled</p>;
       const Styled = withStyle(Base);
       ReactDOM.render(<Styled />, document.getElementById('root'));
   </script>
   ```

27. **Write a function to validate component props.**  
   Uses PropTypes (mock).  
   ```html
   <div id="root"></div>
   <script type="text/babel">
       const User = ({ name }) => <p className="text-lg">{name}</p>;
       const validateProps = (component, props, required) => {
           return required.every(key => props[key]) ? component(props) : <p>Error</p>;
       };
       ReactDOM.render(
           validateProps(User, { name: 'Test' }, ['name']),
           document.getElementById('root')
       );
   </script>
   ```

28. **How do you use render props?**  
   Shares code via render functions.  
   ```html
   <div id="root"></div>
   <script type="text/babel">
       const DataProvider = ({ render }) => render('Data');
       const App = () => (
           <DataProvider render={data => <p className="text-lg">{data}</p>} />
       );
       ReactDOM.render(<App />, document.getElementById('root'));
   </script>
   ```

29. **Write a function to reuse component logic.**  
   Uses custom hooks (later).  
   ```html
   <div id="root"></div>
   <script type="text/babel">
       const useCustomLogic = () => React.useState('Initial');
       const Component = () => {
           const [value, setValue] = useCustomLogic();
           return <p className="text-lg">{value}</p>;
       };
       ReactDOM.render(<Component />, document.getElementById('root'));
   </script>
   ```

30. **How do you create controlled components?**  
   Manages form state.  
   ```html
   <div id="root"></div>
   <script type="text/babel">
       const Form = () => {
           const [value, setValue] = React.useState('');
           return (
               <input
                   className="border p-2"
                   value={value}
                   onChange={e => setValue(e.target.value)}
               />
           );
       };
       ReactDOM.render(<Form />, document.getElementById('root'));
   </script>
   ```

#### Advanced
31. **Write a function to create compound components.**  
   Shares implicit state.  
   ```html
   <div id="root"></div>
   <script type="text/babel">
       const ToggleContext = React.createContext();
       const Toggle = ({ children }) => {
           const [on, setOn] = React.useState(false);
           return (
               <ToggleContext.Provider value={{ on, toggle: () => setOn(!on) }}>
                   {children}
               </ToggleContext.Provider>
           );
       };
       Toggle.Button = () => (
           <ToggleContext.Consumer>
               {({ toggle }) => (
                   <button className="bg-blue-500 text-white p-2" onClick={toggle}>
                       Toggle
                   </button>
               )}
           </ToggleContext.Consumer>
       );
       Toggle.Display = () => (
           <ToggleContext.Consumer>
               {({ on }) => <p className="text-lg">{on ? 'On' : 'Off'}</p>}
           </ToggleContext.Consumer>
       );
       ReactDOM.render(
           <Toggle>
               <Toggle.Button />
               <Toggle.Display />
           </Toggle>,
           document.getElementById('root')
       );
   </script>
   ```

32. **How do you optimize component rendering?**  
   Uses `shouldComponentUpdate` (class) or `memo`.  
   ```html
   <div id="root"></div>
   <script type="text/babel">
       const Optimized = React.memo(({ value }) => (
           <p className="text-lg">Value: {value}</p>
       ));
       ReactDOM.render(<Optimized value={42} />, document.getElementById('root'));
   </script>
   ```

33. **Write a function to manage component composition.**  
   Dynamically composes components.  
   ```html
   <div id="root"></div>
   <script type="text/babel">
       const composeComponents = (components) => {
           const Composed = () => components.reduceRight(
               (child, Component) => <Component>{child}</Component>,
               <p className="text-lg">Core</p>
           );
           return <Composed />;
       };
       const Wrapper1 = ({ children }) => <div className="p-4">{children}</div>;
       const Wrapper2 = ({ children }) => <div className="bg-gray-100">{children}</div>;
       ReactDOM.render(
           composeComponents([Wrapper1, Wrapper2]),
           document.getElementById('root')
       );
   </script>
   ```

34. **How do you implement component lazy loading?**  
   Uses `React.lazy`.  
   ```html
   <div id="root"></div>
   <script type="text/babel">
       const Lazy = React.lazy(() =>
           Promise.resolve({ default: () => <p className="text-green-500">Lazy</p> })
       );
       ReactDOM.render(
           <React.Suspense fallback={<p>Loading...</p>}>
               <Lazy />
           </React.Suspense>,
           document.getElementById('root')
       );
   </script>
   ```

35. **Write a function to audit component props.**  
   Logs prop usage.  
   ```html
   <div id="root"></div>
   <script type="text/babel">
       const auditProps = (component, props) => {
           console.log('Props:', Object.keys(props));
           return component(props);
       };
       const Display = ({ name }) => <p className="text-lg">{name}</p>;
       ReactDOM.render(
           auditProps(Display, { name: 'Test' }),
           document.getElementById('root')
       );
   </script>
   ```

36. **How do you create accessible components?**  
   Uses ARIA attributes.  
   ```html
   <div id="root"></div>
   <script type="text/babel">
       const Button = () => (
           <button
               className="bg-blue-500 text-white p-2"
               aria-label="Submit form"
           >
               Submit
           </button>
       );
       ReactDOM.render(<Button />, document.getElementById('root'));
   </script>
   ```

## Hooks

### Basic
37. **What are React hooks?**  
   Functions to use state and lifecycle in functional components.  
   ```html
   <div id="root"></div>
   <script type="text/babel">
       const Counter = () => {
           const [count, setCount] = React.useState(0);
           return <p className="text-lg">Count: {count}</p>;
       };
       ReactDOM.render(<Counter />, document.getElementById('root'));
   </script>
   ```

38. **How do you use the `useState` hook?**  
   Manages component state.  
   ```html
   <div id="root"></div>
   <script type="text/babel">
       const App = () => {
           const [text, setText] = React.useState('');
           return (
               <input
                   className="border p-2"
                   value={text}
                   onChange={e => setText(e.target.value)}
               />
           );
       };
       ReactDOM.render(<App />, document.getElementById('root'));
   </script>
   ```

39. **What is the `useEffect` hook?**  
   Handles side effects.  
   ```html
   <div id="root"></div>
   <script type="text/babel">
       const Effect = () => {
           React.useEffect(() => {
               console.log('Effect ran');
           }, []);
           return <p className="text-lg">Effect</p>;
       };
       ReactDOM.render(<Effect />, document.getElementById('root'));
   </script>
   ```

40. **How do you use the `useContext` hook?**  
   Accesses context values.  
   ```html
   <div id="root"></div>
   <script type="text/babel">
       const ThemeContext = React.createContext('light');
       const Display = () => {
           const theme = React.useContext(ThemeContext);
           return <p className="text-lg">Theme: {theme}</p>;
       };
       ReactDOM.render(
           <ThemeContext.Provider value="dark"><Display /></ThemeContext.Provider>,
           document.getElementById('root')
       );
   </script>
   ```

41. **What is the `useRef` hook?**  
   Persists values across renders.  
   ```html
   <div id="root"></div>
   <script type="text/babel">
       const Input = () => {
           const inputRef = React.useRef(null);
           const focus = () => inputRef.current.focus();
           return (
               <div>
                   <input className="border p-2" ref={inputRef} />
                   <button className="bg-blue-500 text-white p-2" onClick={focus}>
                       Focus
                   </button>
               </div>
           );
       };
       ReactDOM.render(<Input />, document.getElementById('root'));
   </script>
   ```

42. **How do you visualize hook usage?**  
   Plots state updates.  
   ```python
   import matplotlib.pyplot as plt
   def plot_hook_usage(updates):
       plt.plot(updates, label='State Updates')
       plt.title('Hook Usage Metrics')
       plt.savefig('hook_usage.png')
   ```

#### Intermediate
43. **Write a custom hook for toggling state.**  
   Encapsulates toggle logic.  
   ```html
   <div id="root"></div>
   <script type="text/babel">
       const useToggle = (initial) => {
           const [value, setValue] = React.useState(initial);
           const toggle = () => setValue(!value);
           return [value, toggle];
       };
       const App = () => {
           const [isOn, toggle] = useToggle(false);
           return (
               <button
                   className="bg-blue-500 text-white p-2"
                   onClick={toggle}
               >
                   {isOn ? 'On' : 'Off'}
               </button>
           );
       };
       ReactDOM.render(<App />, document.getElementById('root'));
   </script>
   ```

44. **How do you use the `useReducer` hook?**  
   Manages complex state.  
   ```html
   <div id="root"></div>
   <script type="text/babel">
       const reducer = (state, action) => {
           switch (action.type) {
               case 'increment': return { count: state.count + 1 };
               default: return state;
           }
       };
       const Counter = () => {
           const [state, dispatch] = React.useReducer(reducer, { count: 0 });
           return (
               <button
                   className="bg-blue-500 text-white p-2"
                   onClick={() => dispatch({ type: 'increment' })}
               >
                   Count: {state.count}
               </button>
           );
       };
       ReactDOM.render(<Counter />, document.getElementById('root'));
   </script>
   ```

45. **Write a custom hook for window size.**  
   Tracks window dimensions.  
   ```html
   <div id="root"></div>
   <script type="text/babel">
       const useWindowSize = () => {
           const [size, setSize] = React.useState([window.innerWidth, window.innerHeight]);
           React.useEffect(() => {
               const handleResize = () => setSize([window.innerWidth, window.innerHeight]);
               window.addEventListener('resize', handleResize);
               return () => window.removeEventListener('resize', handleResize);
           }, []);
           return size;
       };
       const App = () => {
           const [width, height] = useWindowSize();
           return <p className="text-lg">Size: {width}x{height}</p>;
       };
       ReactDOM.render(<App />, document.getElementById('root'));
   </script>
   ```

46. **How do you use the `useMemo` hook?**  
   Caches expensive computations.  
   ```html
   <div id="root"></div>
   <script type="text/babel">
       const Compute = ({ value }) => {
           const computed = React.useMemo(() => value * 2, [value]);
           return <p className="text-lg">Computed: {computed}</p>;
       };
       ReactDOM.render(<Compute value={5} />, document.getElementById('root'));
   </script>
   ```

47. **Write a custom hook for fetching data.**  
   Manages API calls.  
   ```html
   <div id="root"></div>
   <script type="text/babel">
       const useFetch = (url) => {
           const [data, setData] = React.useState(null);
           React.useEffect(() => {
               fetch(url)
                   .then(res => res.json())
                   .then(setData);
           }, [url]);
           return data;
       };
       const App = () => {
           const data = useFetch('https://jsonplaceholder.typicode.com/posts/1');
           return <p className="text-lg">{data?.title || 'Loading...'}</p>;
       };
       ReactDOM.render(<App />, document.getElementById('root'));
   </script>
   ```

48. **How do you use the `useCallback` hook?**  
   Memoizes functions.  
   ```html
   <div id="root"></div>
   <script type="text/babel">
       const Button = React.memo(({ onClick }) => (
           <button className="bg-blue-500 text-white p-2" onClick={onClick}>
               Click
           </button>
       ));
       const App = () => {
           const [count, setCount] = React.useState(0);
           const handleClick = React.useCallback(() => setCount(count + 1), [count]);
           return <Button onClick={handleClick} />;
       };
       ReactDOM.render(<App />, document.getElementById('root'));
   </script>
   ```

#### Advanced
49. **Write a custom hook for debouncing input.**  
   Limits frequent updates.  
   ```html
   <div id="root"></div>
   <script type="text/babel">
       const useDebounce = (value, delay) => {
           const [debounced, setDebounced] = React.useState(value);
           React.useEffect(() => {
               const handler = setTimeout(() => setDebounced(value), delay);
               return () => clearTimeout(handler);
           }, [value, delay]);
           return debounced;
       };
       const Search = () => {
           const [query, setQuery] = React.useState('');
           const debouncedQuery = useDebounce(query, 500);
           return (
               <input
                   className="border p-2"
                   value={query}
                   onChange={e => setQuery(e.target.value)}
                   placeholder={debouncedQuery}
               />
           );
       };
       ReactDOM.render(<Search />, document.getElementById('root'));
   </script>
   ```

50. **How do you combine multiple hooks?**  
   Uses multiple hooks together.  
   ```html
   <div id="root"></div>
   <script type="text/babel">
       const App = () => {
           const [count, setCount] = React.useState(0);
           const memoizedCount = React.useMemo(() => count * 2, [count]);
           React.useEffect(() => {
               console.log('Updated:', memoizedCount);
           }, [memoizedCount]);
           return (
               <button
                   className="bg-blue-500 text-white p-2"
                   onClick={() => setCount(count + 1)}
               >
                   Count: {count}
               </button>
           );
       };
       ReactDOM.render(<App />, document.getElementById('root'));
   </script>
   ```

51. **Write a custom hook for local storage.**  
   Syncs state with storage.  
   ```html
   <div id="root"></div>
   <script type="text/babel">
       const useLocalStorage = (key, initial) => {
           const [value, setValue] = React.useState(
               () => JSON.parse(localStorage.getItem(key)) || initial
           );
           React.useEffect(() => {
               localStorage.setItem(key, JSON.stringify(value));
           }, [key, value]);
           return [value, setValue];
       };
       const App = () => {
           const [name, setName] = useLocalStorage('name', '');
           return (
               <input
                   className="border p-2"
                   value={name}
                   onChange={e => setName(e.target.value)}
               />
           );
       };
       ReactDOM.render(<App />, document.getElementById('root'));
   </script>
   ```

52. **How do you optimize hooks for performance?**  
   Minimizes dependencies.  
   ```html
   <div id="root"></div>
   <script type="text/babel">
       const App = () => {
           const [count, setCount] = React.useState(0);
           const logCount = React.useCallback(() => console.log(count), [count]);
           React.useEffect(() => {
               logCount();
           }, [logCount]);
           return (
               <button
                   className="bg-blue-500 text-white p-2"
                   onClick={() => setCount(count + 1)}
               >
                   Count: {count}
               </button>
           );
       };
       ReactDOM.render(<App />, document.getElementById('root'));
   </script>
   ```

53. **Write a custom hook for animation.**  
   Manages CSS animations.  
   ```html
   <div id="root"></div>
   <script type="text/babel">
       const useAnimation = (style) => {
           const ref = React.useRef(null);
           React.useEffect(() => {
               ref.current.style.transition = 'all 0.3s';
               Object.assign(ref.current.style, style);
           }, [style]);
           return ref;
       };
       const App = () => {
           const ref = useAnimation({ transform: 'translateX(100px)' });
           return <div ref={ref} className="bg-blue-500 w-20 h-20"></div>;
       };
       ReactDOM.render(<App />, document.getElementById('root'));
   </script>
   ```

54. **How do you test custom hooks?**  
   Uses mock rendering (conceptual).  
   ```html
   <div id="root"></div>
   <script type="text/babel">
       const useTestHook = () => React.useState(0);
       const Test = () => {
           const [value] = useTestHook();
           return <p className="text-lg">Value: {value}</p>;
       };
       ReactDOM.render(<Test />, document.getElementById('root'));
   </script>
   ```

## State Management

### Basic
55. **What is state in React?**  
   Data that changes over time.  
   ```html
   <div id="root"></div>
   <script type="text/babel">
       const Counter = () => {
           const [count, setCount] = React.useState(0);
           return (
               <button
                   className="bg-blue-500 text-white p-2"
                   onClick={() => setCount(count + 1)}
               >
                   Count: {count}
               </button>
           );
       };
       ReactDOM.render(<Counter />, document.getElementById('root'));
   </script>
   ```

56. **How do you manage state with `useState`?**  
   Updates component state.  
   ```html
   <div id="root"></div>
   <script type="text/babel">
       const Toggle = () => {
           const [isOn, setIsOn] = React.useState(false);
           return (
               <button
                   className="bg-blue-500 text-white p-2"
                   onClick={() => setIsOn(!isOn)}
               >
                   {isOn ? 'On' : 'Off'}
               </button>
           );
       };
       ReactDOM.render(<Toggle />, document.getElementById('root'));
   </script>
   ```

57. **What is the `useReducer` hook for state management?**  
   Handles complex state logic.  
   ```html
   <div id="root"></div>
   <script type="text/babel">
       const reducer = (state, action) => ({
           count: action.type === 'increment' ? state.count + 1 : state.count
       });
       const App = () => {
           const [state, dispatch] = React.useReducer(reducer, { count: 0 });
           return (
               <button
                   className="bg-blue-500 text-white p-2"
                   onClick={() => dispatch({ type: 'increment' })}
               >
                   Count: {state.count}
               </button>
           );
       };
       ReactDOM.render(<App />, document.getElementById('root'));
   </script>
   ```

58. **How do you use context for state?**  
   Shares state globally.  
   ```html
   <div id="root"></div>
   <script type="text/babel">
       const CountContext = React.createContext();
       const Display = () => (
           <CountContext.Consumer>
               {count => <p className="text-lg">Count: {count}</p>}
           </CountContext.Consumer>
       );
       ReactDOM.render(
           <CountContext.Provider value={5}><Display /></CountContext.Provider>,
           document.getElementById('root')
       );
   </script>
   ```

59. **What is lifting state up?**  
   Moves state to parent component.  
   ```html
   <div id="root"></div>
   <script type="text/babel">
       const Child = ({ onChange }) => (
           <input className="border p-2" onChange={e => onChange(e.target.value)} />
       );
       const Parent = () => {
           const [value, setValue] = React.useState('');
           return <Child onChange={setValue} />;
       };
       ReactDOM.render(<Parent />, document.getElementById('root'));
   </script>
   ```

60. **How do you visualize state changes?**  
   Plots state updates.  
   ```python
   import matplotlib.pyplot as plt
   def plot_state_changes(updates):
       plt.plot(updates, label='State Updates')
       plt.title('State Change Metrics')
       plt.savefig('state_changes.png')
   ```

#### Intermediate
61. **Write a function to manage global state with context.**  
   Uses context and hooks.  
   ```html
   <div id="root"></div>
   <script type="text/babel">
       const StateContext = React.createContext();
       const StateProvider = ({ children }) => {
           const [state, setState] = React.useState(0);
           return (
               <StateContext.Provider value={{ state, setState }}>
                   {children}
               </StateContext.Provider>
           );
       };
       const App = () => {
           const { state, setState } = React.useContext(StateContext);
           return (
               <button
                   className="bg-blue-500 text-white p-2"
                   onClick={() => setState(state + 1)}
               >
                   Count: {state}
               </button>
           );
       };
       ReactDOM.render(
           <StateProvider><App /></StateProvider>,
           document.getElementById('root')
       );
   </script>
   ```

62. **How do you use Redux for state management?**  
   Centralizes state (mock).  
   ```html
   <div id="root"></div>
   <script type="text/babel">
       const mockRedux = () => {
           const store = { count: 0 };
           const dispatch = (action) => {
               store.count += action.type === 'increment' ? 1 : 0;
           };
           return { store, dispatch };
       };
       const App = () => {
           const { store, dispatch } = mockRedux();
           return (
               <button
                   className="bg-blue-500 text-white p-2"
                   onClick={() => dispatch({ type: 'increment' })}
               >
                   Count: {store.count}
               </button>
           );
       };
       ReactDOM.render(<App />, document.getElementById('root'));
   </script>
   ```

63. **Write a function to sync state with local storage.**  
   Persists state.  
   ```html
   <div id="root"></div>
   <script type="text/babel">
       const usePersistentState = (key, initial) => {
           const [value, setValue] = React.useState(
               () => JSON.parse(localStorage.getItem(key)) || initial
           );
           React.useEffect(() => {
               localStorage.setItem(key, JSON.stringify(value));
           }, [key, value]);
           return [value, setValue];
       };
       const App = () => {
           const [count, setCount] = usePersistentState('count', 0);
           return (
               <button
                   className="bg-blue-500 text-white p-2"
                   onClick={() => setCount(count + 1)}
               >
                   Count: {count}
               </button>
           );
       };
       ReactDOM.render(<App />, document.getElementById('root'));
   </script>
   ```

64. **How do you manage state with `useReducer` and context?**  
   Combines for global state.  
   ```html
   <div id="root"></div>
   <script type="text/babel">
       const CountContext = React.createContext();
       const reducer = (state, action) => ({
           count: action.type === 'increment' ? state.count + 1 : state.count
       });
       const CountProvider = ({ children }) => {
           const [state, dispatch] = React.useReducer(reducer, { count: 0 });
           return (
               <CountContext.Provider value={{ state, dispatch }}>
                   {children}
               </CountContext.Provider>
           );
       };
       const App = () => {
           const { state, dispatch } = React.useContext(CountContext);
           return (
               <button
                   className="bg-blue-500 text-white p-2"
                   onClick={() => dispatch({ type: 'increment' })}
               >
                   Count: {state.count}
               </button>
           );
       };
       ReactDOM.render(
           <CountProvider><App /></CountProvider>,
           document.getElementById('root')
       );
   </script>
   ```

65. **Write a function to optimize state updates.**  
   Batches updates.  
   ```html
   <div id="root"></div>
   <script type="text/babel">
       const optimizeUpdates = (setState) => {
           let updates = [];
           return (update) => {
               updates.push(update);
               setTimeout(() => {
                   setState(updates.reduce((acc, val) => acc + val, 0));
                   updates = [];
               }, 0);
           };
       };
       const App = () => {
           const [count, setCount] = React.useState(0);
           const batchUpdate = optimizeUpdates(setCount);
           return (
               <button
                   className="bg-blue-500 text-white p-2"
                   onClick={() => batchUpdate(1)}
               >
                   Count: {count}
               </button>
           );
       };
       ReactDOM.render(<App />, document.getElementById('root'));
   </script>
   ```

66. **How do you handle asynchronous state updates?**  
   Uses async functions.  
   ```html
   <div id="root"></div>
   <script type="text/babel">
       const App = () => {
           const [data, setData] = React.useState(null);
           const fetchData = async () => {
               const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
               setData(await res.json());
           };
           return (
               <button
                   className="bg-blue-500 text-white p-2"
                   onClick={fetchData}
               >
                   {data ? data.title : 'Fetch'}
               </button>
           );
       };
       ReactDOM.render(<App />, document.getElementById('root'));
   </script>
   ```

#### Advanced
67. **Write a function to integrate Zustand for state.**  
   Mock global state management.  
   ```html
   <div id="root"></div>
   <script type="text/babel">
       const createStore = () => {
           let state = { count: 0 };
           const listeners = new Set();
           return {
               getState: () => state,
               setState: (newState) => {
                   state = { ...state, ...newState };
                   listeners.forEach(fn => fn());
               },
               subscribe: (fn) => {
                   listeners.add(fn);
                   return () => listeners.delete(fn);
               }
           };
       };
       const useStore = (store, selector) => {
           const [value, setValue] = React.useState(selector(store.getState()));
           React.useEffect(() => {
               const unsubscribe = store.subscribe(() => setValue(selector(store.getState())));
               return unsubscribe;
           }, [store, selector]);
           return value;
       };
       const store = createStore();
       const App = () => {
           const count = useStore(store, state => state.count);
           return (
               <button
                   className="bg-blue-500 text-white p-2"
                   onClick={() => store.setState({ count: count + 1 })}
               >
                   Count: {count}
               </button>
           );
       };
       ReactDOM.render(<App />, document.getElementById('root'));
   </script>
   ```

68. **How do you optimize state with immer?**  
   Simplifies immutable updates (mock).  
   ```html
   <div id="root"></div>
   <script type="text/babel">
       const produce = (state, fn) => fn({ ...state });
       const App = () => {
           const [state, setState] = React.useState({ count: 0 });
           const update = () => {
               setState(produce(state, draft => {
                   draft.count += 1;
               }));
           };
           return (
               <button
                   className="bg-blue-500 text-white p-2"
                   onClick={update}
               >
                   Count: {state.count}
               </button>
           );
       };
       ReactDOM.render(<App />, document.getElementById('root'));
   </script>
   ```

69. **Write a function to monitor state performance.**  
   Logs state update time.  
   ```html
   <div id="root"></div>
   <script type="text/babel">
       const App = () => {
           const [count, setCount] = React.useState(0);
           const update = () => {
               const start = performance.now();
               setCount(count + 1);
               console.log(`Update time: ${performance.now() - start}ms`);
           };
           return (
               <button
                   className="bg-blue-500 text-white p-2"
                   onClick={update}
               >
                   Count: {count}
               </button>
           );
       };
       ReactDOM.render(<App />, document.getElementById('root'));
   </script>
   ```

70. **How do you manage server state in React?**  
   Uses queries (mock).  
   ```html
   <div id="root"></div>
   <script type="text/babel">
       const useQuery = (key, fn) => {
           const [data, setData] = React.useState(null);
           React.useEffect(() => {
               fn().then(setData);
           }, [key, fn]);
           return data;
       };
       const App = () => {
           const data = useQuery('post', () =>
               fetch('https://jsonplaceholder.typicode.com/posts/1').then(res => res.json())
           );
           return <p className="text-lg">{data?.title || 'Loading...'}</p>;
       };
       ReactDOM.render(<App />, document.getElementById('root'));
   </script>
   ```

71. **Write a function to sync state across components.**  
   Uses context for synchronization.  
   ```html
   <div id="root"></div>
   <script type="text/babel">
       const SyncContext = React.createContext();
       const SyncProvider = ({ children }) => {
           const [value, setValue] = React.useState('');
           return (
               <SyncContext.Provider value={{ value, setValue }}>
                   {children}
               </SyncContext.Provider>
           );
       };
       const Input = () => {
           const { value, setValue } = React.useContext(SyncContext);
           return (
               <input
                   className="border p-2"
                   value={value}
                   onChange={e => setValue(e.target.value)}
               />
           );
       };
       ReactDOM.render(
           <SyncProvider><Input /><Input /></SyncProvider>,
           document.getElementById('root')
       );
   </script>
   ```

72. **How do you handle state in large applications?**  
   Uses modular state (mock).  
   ```html
   <div id="root"></div>
   <script type="text/babel">
       const createSlice = (initial) => {
           const listeners = new Set();
           let state = initial;
           return {
               getState: () => state,
               setState: (newState) => {
                   state = { ...state, ...newState };
                   listeners.forEach(fn => fn());
               },
               subscribe: (fn) => {
                   listeners.add(fn);
                   return () => listeners.delete(fn);
               }
           };
       };
       const counterSlice = createSlice({ count: 0 });
       const App = () => {
           const [count, setCount] = React.useState(counterSlice.getState().count);
           React.useEffect(() => {
               const unsubscribe = counterSlice.subscribe(() =>
                   setCount(counterSlice.getState().count)
               );
               return unsubscribe;
           }, []);
           return (
               <button
                   className="bg-blue-500 text-white p-2"
                   onClick={() => counterSlice.setState({ count: count + 1 })}
               >
                   Count: {count}
               </button>
           );
       };
       ReactDOM.render(<App />, document.getElementById('root'));
   </script>
   ```

## Routing

### Basic
73. **What is routing in React?**  
   Manages navigation between views.  
   ```html
   <div id="root"></div>
   <script src="https://cdn.jsdelivr.net/npm/react-router-dom@6/dist/umd/react-router-dom.development.js"></script>
   <script type="text/babel">
       const { BrowserRouter, Routes, Route } = ReactRouterDOM;
       const Home = () => <p className="text-lg">Home</p>;
       const App = () => (
           <BrowserRouter>
               <Routes>
                   <Route path="/" element={<Home />} />
               </Routes>
           </BrowserRouter>
       );
       ReactDOM.render(<App />, document.getElementById('root'));
   </script>
   ```

74. **How do you use React Router for navigation?**  
   Uses `Link` and `Route`.  
   ```html
   <div id="root"></div>
   <script src="https://cdn.jsdelivr.net/npm/react-router-dom@6/dist/umd/react-router-dom.development.js"></script>
   <script type="text/babel">
       const { BrowserRouter, Routes, Route, Link } = ReactRouterDOM;
       const Home = () => <p className="text-lg">Home</p>;
       const About = () => <p className="text-lg">About</p>;
       const App = () => (
           <BrowserRouter>
               <nav className="p-4">
                   <Link className="text-blue-500 mr-4" to="/">Home</Link>
                   <Link className="text-blue-500" to="/about">About</Link>
               </nav>
               <Routes>
                   <Route path="/" element={<Home />} />
                   <Route path="/about" element={<About />} />
               </Routes>
           </BrowserRouter>
       );
       ReactDOM.render(<App />, document.getElementById('root'));
   </script>
   ```

75. **How do you handle dynamic routing?**  
   Uses URL parameters.  
   ```html
   <div id="root"></div>
   <script src="https://cdn.jsdelivr.net/npm/react-router-dom@6/dist/umd/react-router-dom.development.js"></script>
   <script type="text/babel">
       const { BrowserRouter, Routes, Route, useParams } = ReactRouterDOM;
       const User = () => {
           const { id } = useParams();
           return <p className="text-lg">User: {id}</p>;
       };
       const App = () => (
           <BrowserRouter>
               <Routes>
                   <Route path="/user/:id" element={<User />} />
               </Routes>
           </BrowserRouter>
       );
       ReactDOM.render(<App />, document.getElementById('root'));
   </script>
   ```

76. **How do you use nested routes?**  
   Renders routes within components.  
   ```html
   <div id="root"></div>
   <script src="https://cdn.jsdelivr.net/npm/react-router-dom@6/dist/umd/react-router-dom.development.js"></script>
   <script type="text/babel">
       const { BrowserRouter, Routes, Route, Link, Outlet } = ReactRouterDOM;
       const Dashboard = () => (
           <div>
               <p className="text-lg">Dashboard</p>
               <Outlet />
           </div>
       );
       const Overview = () => <p className="text-lg">Overview</p>;
       const App = () => (
           <BrowserRouter>
               <Routes>
                   <Route path="/" element={<Dashboard />}>
                       <Route path="overview" element={<Overview />} />
                   </Route>
               </Routes>
           </BrowserRouter>
       );
       ReactDOM.render(<App />, document.getElementById('root'));
   </script>
   ```

77. **How do you redirect in React Router?**  
   Uses `Navigate`.  
   ```html
   <div id="root"></div>
   <script src="https://cdn.jsdelivr.net/npm/react-router-dom@6/dist/umd/react-router-dom.development.js"></script>
   <script type="text/babel">
       const { BrowserRouter, Routes, Route, Navigate } = ReactRouterDOM;
       const App = () => (
           <BrowserRouter>
               <Routes>
                   <Route path="/" element={<p className="text-lg">Home</p>} />
                   <Route path="/old" element={<Navigate to="/" />} />
               </Routes>
           </BrowserRouter>
       );
       ReactDOM.render(<App />, document.getElementById('root'));
   </script>
   ```

78. **How do you visualize routing performance?**  
   Plots navigation times.  
   ```python
   import matplotlib.pyplot as plt
   def plot_routing_performance(times):
       plt.plot(times, label='Navigation Time')
       plt.title('Routing Performance')
       plt.savefig('routing_performance.png')
   ```

#### Intermediate
79. **Write a function to manage route-based state.**  
   Syncs state with URL.  
   ```html
   <div id="root"></div>
   <script src="https://cdn.jsdelivr.net/npm/react-router-dom@6/dist/umd/react-router-dom.development.js"></script>
   <script type="text/babel">
       const { BrowserRouter, Routes, Route, useSearchParams } = ReactRouterDOM;
       const Search = () => {
           const [searchParams, setSearchParams] = useSearchParams();
           const query = searchParams.get('q') || '';
           return (
               <input
                   className="border p-2"
                   value={query}
                   onChange={e => setSearchParams({ q: e.target.value })}
               />
           );
       };
       const App = () => (
           <BrowserRouter>
               <Routes>
                   <Route path="/" element={<Search />} />
               </Routes>
           </BrowserRouter>
       );
       ReactDOM.render(<App />, document.getElementById('root'));
   </script>
   ```

80. **How do you protect routes in React?**  
   Uses conditional rendering.  
   ```html
   <div id="root"></div>
   <script src="https://cdn.jsdelivr.net/npm/react-router-dom@6/dist/umd/react-router-dom.development.js"></script>
   <script type="text/babel">
       const { BrowserRouter, Routes, Route, Navigate } = ReactRouterDOM;
       const Protected = ({ isAuth, children }) =>
           isAuth ? children : <Navigate to="/login" />;
       const Dashboard = () => <p className="text-lg">Dashboard</p>;
       const App = () => (
           <BrowserRouter>
               <Routes>
                   <Route
                       path="/dashboard"
                       element={<Protected isAuth={true}><Dashboard /></Protected>}
                   />
                   <Route path="/login" element={<p className="text-lg">Login</p>} />
               </Routes>
           </BrowserRouter>
       );
       ReactDOM.render(<App />, document.getElementById('root'));
   </script>
   ```

81. **Write a function to preload routes.**  
   Loads components dynamically.  
   ```html
   <div id="root"></div>
   <script src="https://cdn.jsdelivr.net/npm/react-router-dom@6/dist/umd/react-router-dom.development.js"></script>
   <script type="text/babel">
       const { BrowserRouter, Routes, Route } = ReactRouterDOM;
       const preloadRoute = (component) => {
           component();
           return component;
       };
       const Lazy = React.lazy(() =>
           Promise.resolve({ default: () => <p className="text-lg">Lazy</p> })
       );
       preloadRoute(Lazy);
       const App = () => (
           <BrowserRouter>
               <Routes>
                   <Route
                       path="/"
                       element={
                           <React.Suspense fallback={<p>Loading...</p>}>
                               <Lazy />
                           </React.Suspense>
                       }
                   />
               </Routes>
           </BrowserRouter>
       );
       ReactDOM.render(<App />, document.getElementById('root'));
   </script>
   ```

82. **How do you handle 404 routes?**  
   Uses catch-all route.  
   ```html
   <div id="root"></div>
   <script src="https://cdn.jsdelivr.net/npm/react-router-dom@6/dist/umd/react-router-dom.development.js"></script>
   <script type="text/babel">
       const { BrowserRouter, Routes, Route } = ReactRouterDOM;
       const App = () => (
           <BrowserRouter>
               <Routes>
                   <Route path="/" element={<p className="text-lg">Home</p>} />
                   <Route path="*" element={<p className="text-red-500">404</p>} />
               </Routes>
           </BrowserRouter>
       );
       ReactDOM.render(<App />, document.getElementById('root'));
   </script>
   ```

83. **Write a function to track route changes.**  
   Logs navigation.  
   ```html
   <div id="root"></div>
   <script src="https://cdn.jsdelivr.net/npm/react-router-dom@6/dist/umd/react-router-dom.development.js"></script>
   <script type="text/babel">
       const { BrowserRouter, Routes, Route, useLocation } = ReactRouterDOM;
       const Track = () => {
           const location = useLocation();
           React.useEffect(() => {
               console.log('Navigated to:', location.pathname);
           }, [location]);
           return <p className="text-lg">Track</p>;
       };
       const App = () => (
           <BrowserRouter>
               <Routes>
                   <Route path="/" element={<Track />} />
               </Routes>
           </BrowserRouter>
       );
       ReactDOM.render(<App />, document.getElementById('root'));
   </script>
   ```

84. **How do you use query parameters in routing?**  
   Reads URL queries.  
   ```html
   <div id="root"></div>
   <script src="https://cdn.jsdelivr.net/npm/react-router-dom@6/dist/umd/react-router-dom.development.js"></script>
   <script type="text/babel">
       const { BrowserRouter, Routes, Route, useSearchParams } = ReactRouterDOM;
       const Query = () => {
           const [searchParams] = useSearchParams();
           return <p className="text-lg">Query: {searchParams.get('q')}</p>;
       };
       const App = () => (
           <BrowserRouter>
               <Routes>
                   <Route path="/" element={<Query />} />
               </Routes>
           </BrowserRouter>
       );
       ReactDOM.render(<App />, document.getElementById('root'));
   </script>
   ```

#### Advanced
85. **Write a function to dynamically generate routes.**  
   Creates routes from data.  
   ```html
   <div id="root"></div>
   <script src="https://cdn.jsdelivr.net/npm/react-router-dom@6/dist/umd/react-router-dom.development.js"></script>
   <script type="text/babel">
       const { BrowserRouter, Routes, Route } = ReactRouterDOM;
       const generateRoutes = (routes) => (
           <Routes>
               {routes.map(({ path, Component }) => (
                   <Route key={path} path={path} element={<Component />} />
               ))}
           </Routes>
       );
       const Home = () => <p className="text-lg">Home</p>;
       const App = () => (
           <BrowserRouter>
               {generateRoutes([{ path: '/', Component: Home }])}
           </BrowserRouter>
       );
       ReactDOM.render(<App />, document.getElementById('root'));
   </script>
   ```

86. **How do you optimize routing performance?**  
   Uses lazy loading.  
   ```html
   <div id="root"></div>
   <script src="https://cdn.jsdelivr.net/npm/react-router-dom@6/dist/umd/react-router-dom.development.js"></script>
   <script type="text/babel">
       const { BrowserRouter, Routes, Route } = ReactRouterDOM;
       const Lazy = React.lazy(() =>
           Promise.resolve({ default: () => <p className="text-lg">Lazy</p> })
       );
       const App = () => (
           <BrowserRouter>
               <Routes>
                   <Route
                       path="/"
                       element={
                           <React.Suspense fallback={<p>Loading...</p>}>
                               <Lazy />
                           </React.Suspense>
                       }
                   />
               </Routes>
           </BrowserRouter>
       );
       ReactDOM.render(<App />, document.getElementById('root'));
   </script>
   ```

87. **Write a function to monitor routing performance.**  
   Logs navigation time.  
   ```html
   <div id="root"></div>
   <script src="https://cdn.jsdelivr.net/npm/react-router-dom@6/dist/umd/react-router-dom.development.js"></script>
   <script type="text/babel">
       const { BrowserRouter, Routes, Route, useLocation } = ReactRouterDOM;
       const Track = () => {
           const location = useLocation();
           React.useEffect(() => {
               const start = performance.now();
               console.log(`Nav time: ${performance.now() - start}ms`);
           }, [location]);
           return <p className="text-lg">Track</p>;
       };
       const App = () => (
           <BrowserRouter>
               <Routes>
                   <Route path="/" element={<Track />} />
               </Routes>
           </BrowserRouter>
       );
       ReactDOM.render(<App />, document.getElementById('root'));
   </script>
   ```

88. **How do you handle route-based animations?**  
   Uses CSS transitions.  
   ```html
   <div id="root"></div>
   <script src="https://cdn.jsdelivr.net/npm/react-router-dom@6/dist/umd/react-router-dom.development.js"></script>
   <script type="text/babel">
       const { BrowserRouter, Routes, Route } = ReactRouterDOM;
       const Page = () => (
           <div className="transition-opacity duration-300 opacity-100">
               <p className="text-lg">Page</p>
           </div>
       );
       const App = () => (
           <BrowserRouter>
               <Routes>
                   <Route path="/" element={<Page />} />
               </Routes>
           </BrowserRouter>
       );
       ReactDOM.render(<App />, document.getElementById('root'));
   </script>
   ```

89. **Write a function to audit route configurations.**  
   Checks route validity.  
   ```html
   <div id="root"></div>
   <script src="https://cdn.jsdelivr.net/npm/react-router-dom@6/dist/umd/react-router-dom.development.js"></script>
   <script type="text/babel">
       const auditRoutes = (routes) => {
           return routes.every(route => route.path && route.Component)
               ? 'Valid'
               : 'Invalid';
       };
       const Home = () => <p className="text-lg">Home</p>;
       console.log(auditRoutes([{ path: '/', Component: Home }]));
       const App = () => (
           <BrowserRouter>
               <Routes>
                   <Route path="/" element={<Home />} />
               </Routes>
           </BrowserRouter>
       );
       ReactDOM.render(<App />, document.getElementById('root'));
   </script>
   ```

90. **How do you implement code splitting with routing?**  
   Uses `React.lazy`.  
   ```html
   <div id="root"></div>
   <script src="https://cdn.jsdelivr.net/npm/react-router-dom@6/dist/umd/react-router-dom.development.js"></script>
   <script type="text/babel">
       const { BrowserRouter, Routes, Route } = ReactRouterDOM;
       const Lazy = React.lazy(() =>
           Promise.resolve({ default: () => <p className="text-lg">Lazy</p> })
       );
       const App = () => (
           <BrowserRouter>
               <Routes>
                   <Route
                       path="/"
                       element={
                           <React.Suspense fallback={<p>Loading...</p>}>
                               <Lazy />
                           </React.Suspense>
                       }
                   />
               </Routes>
           </BrowserRouter>
       );
       ReactDOM.render(<App />, document.getElementById('root'));
   </script>
   ```

## Styling

### Basic
91. **How do you style React components?**  
   Uses Tailwind CSS.  
   ```html
   <div id="root"></div>
   <script type="text/babel">
       const Styled = () => <div className="bg-blue-500 text-white p-4">Styled</div>;
       ReactDOM.render(<Styled />, document.getElementById('root'));
   </script>
   ```

92. **What is CSS-in-JS in React?**  
   Embeds styles in JavaScript (mock).  
   ```html
   <div id="root"></div>
   <script type="text/babel">
       const style = { background: 'blue', color: 'white', padding: '16px' };
       const Styled = () => <div style={style}>CSS-in-JS</div>;
       ReactDOM.render(<Styled />, document.getElementById('root'));
   </script>
   ```

93. **How do you use Tailwind CSS in React?**  
   Applies utility classes.  
   ```html
   <div id="root"></div>
   <script type="text/babel">
       const Card = () => (
           <div className="bg-gray-100 p-4 rounded shadow">
               <p className="text-lg">Tailwind Card</p>
           </div>
       );
       ReactDOM.render(<Card />, document.getElementById('root'));
   </script>
   ```

94. **How do you apply conditional styling?**  
   Uses dynamic classes.  
   ```html
   <div id="root"></div>
   <script type="text/babel">
       const Toggle = () => {
           const [isOn, setIsOn] = React.useState(false);
           return (
               <div className={isOn ? 'bg-green-500' : 'bg-red-500'} onClick={() => setIsOn(!isOn)}>
                   <p className="text-white p-4">{isOn ? 'On' : 'Off'}</p>
               </div>
           );
       };
       ReactDOM.render(<Toggle />, document.getElementById('root'));
   </script>
   ```

95. **How do you use inline styles in React?**  
   Applies styles via `style` prop.  
   ```html
   <div id="root"></div>
   <script type="text/babel">
       const Styled = () => (
           <div style={{ background: 'blue', color: 'white', padding: '16px' }}>
               Inline
           </div>
       );
       ReactDOM.render(<Styled />, document.getElementById('root'));
   </script>
   ```

96. **How do you visualize styling performance?**  
   Plots style application times.  
   ```python
   import matplotlib.pyplot as plt
   def plot_styling_performance(times):
       plt.plot(times, label='Style Time')
       plt.title('Styling Performance')
       plt.savefig('styling_performance.png')
   ```

#### Intermediate
97. **Write a function to dynamically apply styles.**  
   Updates Tailwind classes.  
   ```html
   <div id="root"></div>
   <script type="text/babel">
       const Dynamic = () => {
           const [color, setColor] = React.useState('blue');
           return (
               <div>
                   <div className={`bg-${color}-500 text-white p-4`}>Dynamic</div>
                   <button
                       className="bg-gray-500 text-white p-2"
                       onClick={() => setColor(color === 'blue' ? 'red' : 'blue')}
                   >
                       Toggle
                   </button>
               </div>
           );
       };
       ReactDOM.render(<Dynamic />, document.getElementById('root'));
   </script>
   ```

98. **How do you use styled-components (mock)?**  
   Simulates CSS-in-JS.  
   ```html
   <div id="root"></div>
   <script type="text/babel">
       const styled = (tag, styles) => props => {
           const element = React.createElement(tag, {
               ...props,
               style: styles
           });
           return element;
       };
       const StyledDiv = styled('div', {
           background: 'blue',
           color: 'white',
           padding: '16px'
       });
       ReactDOM.render(<StyledDiv>Styled</StyledDiv>, document.getElementById('root'));
   </script>
   ```

99. **Write a function to toggle Tailwind themes.**  
   Switches between themes.  
   ```html
   <div id="root"></div>
   <script type="text/babel">
       const ThemeToggle = () => {
           const [theme, setTheme] = React.useState('light');
           return (
               <div className={theme === 'light' ? 'bg-white text-black' : 'bg-gray-800 text-white'}>
                   <button
                       className="bg-blue-500 text-white p-2"
                       onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                   >
                       Toggle Theme
                   </button>
               </div>
           );
       };
       ReactDOM.render(<ThemeToggle />, document.getElementById('root'));
   </script>
   ```

100. **How do you use CSS modules in React (mock)?**  
    Simulates scoped styles.  
    ```html
    <div id="root"></div>
    <script type="text/babel">
        const styles = { module: 'bg-blue-500 text-white p-4' };
        const Module = () => <div className={styles.module}>CSS Module</div>;
        ReactDOM.render(<Module />, document.getElementById('root'));
    </script>
    ```

101. **Write a function to animate styles in React.**  
     Applies CSS transitions.  
     ```html
     <div id="root"></div>
     <script type="text/babel">
         const Animated = () => {
             const [isOpen, setIsOpen] = React.useState(false);
             return (
                 <div
                     className={`transition-all duration-300 ${
                         isOpen ? 'w-64' : 'w-32'
                     } bg-blue-500 text-white p-4`}
                     onClick={() => setIsOpen(!isOpen)}
                 >
                     Toggle
                 </div>
             );
         };
         ReactDOM.render(<Animated />, document.getElementById('root'));
     </script>
     ```

102. **How do you handle responsive styling in React?**  
     Uses Tailwind responsive classes.  
     ```html
     <div id="root"></div>
     <script type="text/babel">
         const Responsive = () => (
             <div className="bg-blue-500 text-white p-4 md:p-8 lg:p-12">
                 Responsive
             </div>
         );
         ReactDOM.render(<Responsive />, document.getElementById('root'));
     </script>
     ```

#### Advanced
103. **Write a function to optimize styling performance.**  
     Minimizes style recalculations.  
     ```html
     <div id="root"></div>
     <script type="text/babel">
         const optimizeStyles = (styles) => {
             return Object.entries(styles).reduce((acc, [k, v]) => {
                 acc[k] = v;
                 return acc;
             }, {});
         };
         const Optimized = () => {
             const styles = optimizeStyles({ background: 'blue', color: 'white', padding: '16px' });
             return <div style={styles}>Optimized</div>;
         };
         ReactDOM.render(<Optimized />, document.getElementById('root'));
     </script>
     ```

104. **How do you implement dynamic theming?**  
     Uses context for themes.  
     ```html
     <div id="root"></div>
     <script type="text/babel">
         const ThemeContext = React.createContext('light');
         const Themed = () => {
             const theme = React.useContext(ThemeContext);
             return (
                 <div className={theme === 'light' ? 'bg-white text-black' : 'bg-gray-800 text-white'}>
                     Themed
                 </div>
             );
         };
         ReactDOM.render(
             <ThemeContext.Provider value="dark"><Themed /></ThemeContext.Provider>,
             document.getElementById('root')
         );
     </script>
     ```

105. **Write a function to audit styling performance.**  
     Logs style application time.  
     ```html
     <div id="root"></div>
     <script type="text/babel">
         const Styled = () => {
             const start = performance.now();
             const div = <div className="bg-blue-500 text-white p-4">Styled</div>;
             console.log(`Style time: ${performance.now() - start}ms`);
             return div;
         };
         ReactDOM.render(<Styled />, document.getElementById('root'));
     </script>
     ```

106. **How do you use CSS custom properties in React?**  
     Applies dynamic variables.  
     ```html
     <div id="root"></div>
     <script type="text/babel">
         const Custom = () => (
             <div style={{ '--bg-color': 'blue' } as React.CSSProperties} className="bg-[var(--bg-color)] text-white p-4">
                 Custom
             </div>
         );
         ReactDOM.render(<Custom />, document.getElementById('root'));
     </script>
     ```

107. **Write a function to manage style transitions for AI/ML visualizations.**  
     Animates data transitions.  
     ```html
     <div id="root"></div>
     <script type="text/babel">
         const DataViz = () => {
             const [value, setValue] = React.useState(0);
             return (
                 <div>
                     <div
                         className="transition-all duration-500 bg-blue-500 text-white p-4"
                         style={{ width: `${value * 2}px` }}
                     >
                         Value: {value}
                     </div>
                     <button
                         className="bg-gray-500 text-white p-2 mt-2"
                         onClick={() => setValue(value + 10)}
                     >
                         Update
                     </button>
                 </div>
             );
         };
         ReactDOM.render(<DataViz />, document.getElementById('root'));
     </script>
     ```

108. **How do you implement style inheritance in React components?**  
     Uses context to propagate styles.  
     ```html
     <div id="root"></div>
     <script type="text/babel">
         const StyleContext = React.createContext({ bg: 'bg-blue-500' });
         const Child = () => {
             const { bg } = React.useContext(StyleContext);
             return <div className={`${bg} text-white p-4`}>Child</div>;
         };
         const Parent = () => (
             <StyleContext.Provider value={{ bg: 'bg-green-500' }}>
                 <Child />
             </StyleContext.Provider>
         );
         ReactDOM.render(<Parent />, document.getElementById('root'));
     </script>
     ```

109. **Write a function to optimize Tailwind CSS usage.**  
     Reuses utility classes efficiently.  
     ```html
     <div id="root"></div>
     <script type="text/babel">
         const getClassNames = (variant) => ({
             primary: 'bg-blue-500 text-white p-4 rounded',
             secondary: 'bg-gray-500 text-white p-4 rounded'
         })[variant] || 'bg-blue-500 text-white p-4 rounded';
         const Button = ({ variant }) => (
             <button className={getClassNames(variant)}>Click</button>
         );
         ReactDOM.render(<Button variant="primary" />, document.getElementById('root'));
     </script>
     ```

110. **How do you handle styling for large-scale React applications?**  
     Uses modular Tailwind utilities.  
     ```html
     <div id="root"></div>
     <script type="text/babel">
         const styles = {
             card: 'bg-gray-100 p-4 rounded shadow',
             button: 'bg-blue-500 text-white p-2 rounded'
         };
         const Card = () => (
             <div className={styles.card}>
                 <button className={styles.button}>Action</button>
             </div>
         );
         ReactDOM.render(<Card />, document.getElementById('root'));
     </script>
     ```

111. **Write a function to visualize style application metrics.**  
     Plots style render times.  
     ```python
     import matplotlib.pyplot as plt
     import numpy as np
     def plot_style_metrics(times):
         plt.plot(np.array(times), 'o-', label='Style Render Time (ms)')
         plt.title('Style Application Metrics')
         plt.xlabel('Render Cycle')
         plt.ylabel('Time (ms)')
         plt.legend()
         plt.savefig('style_metrics.png')
     ```

## Performance Optimization

### Basic
112. **What is React performance optimization?**  
     Reduces unnecessary renders and improves speed.  
     ```html
     <div id="root"></div>
     <script type="text/babel">
         const App = () => <p className="text-lg">Optimized</p>;
         ReactDOM.render(<App />, document.getElementById('root'));
     </script>
     ```

113. **How do you use `React.memo` to optimize components?**  
     Prevents re-renders for unchanged props.  
     ```html
     <div id="root"></div>
     <script type="text/babel">
         const Memoized = React.memo(() => (
             <p className="text-lg">Memoized</p>
         ));
         const App = () => {
             const [count, setCount] = React.useState(0);
             return (
                 <div>
                     <Memoized />
                     <button
                         className="bg-blue-500 text-white p-2"
                         onClick={() => setCount(count + 1)}
                     >
                         Count: {count}
                     </button>
                 </div>
             );
         };
         ReactDOM.render(<App />, document.getElementById('root'));
     </script>
     ```

114. **What is the role of `useMemo` in performance?**  
     Caches expensive computations.  
     ```html
     <div id="root"></div>
     <script type="text/babel">
         const Compute = ({ value }) => {
             const result = React.useMemo(() => value * 1000, [value]);
             return <p className="text-lg">Result: {result}</p>;
         };
         ReactDOM.render(<Compute value={5} />, document.getElementById('root'));
     </script>
     ```

115. **How do you use `useCallback` for optimization?**  
     Memoizes functions to prevent re-creation.  
     ```html
     <div id="root"></div>
     <script type="text/babel">
         const Child = React.memo(({ onClick }) => (
             <button className="bg-blue-500 text-white p-2" onClick={onClick}>
                 Click
             </button>
         ));
         const App = () => {
             const [count, setCount] = React.useState(0);
             const handleClick = React.useCallback(() => setCount(count + 1), [count]);
             return <Child onClick={handleClick} />;
         };
         ReactDOM.render(<App />, document.getElementById('root'));
     </script>
     ```

116. **How do you avoid unnecessary re-renders?**  
     Minimizes state updates.  
     ```html
     <div id="root"></div>
     <script type="text/babel">
         const Static = () => <p className="text-lg">Static</p>;
         const App = () => {
             const [count, setCount] = React.useState(0);
             return (
                 <div>
                     <Static />
                     <button
                         className="bg-blue-500 text-white p-2"
                         onClick={() => setCount(count + 1)}
                     >
                         Count: {count}
                     </button>
                 </div>
             );
         };
         ReactDOM.render(<App />, document.getElementById('root'));
     </script>
     ```

117. **How do you visualize render performance?**  
     Plots render times.  
     ```python
     import matplotlib.pyplot as plt
     def plot_render_performance(times):
         plt.plot(times, 'o-', label='Render Time (ms)')
         plt.title('Render Performance')
         plt.xlabel('Render Cycle')
         plt.ylabel('Time (ms)')
         plt.legend()
         plt.savefig('render_performance.png')
     ```

#### Intermediate
118. **Write a function to optimize list rendering.**  
     Uses keys to minimize DOM updates.  
     ```html
     <div id="root"></div>
     <script type="text/babel">
         const List = ({ items }) => (
             <ul className="p-4">
                 {items.map(item => (
                     <li key={item.id} className="text-lg">{item.name}</li>
                 ))}
             </ul>
         );
         const App = () => {
             const items = [
                 { id: 1, name: 'Item 1' },
                 { id: 2, name: 'Item 2' }
             ];
             return <List items={items} />;
         };
         ReactDOM.render(<App />, document.getElementById('root'));
     </script>
     ```

119. **How do you use lazy loading for performance?**  
     Loads components on demand.  
     ```html
     <div id="root"></div>
     <script type="text/babel">
         const Lazy = React.lazy(() =>
             Promise.resolve({ default: () => <p className="text-lg">Lazy</p> })
         );
         const App = () => (
             <React.Suspense fallback={<p>Loading...</p>}>
                 <Lazy />
             </React.Suspense>
         );
         ReactDOM.render(<App />, document.getElementById('root'));
     </script>
     ```

120. **Write a function to batch state updates.**  
     Reduces render cycles.  
     ```html
     <div id="root"></div>
     <script type="text/babel">
         const App = () => {
             const [count, setCount] = React.useState(0);
             const [text, setText] = React.useState('');
             const batchUpdate = () => {
                 ReactDOM.unstable_batchedUpdates(() => {
                     setCount(count + 1);
                     setText('Updated');
                 });
             };
             return (
                 <div>
                     <p className="text-lg">Count: {count}, Text: {text}</p>
                     <button className="bg-blue-500 text-white p-2" onClick={batchUpdate}>
                         Update
                     </button>
                 </div>
             );
         };
         ReactDOM.render(<App />, document.getElementById('root'));
     </script>
     ```

121. **How do you optimize event handlers?**  
     Uses debouncing.  
     ```html
     <div id="root"></div>
     <script type="text/babel">
         const useDebounce = (fn, delay) => {
             const ref = React.useRef();
             return React.useCallback((...args) => {
                 clearTimeout(ref.current);
                 ref.current = setTimeout(() => fn(...args), delay);
             }, [fn, delay]);
         };
         const Search = () => {
             const handleSearch = useDebounce((value) => console.log(value), 500);
             return (
                 <input
                     className="border p-2"
                     onChange={e => handleSearch(e.target.value)}
                 />
             );
         };
         ReactDOM.render(<Search />, document.getElementById('root'));
     </script>
     ```

122. **Write a function to monitor render frequency.**  
     Logs render counts.  
     ```html
     <div id="root"></div>
     <script type="text/babel">
         const App = () => {
             const renderCount = React.useRef(0);
             renderCount.current += 1;
             console.log(`Render count: ${renderCount.current}`);
             return <p className="text-lg">Rendered</p>;
         };
         ReactDOM.render(<App />, document.getElementById('root'));
     </script>
     ```

123. **How do you optimize large datasets in React?**  
     Uses virtualization (mock).  
     ```html
     <div id="root"></div>
     <script type="text/babel">
         const VirtualList = ({ items }) => {
             const visible = items.slice(0, 10);
             return (
                 <ul className="p-4">
                     {visible.map(item => (
                         <li key={item} className="text-lg">{item}</li>
                     ))}
                 </ul>
             );
         };
         const App = () => {
             const items = Array.from({ length: 1000 }, (_, i) => `Item ${i}`);
             return <VirtualList items={items} />;
         };
         ReactDOM.render(<App />, document.getElementById('root'));
     </script>
     ```

#### Advanced
124. **Write a function to profile component performance.**  
     Measures render time.  
     ```html
     <div id="root"></div>
     <script type="text/babel">
         const Profiled = () => {
             const start = performance.now();
             const end = () => console.log(`Render time: ${performance.now() - start}ms`);
             React.useEffect(end, []);
             return <p className="text-lg">Profiled</p>;
         };
         ReactDOM.render(<Profiled />, document.getElementById('root'));
     </script>
     ```

125. **How do you implement code splitting?**  
     Uses dynamic imports.  
     ```html
     <div id="root"></div>
     <script type="text/babel">
         const Lazy = React.lazy(() =>
             Promise.resolve({ default: () => <p className="text-lg">Split</p> })
         );
         const App = () => (
             <React.Suspense fallback={<p>Loading...</p>}>
                 <Lazy />
             </React.Suspense>
         );
         ReactDOM.render(<App />, document.getElementById('root'));
     </script>
     ```

126. **Write a function to optimize context updates.**  
     Splits context for specific consumers.  
     ```html
     <div id="root"></div>
     <script type="text/babel">
         const CountContext = React.createContext();
         const TextContext = React.createContext();
         const Display = () => {
             const count = React.useContext(CountContext);
             return <p className="text-lg">Count: {count}</p>;
         };
         const App = () => {
             const [count, setCount] = React.useState(0);
             return (
                 <CountContext.Provider value={count}>
                     <TextContext.Provider value="Text">
                         <Display />
                         <button
                             className="bg-blue-500 text-white p-2"
                             onClick={() => setCount(count + 1)}
                         >
                             Increment
                         </button>
                     </TextContext.Provider>
                 </CountContext.Provider>
             );
         };
         ReactDOM.render(<App />, document.getElementById('root'));
     </script>
     ```

127. **How do you optimize React for large-scale AI dashboards?**  
     Uses memoization and lazy loading.  
     ```html
     <div id="root"></div>
     <script type="text/babel">
         const Chart = React.memo(() => (
             <div className="bg-gray-100 p-4">Chart</div>
         ));
         const LazyChart = React.lazy(() =>
             Promise.resolve({ default: () => <Chart /> })
         );
         const Dashboard = () => (
             <React.Suspense fallback={<p>Loading...</p>}>
                 <LazyChart />
             </React.Suspense>
         );
         ReactDOM.render(<Dashboard />, document.getElementById('root'));
     </script>
     ```

128. **Write a function to visualize performance bottlenecks.**  
     Plots component render times.  
     ```python
     import matplotlib.pyplot as plt
     def plot_bottlenecks(components, times):
         plt.bar(components, times, label='Render Time (ms)')
         plt.title('Performance Bottlenecks')
         plt.xlabel('Component')
         plt.ylabel('Time (ms)')
         plt.legend()
         plt.savefig('performance_bottlenecks.png')
     ```

129. **How do you implement server-side rendering (SSR) for performance?**  
     Mock SSR setup.  
     ```html
     <div id="root"></div>
     <script type="text/babel">
         const App = () => <p className="text-lg">SSR Mock</p>;
         const ssrRender = () => {
             // Simulate server rendering
             const html = '<div class="text-lg">SSR Mock</div>';
             document.getElementById('root').innerHTML = html;
         };
         ssrRender();
         ReactDOM.hydrate(<App />, document.getElementById('root'));
     </script>
     ```

## Testing

### Basic
130. **What is testing in React?**  
     Ensures components work as expected.  
     ```html
     <div id="root"></div>
     <script type="text/babel">
         const Button = () => <button className="bg-blue-500 text-white p-2">Click</button>;
         ReactDOM.render(<Button />, document.getElementById('root'));
     </script>
     ```

131. **How do you write a unit test for a React component?**  
     Mock test with Jest (conceptual).  
     ```html
     <div id="root"></div>
     <script type="text/babel">
         const Button = () => <button className="bg-blue-500 text-white p-2">Click</button>;
         const mockTest = () => {
             const element = <Button />;
             return element.props.children === 'Click' ? 'Pass' : 'Fail';
         };
         console.log(mockTest());
         ReactDOM.render(<Button />, document.getElementById('root'));
     </script>
     ```

132. **What is Jest in React testing?**  
     Testing framework for unit tests.  
     ```html
     <div id="root"></div>
     <script type="text/babel">
         const Display = ({ text }) => <p className="text-lg">{text}</p>;
         const mockJest = (component, props) => (
             component(props).props.children === props.text ? 'Pass' : 'Fail'
         );
         console.log(mockJest(Display, { text: 'Test' }));
         ReactDOM.render(<Display text="Test" />, document.getElementById('root'));
     </script>
     ```

133. **How do you test component rendering?**  
     Verifies DOM output.  
     ```html
     <div id="root"></div>
     <script type="text/babel">
         const Card = () => <div className="bg-gray-100 p-4">Card</div>;
         const testRender = () => {
             ReactDOM.render(<Card />, document.getElementById('root'));
             return document.querySelector('.bg-gray-100') ? 'Pass' : 'Fail';
         };
         console.log(testRender());
     </script>
     ```

134. **How do you test event handlers?**  
     Simulates events.  
     ```html
     <div id="root"></div>
     <script type="text/babel">
         const Button = () => {
             const handleClick = () => console.log('Clicked');
             return <button className="bg-blue-500 text-white p-2" onClick={handleClick}>Click</button>;
         };
         const testEvent = () => {
             const button = document.createElement('button');
             button.addEventListener('click', () => 'Triggered');
             button.click();
             return 'Pass';
         };
         ReactDOM.render(<Button />, document.getElementById('root'));
     </script>
     ```

135. **How do you visualize test coverage?**  
     Plots coverage metrics.  
     ```python
     import matplotlib.pyplot as plt
     def plot_test_coverage(coverage):
         plt.bar(['Components', 'Hooks', 'Routes'], coverage, label='Coverage (%)')
         plt.title('Test Coverage Metrics')
         plt.ylabel('Coverage (%)')
         plt.legend()
         plt.savefig('test_coverage.png')
     ```

#### Intermediate
136. **Write a function to test component state changes.**  
     Simulates state updates.  
     ```html
     <div id="root"></div>
     <script type="text/babel">
         const Counter = () => {
             const [count, setCount] = React.useState(0);
             return (
                 <div>
                     <p className="text-lg">{count}</p>
                     <button className="bg-blue-500 text-white p-2" onClick={() => setCount(count + 1)}>
                         Increment
                     </button>
                 </div>
             );
         };
         const testState = () => {
             let state = 0;
             const setState = (newState) => (state = newState);
             setState(state + 1);
             return state === 1 ? 'Pass' : 'Fail';
         };
         console.log(testState());
         ReactDOM.render(<Counter />, document.getElementById('root'));
     </script>
     ```

137. **How do you test React hooks?**  
     Uses mock rendering.  
     ```html
     <div id="root"></div>
     <script type="text/babel">
         const useCounter = () => React.useState(0);
         const Counter = () => {
             const [count, setCount] = useCounter();
             return <p className="text-lg">{count}</p>;
         };
         const testHook = () => {
             const [count, setCount] = useCounter();
             setCount(1);
             return count === 1 ? 'Pass' : 'Fail';
         };
         console.log(testHook());
         ReactDOM.render(<Counter />, document.getElementById('root'));
     </script>
     ```

138. **Write a function to test component snapshots.**  
     Mock snapshot testing.  
     ```html
     <div id="root"></div>
     <script type="text/babel">
         const Card = () => <div className="bg-gray-100 p-4">Card</div>;
         const snapshotTest = () => {
             const expected = '<div class="bg-gray-100 p-4">Card</div>';
             const actual = '<div class="bg-gray-100 p-4">Card</div>';
             return actual === expected ? 'Pass' : 'Fail';
         };
         console.log(snapshotTest());
         ReactDOM.render(<Card />, document.getElementById('root'));
     </script>
     ```

139. **How do you test asynchronous components?**  
     Simulates async data fetching.  
     ```html
     <div id="root"></div>
     <script type="text/babel">
         const Async = () => {
             const [data, setData] = React.useState(null);
             React.useEffect(() => {
                 setTimeout(() => setData('Loaded'), 100);
             }, []);
             return <p className="text-lg">{data || 'Loading'}</p>;
         };
         const testAsync = () => {
             let data = null;
             setTimeout(() => (data = 'Loaded'), 100);
             return data === 'Loaded' ? 'Pass' : 'Fail';
         };
         setTimeout(() => console.log(testAsync()), 200);
         ReactDOM.render(<Async />, document.getElementById('root'));
     </script>
     ```

140. **Write a function to mock API responses for testing.**  
     Simulates API calls.  
     ```html
     <div id="root"></div>
     <script type="text/babel">
         const Fetch = () => {
             const [data, setData] = React.useState(null);
             React.useEffect(() => {
                 fetch('https://jsonplaceholder.typicode.com/posts/1')
                     .then(res => res.json())
                     .then(setData);
             }, []);
             return <p className="text-lg">{data?.title || 'Loading'}</p>;
         };
         const mockApi = () => {
             const response = { title: 'Mock' };
             return response.title === 'Mock' ? 'Pass' : 'Fail';
         };
         console.log(mockApi());
         ReactDOM.render(<Fetch />, document.getElementById('root'));
     </script>
     ```

141. **How do you test component accessibility?**  
     Checks ARIA attributes.  
     ```html
     <div id="root"></div>
     <script type="text/babel">
         const Button = () => (
             <button className="bg-blue-500 text-white p-2" aria-label="Submit">
                 Submit
             </button>
         );
         const testA11y = () => {
             const button = document.createElement('button');
             button.setAttribute('aria-label', 'Submit');
             return button.getAttribute('aria-label') === 'Submit' ? 'Pass' : 'Fail';
         };
         console.log(testA11y());
         ReactDOM.render(<Button />, document.getElementById('root'));
     </script>
     ```

#### Advanced
142. **Write a function to test component performance.**  
     Measures render time.  
     ```html
     <div id="root"></div>
     <script type="text/babel">
         const Heavy = () => {
             const start = performance.now();
             const end = () => console.log(`Render time: ${performance.now() - start}ms`);
             React.useEffect(end, []);
             return <p className="text-lg">Heavy</p>;
         };
         const testPerformance = () => {
             const start = performance.now();
             const end = performance.now() - start;
             return end < 10 ? 'Pass' : 'Fail';
         };
         console.log(testPerformance());
         ReactDOM.render(<Heavy />, document.getElementById('root'));
     </script>
     ```

143. **How do you test React Router navigation?**  
     Simulates route changes.  
     ```html
     <div id="root"></div>
     <script src="https://cdn.jsdelivr.net/npm/react-router-dom@6/dist/umd/react-router-dom.development.js"></script>
     <script type="text/babel">
         const { BrowserRouter, Routes, Route } = ReactRouterDOM;
         const Home = () => <p className="text-lg">Home</p>;
         const testNavigation = () => {
             const path = '/';
             return path === '/' ? 'Pass' : 'Fail';
         };
         console.log(testNavigation());
         const App = () => (
             <BrowserRouter>
                 <Routes>
                     <Route path="/" element={<Home />} />
                 </Routes>
             </BrowserRouter>
         );
         ReactDOM.render(<App />, document.getElementById('root'));
     </script>
     ```

144. **Write a function to test error boundaries.**  
     Simulates errors.  
     ```html
     <div id="root"></div>
     <script type="text/babel">
         class ErrorBoundary extends React.Component {
             state = { hasError: false };
             static getDerivedStateFromError() {
                 return { hasError: true };
             }
             render() {
                 return this.state.hasError ? (
                     <p className="text-red-500">Error</p>
                 ) : (
                     this.props.children
                 );
             }
         }
         const Buggy = () => { throw new Error('Crash'); };
         const testErrorBoundary = () => {
             try {
                 Buggy();
                 return 'Fail';
             } catch {
                 return 'Pass';
             }
         };
         console.log(testErrorBoundary());
         ReactDOM.render(
             <ErrorBoundary><Buggy /></ErrorBoundary>,
             document.getElementById('root')
         );
     </script>
     ```

145. **How do you test custom hooks comprehensively?**  
     Tests hook logic.  
     ```html
     <div id="root"></div>
     <script type="text/babel">
         const useToggle = (initial) => {
             const [value, setValue] = React.useState(initial);
             return [value, () => setValue(!value)];
         };
         const Toggle = () => {
             const [isOn, toggle] = useToggle(false);
             return <p className="text-lg">{isOn ? 'On' : 'Off'}</p>;
         };
         const testHook = () => {
             const [value, toggle] = useToggle(false);
             toggle();
             return value === true ? 'Pass' : 'Fail';
         };
         console.log(testHook());
         ReactDOM.render(<Toggle />, document.getElementById('root'));
     </script>
     ```

146. **Write a function to automate end-to-end testing.**  
     Simulates user interactions.  
     ```html
     <div id="root"></div>
     <script type="text/babel">
         const Form = () => {
             const [value, setValue] = React.useState('');
             return (
                 <input
                     className="border p-2"
                     value={value}
                     onChange={e => setValue(e.target.value)}
                 />
             );
         };
         const testE2E = () => {
             const input = document.createElement('input');
             input.value = 'Test';
             return input.value === 'Test' ? 'Pass' : 'Fail';
         };
         console.log(testE2E());
         ReactDOM.render(<Form />, document.getElementById('root'));
     </script>
     ```

147. **How do you visualize test performance?**  
     Plots test execution times.  
     ```python
     import matplotlib.pyplot as plt
     def plot_test_performance(times):
         plt.plot(times, 'o-', label='Test Time (ms)')
         plt.title('Test Performance Metrics')
         plt.xlabel('Test Case')
         plt.ylabel('Time (ms)')
         plt.legend()
         plt.savefig('test_performance.png')
     ```

## Integration with AI/ML

### Basic
148. **How do you integrate React with AI/ML models?**  
     Displays model outputs.  
     ```html
     <div id="root"></div>
     <script type="text/babel">
         const ModelOutput = ({ prediction }) => (
             <p className="text-lg">Prediction: {prediction}</p>
         );
         ReactDOM.render(<ModelOutput prediction="Positive" />, document.getElementById('root'));
     </script>
     ```

149. **How do you fetch AI model predictions in React?**  
     Uses API calls.  
     ```html
     <div id="root"></div>
     <script type="text/babel">
         const Predict = () => {
             const [data, setData] = React.useState(null);
             React.useEffect(() => {
                 fetch('https://jsonplaceholder.typicode.com/posts/1')
                     .then(res => res.json())
                     .then(data => setData(data.title));
             }, []);
             return <p className="text-lg">{data || 'Loading...'}</p>;
         };
         ReactDOM.render(<Predict />, document.getElementById('root'));
     </script>
     ```

150. **How do you visualize model outputs in React?**  
     Renders data charts (mock).  
     ```html
     <div id="root"></div>
     <script type="text/babel">
         const Chart = ({ data }) => (
             <div className="bg-gray-100 p-4">
                 {data.map((value, i) => (
                     <div
                         key={i}
                         className="bg-blue-500"
                         style={{ height: `${value * 10}px`, width: '20px', display: 'inline-block' }}
                     />
                 ))}
             </div>
         );
         ReactDOM.render(<Chart data={[1, 2, 3, 4, 5]} />, document.getElementById('root'));
     </script>
     ```

151. **How do you handle real-time model predictions?**  
     Uses WebSockets (mock).  
     ```html
     <div id="root"></div>
     <script type="text/babel">
         const RealTime = () => {
             const [prediction, setPrediction] = React.useState(0);
             React.useEffect(() => {
                 const interval = setInterval(() => setPrediction(Math.random()), 1000);
                 return () => clearInterval(interval);
             }, []);
             return <p className="text-lg">Prediction: {prediction.toFixed(2)}</p>;
         };
         ReactDOM.render(<RealTime />, document.getElementById('root'));
     </script>
     ```

152. **How do you display model metrics in React?**  
     Shows accuracy, loss, etc.  
     ```html
     <div id="root"></div>
     <script type="text/babel">
         const Metrics = ({ metrics }) => (
             <div className="p-4">
                 <p className="text-lg">Accuracy: {metrics.accuracy}</p>
                 <p className="text-lg">Loss: {metrics.loss}</p>
             </div>
         );
         ReactDOM.render(
             <Metrics metrics={{ accuracy: 0.95, loss: 0.05 }} />,
             document.getElementById('root')
         );
     </script>
     ```

153. **How do you visualize model performance?**  
     Plots accuracy over epochs.  
     ```python
     import matplotlib.pyplot as plt
     def plot_model_performance(epochs, accuracy):
         plt.plot(epochs, accuracy, 'o-', label='Accuracy')
         plt.title('Model Performance')
         plt.xlabel('Epoch')
         plt.ylabel('Accuracy')
         plt.legend()
         plt.savefig('model_performance.png')
     ```

#### Intermediate
154. **Write a function to render dynamic model outputs.**  
     Updates UI with predictions.  
     ```html
     <div id="root"></div>
     <script type="text/babel">
         const Dynamic = () => {
             const [predictions, setPredictions] = React.useState([]);
             const addPrediction = () => {
                 setPredictions([...predictions, Math.random()]);
             };
             return (
                 <div className="p-4">
                     <button className="bg-blue-500 text-white p-2" onClick={addPrediction}>
                         Predict
                     </button>
                     {predictions.map((p, i) => (
                         <p key={i} className="text-lg">{p.toFixed(2)}</p>
                     ))}
                 </div>
             );
         };
         ReactDOM.render(<Dynamic />, document.getElementById('root'));
     </script>
     ```

155. **How do you integrate TensorFlow.js in React?**  
     Runs ML models in browser (mock).  
     ```html
     <div id="root"></div>
     <script type="text/babel">
         const Model = () => {
             const [result, setResult] = React.useState(null);
             const runModel = () => {
                 // Mock TensorFlow.js prediction
                 setResult(Math.random());
             };
             return (
                 <div className="p-4">
                     <button className="bg-blue-500 text-white p-2" onClick={runModel}>
                         Run Model
                     </button>
                     <p className="text-lg">{result ? result.toFixed(2) : 'No Result'}</p>
                 </div>
             );
         };
         ReactDOM.render(<Model />, document.getElementById('root'));
     </script>
     ```

156. **Write a function to visualize model predictions.**  
     Renders prediction bars.  
     ```html
     <div id="root"></div>
     <script type="text/babel">
         const PredictionViz = ({ predictions }) => (
             <div className="p-4 flex">
                 {predictions.map((p, i) => (
                     <div
                         key={i}
                         className="bg-blue-500 mr-1"
                         style={{ height: `${p * 100}px`, width: '20px' }}
                     />
                 ))}
             </div>
         );
         ReactDOM.render(<PredictionViz predictions={[0.2, 0.5, 0.8]} />, document.getElementById('root'));
     </script>
     ```

157. **How do you handle large model outputs in React?**  
     Uses pagination.  
     ```html
     <div id="root"></div>
     <script type="text/babel">
         const Paginated = ({ data }) => {
             const [page, setPage] = React.useState(0);
             const perPage = 5;
             const visible = data.slice(page * perPage, (page + 1) * perPage);
             return (
                 <div className="p-4">
                     {visible.map((item, i) => (
                         <p key={i} className="text-lg">{item}</p>
                     ))}
                     <button
                         className="bg-blue-500 text-white p-2"
                         onClick={() => setPage(page + 1)}
                         disabled={(page + 1) * perPage >= data.length}
                     >
                         Next
                     </button>
                 </div>
             );
         };
         ReactDOM.render(
             <Paginated data={Array.from({ length: 20 }, (_, i) => `Item ${i}`)} />,
             document.getElementById('root')
         );
     </script>
     ```

158. **Write a function to manage model input forms.**  
     Collects user input for predictions.  
     ```html
     <div id="root"></div>
     <script type="text/babel">
         const InputForm = () => {
             const [input, setInput] = React.useState('');
             const predict = () => console.log(`Predicting: ${input}`);
             return (
                 <div className="p-4">
                     <input
                         className="border p-2 mr-2"
                         value={input}
                         onChange={e => setInput(e.target.value)}
                     />
                     <button className="bg-blue-500 text-white p-2" onClick={predict}>
                         Predict
                     </button>
                 </div>
             );
         };
         ReactDOM.render(<InputForm />, document.getElementById('root'));
     </script>
     ```

159. **How do you optimize AI dashboard rendering?**  
     Uses memoization for charts.  
     ```html
     <div id="root"></div>
     <script type="text/babel">
         const Chart = React.memo(({ data }) => (
             <div className="bg-gray-100 p-4">
                 {data.map((v, i) => (
                     <div
                         key={i}
                         className="bg-blue-500"
                         style={{ height: `${v * 10}px`, width: '20px', display: 'inline-block' }}
                     />
                 ))}
             </div>
         ));
         const Dashboard = () => {
             const data = [1, 2, 3, 4, 5];
             return <Chart data={data} />;
         };
         ReactDOM.render(<Dashboard />, document.getElementById('root'));
     </script>
     ```

#### Advanced
160. **Write a function to integrate ONNX models in React.**  
     Runs ONNX models (mock).  
     ```html
     <div id="root"></div>
     <script type="text/babel">
         const ONNXModel = () => {
             const [output, setOutput] = React.useState(null);
             const runONNX = () => {
                 // Mock ONNX inference
                 setOutput(Math.random());
             };
             return (
                 <div className="p-4">
                     <button className="bg-blue-500 text-white p-2" onClick={runONNX}>
                         Run ONNX
                     </button>
                     <p className="text-lg">{output ? output.toFixed(2) : 'No Output'}</p>
                 </div>
             );
         };
         ReactDOM.render(<ONNXModel />, document.getElementById('root'));
     </script>
     ```

161. **How do you handle streaming model outputs in React?**  
     Updates UI with streaming data.  
     ```html
     <div id="root"></div>
     <script type="text/babel">
         const Stream = () => {
             const [outputs, setOutputs] = React.useState([]);
             React.useEffect(() => {
                 const interval = setInterval(() => {
                     setOutputs(prev => [...prev, Math.random()]);
                 }, 1000);
                 return () => clearInterval(interval);
             }, []);
             return (
                 <div className="p-4">
                     {outputs.map((o, i) => (
                         <p key={i} className="text-lg">{o.toFixed(2)}</p>
                     ))}
                 </div>
             );
         };
         ReactDOM.render(<Stream />, document.getElementById('root'));
     </script>
     ```

162. **Write a function to visualize model uncertainty.**  
     Renders confidence intervals.  
     ```html
     <div id="root"></div>
     <script type="text/babel">
         const UncertaintyViz = ({ data }) => (
             <div className="p-4 flex">
                 {data.map((d, i) => (
                     <div
                         key={i}
                         className="bg-blue-500 opacity-50 mr-1"
                         style={{ height: `${d.confidence * 100}px`, width: '20px' }}
                     />
                 ))}
             </div>
         );
         ReactDOM.render(
             <UncertaintyViz data={[{ confidence: 0.9 }, { confidence: 0.7 }]} />,
             document.getElementById('root')
         );
     </script>
     ```

163. **How do you implement interactive ML dashboards in React?**  
     Combines inputs and outputs.  
     ```html
     <div id="root"></div>
     <script type="text/babel">
         const Dashboard = () => {
             const [input, setInput] = React.useState('');
             const [output, setOutput] = React.useState(null);
             const predict = () => setOutput(Math.random());
             return (
                 <div className="p-4">
                     <input
                         className="border p-2 mr-2"
                         value={input}
                         onChange={e => setInput(e.target.value)}
                     />
                     <button className="bg-blue-500 text-white p-2" onClick={predict}>
                         Predict
                     </button>
                     <p className="text-lg">{output ? output.toFixed(2) : 'No Output'}</p>
                 </div>
             );
         };
         ReactDOM.render(<Dashboard />, document.getElementById('root'));
     </script>
     ```

164. **Write a function to audit ML model performance in React.**  
     Logs prediction accuracy.  
     ```html
     <div id="root"></div>
     <script type="text/babel">
         const Audit = () => {
             const [predictions, setPredictions] = React.useState([]);
             const addPrediction = () => {
                 const pred = Math.random();
                 setPredictions([...predictions, pred]);
                 console.log(`Accuracy: ${(pred > 0.5 ? 1 : 0)}`);
             };
             return (
                 <div className="p-4">
                     <button className="bg-blue-500 text-white p-2" onClick={addPrediction}>
                         Predict
                     </button>
                 </div>
             );
         };
         ReactDOM.render(<Audit />, document.getElementById('root'));
     </script>
     ```

165. **How do you optimize ML model inference in React?**  
     Uses Web Workers (mock).  
     ```html
     <div id="root"></div>
     <script type="text/babel">
         const Inference = () => {
             const [result, setResult] = React.useState(null);
             const runInference = () => {
                 // Mock Web Worker
                 setTimeout(() => setResult(Math.random()), 100);
             };
             return (
                 <div className="p-4">
                     <button className="bg-blue-500 text-white p-2" onClick={runInference}>
                         Infer
                     </button>
                     <p className="text-lg">{result ? result.toFixed(2) : 'No Result'}</p>
                 </div>
             );
         };
         ReactDOM.render(<Inference />, document.getElementById('root'));
     </script>
     ```

#### Final Questions
166. **How do you handle model versioning in React apps?**  
     Switches between model versions.  
     ```html
     <div id="root"></div>
     <script type="text/babel">
         const ModelVersion = () => {
             const [version, setVersion] = React.useState('v1');
             return (
                 <div className="p-4">
                     <select
                         className="border p-2"
                         value={version}
                         onChange={e => setVersion(e.target.value)}
                     >
                         <option value="v1">Version 1</option>
                         <option value="v2">Version 2</option>
                     </select>
                     <p className="text-lg">Using: {version}</p>
                 </div>
             );
         };
         ReactDOM.render(<ModelVersion />, document.getElementById('root'));
     </script>
     ```

167. **Write a function to visualize model training progress.**  
     Renders progress bars.  
     ```html
     <div id="root"></div>
     <script type="text/babel">
         const Training = ({ progress }) => (
             <div className="p-4">
                 <div className="bg-gray-200 h-6 rounded">
                     <div
                         className="bg-blue-500 h-6 rounded"
                         style={{ width: `${progress * 100}%` }}
                     />
                 </div>
                 <p className="text-lg">{(progress * 100).toFixed(0)}%</p>
             </div>
         );
         ReactDOM.render(<Training progress={0.75} />, document.getElementById('root'));
     </script>
     ```

168. **How do you secure ML model APIs in React?**  
     Uses token-based auth (mock).  
     ```html
     <div id="root"></div>
     <script type="text/babel">
         const Secure = () => {
             const [data, setData] = React.useState(null);
             const fetchSecure = () => {
                 // Mock token auth
                 const token = 'mock-token';
                 if (token) setData('Secure Data');
             };
             return (
                 <div className="p-4">
                     <button className="bg-blue-500 text-white p-2" onClick={fetchSecure}>
                         Fetch
                     </button>
                     <p className="text-lg">{data || 'No Data'}</p>
                 </div>
             );
         };
         ReactDOM.render(<Secure />, document.getElementById('root'));
     </script>
     ```

169. **Write a function to handle model errors in React.**  
     Displays error messages.  
     ```html
     <div id="root"></div>
     <script type="text/babel">
         const ErrorHandler = () => {
             const [error, setError] = React.useState(null);
             const runModel = () => {
                 try {
                     throw new Error('Model Failed');
                 } catch (e) {
                     setError(e.message);
                 }
             };
             return (
                 <div className="p-4">
                     <button className="bg-blue-500 text-white p-2" onClick={runModel}>
                         Run
                     </button>
                     {error && <p className="text-red-500">{error}</p>}
                 </div>
             );
         };
         ReactDOM.render(<ErrorHandler />, document.getElementById('root'));
     </script>
     ```

170. **How do you deploy React apps with ML models?**  
     Mock deployment setup.  
     ```html
     <div id="root"></div>
     <script type="text/babel">
         const Deployed = () => {
             const [status, setStatus] = React.useState('Deploying...');
             React.useEffect(() => {
                 setTimeout(() => setStatus('Deployed'), 1000);
             }, []);
             return <p className="text-lg">{status}</p>;
         };
         ReactDOM.render(<Deployed />, document.getElementById('root'));
     </script>
     ```
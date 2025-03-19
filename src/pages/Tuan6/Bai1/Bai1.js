import {
    createContext,
    useContext,
    useEffect,
    useReducer,
    useRef,
    useState,
} from 'react';
import classNames from 'classnames/bind';
import styles from './Bai1.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

// Context tạo State toàn cục
const GlobalContext = createContext();

const initialState = { count: 0 };
function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            return state;
    }
}

function ParentComponent() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    return (
        <GlobalContext.Provider value={{ state, dispatch }}>
            <div className={cx('container')}>
                <h2>Parent Component</h2>
                <p>Fetched Data: {data?.title}</p>
                <ChildComponent />
            </div>
        </GlobalContext.Provider>
    );
}

function ChildComponent() {
    const { state, dispatch } = useContext(GlobalContext);
    const inputRef = useRef();

    const handleSendToParent = () => {
        alert(`Input Value: ${inputRef.current.value}`);
    };

    return (
        <div className={cx('child-container')}>
            <h3>Child Component</h3>
            <p>Count: {state.count}</p>
            <Button primary onClick={() => dispatch({ type: 'increment' })}>
                +
            </Button>
            <Button primary onClick={() => dispatch({ type: 'decrement' })}>
                -
            </Button>
            <input
                className={cx('input')}
                ref={inputRef}
                type="text"
                placeholder="Enter text"
            />
            <Button primary onClick={handleSendToParent}>
                Send to Parent
            </Button>
        </div>
    );
}

export default ParentComponent;

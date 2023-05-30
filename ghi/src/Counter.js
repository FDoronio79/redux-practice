import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { increment, decrement, set} from './actions';
import SetCounter from './SetCounter';
import { useActions } from './use-actions'

export default function Counter() {
    const incident = 'Incident';
    const count = useSelector((state) => state.count);
    //creating a custom hook
    const actions = useActions({ increment, decrement, set});
    //the 2 lines below are replaced by the custom hook useActions
    // const dispatch = useDispatch();
    // const actions = bindActionCreators({ increment, decrement, set }, dispatch);
    return ( 
        <main className="Counter">
            <h1>Days Since Last {incident}</h1>
            <p className="count">{count}</p>
            <section className="controls">
                {/* <button onClick={() => dispatch(increment())}>Increment</button> */}
                <button onClick={() => actions.increment()}>Increment</button>
                {/* <button onClick={() => dispatch(set(0))}>Reset</button> */}
                <button onClick={() => actions.set(0)}>Reset</button>
                {/* <button onClick={() => dispatch(decrement())}>Decrement</button> */}
                <button onClick={() => actions.decrement()}>Decrement</button>
            </section>
        <SetCounter />
        </main>
    )
}
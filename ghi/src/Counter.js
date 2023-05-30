import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { increment, decrement, set} from './actions';
import SetCounter from './SetCounter';
import { useActions } from './use-actions'
import { useCounter } from './use-counter';

export default function Counter() {
    const incident = 'Incident';
    const count = useSelector((state) => state.count);
    //this replaced the previous use of useActions
    const { increment, decrement, set} = useCounter();

    return ( 
        <main className="Counter">
            <h1>Days Since Last {incident}</h1>
            <p className="count">{count}</p>
            <section className="controls">
                <button onClick={() => increment()}>Increment</button>
                <button onClick={() => set(0)}>Reset</button>
                <button onClick={() => decrement()}>Decrement</button>
            </section>
        <SetCounter />
        </main>
    )
}
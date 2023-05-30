import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import { set } from './actions'



export default function SetCounter() {
    const storeCount = useSelector((state) => state.count)
    const [count, setCount] = useState(storeCount);
    const dispatch = useDispatch();

    useEffect(() => {
        setCount(storeCount)
    }, [storeCount])

    return (
        <section className="controls">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    dispatch(set(count))
                }}
            >
                <label htmlFor="set-to">Set Count</label>
                <input 
                    id="set-to"
                    type="number"
                    value={count}
                    onChange={(e) => setCount(e.target.value)}
                />
                <input type="submit"/>
            </form>
        </section>
    )
}
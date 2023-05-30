import { useSelector } from 'react-redux';
import { decrement, increment, set } from './actions';
import { useActions } from './use-actions';

const bruh = 'Bruh';
console.log(bruh);

export const useCounter = () => {
    const count = useSelector((state) => state.count);
    const actions = useActions({ increment, decrement, set });

    return { count, ...actions};
}
import { decrement, increment } from './counterSlice'
import {useAppDispatch, useAppSelector} from "../hooks/redux";

export function Counter() {
    const count = useAppSelector((state) => state.counterSlice.value)
    const dispatch = useAppDispatch()

    return (
        <div>
            <div>
                <button
                    aria-label="Увеличить значение"
                    onClick={() => dispatch(increment())}
                >
                    Увеличить
                </button>
                <span>{count}</span>
                <button
                    aria-label="Уменьшить значение"
                    onClick={() => dispatch(decrement())}
                >
                    Уменьшить
                </button>
            </div>
        </div>
    )
}
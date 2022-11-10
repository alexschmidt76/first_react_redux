import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "./features/counterSlice";

export default function Counter() {
    // call useSelector to grab the current value of our state variable
    // from the store, and assign it to a variable named "count"
    const count = useSelector((state) => state.value);
    // and include the useDispatch hook...
    const dispatch = useDispatch();
    // state for custom amount
    const [ input, setInput ] = useState(0);

    const byAmountSubmit = (e) => {
        e.preventDefault();
        dispatch(incrementByAmount(Number(input)));
    };

    return (
        <div>
            <h1>
                {count}
            </h1>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <form onSubmit={(e) => byAmountSubmit(e)}>
                <input type='number' onChange={(e) => setInput(e.target.value)} />
                <input type='submit' />
            </form>
        </div>
    );
};

import { increment, decrement } from "../redux/actions/counterActions";
import {useDispatch, useSelector} from "react-redux";

function Counter() {

    // useselector is the hook that is used to access the state from the redux store
    const count = useSelector((state) => state.count);

    const dispatch = useDispatch();
    // usedispatch is the hook that is used to dispatch the action to the redux store


    return (
        <div>
            <h2>Count value is: {count}</h2>

            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    )
   

}

export default Counter;
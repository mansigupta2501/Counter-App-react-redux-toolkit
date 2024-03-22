import { useDispatch } from "react-redux";
import { useRef } from "react";
import { counterActions, privacyToggleActions } from "../store";

const Button = () => {
  const dispatch = useDispatch();
  const inputElement = useRef();

  const handleIncrement = () => {
    dispatch(counterActions.increment())
  };

  const handleDecrement = () => {
    dispatch(counterActions.decrement())
  };

  const handleAdd = () => {
    dispatch(counterActions.add(inputElement.current.value))
    inputElement.current.value = "";
  };

  const handleSubtract = () => {
    dispatch(counterActions.subtract({
      num: inputElement.current.value
    }))
    inputElement.current.value = "";
  };

  const handlePrivacyToggle = () => {
    dispatch(privacyToggleActions.toggle());
  };
  
  return (
    <>
      <div>
        <button onClick={handleIncrement}>+1</button>
        <button onClick={handleDecrement}>-1</button>
        <button onClick={handlePrivacyToggle}>Privacy Toggle</button>
      </div>

      <div>
        <input type="text" ref={inputElement} placeholder="Enter Number" />

        <button onClick={handleAdd}>Add</button>
        <button onClick={handleSubtract}>Subtract</button>
      </div>
    </>
  );
};

export default Button;

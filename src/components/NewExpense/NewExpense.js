import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
const NewExpense = (props) => {
  const [showComponent, setShowComponent] = useState(false);
  const [showBtn, setShowBtn] = useState(true);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setShowComponent(false);
    setShowBtn(true);
  };

  const clickHandler = () => {
    setShowComponent(true);
    setShowBtn(false);
  };
  const cancelHandler = (e) => {
    e.preventDefault();
    setShowComponent(false);
    setShowBtn(true);
  };
  const showForm = () => {
    return (
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onCancel={cancelHandler}
      />
    );
  };
  const showBtnHandler = () => {
    return (
      <button className="add_exp_btn" onClick={clickHandler}>
        Add Expense
      </button>
    );
  };

  return (
    <div className="new-expense">
      {/* <button className="add_exp_btn" onClick={clickHandler}>
        Add Expense
      </button> */}
      {showComponent ? showForm() : null}
      {showBtn ? showBtnHandler() : null}
      {/* <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} /> */}
    </div>
  );
};

export default NewExpense;

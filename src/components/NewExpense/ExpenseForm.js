import React,{useState} from "react";
import './ExpenseForm.css'

const ExpenseForm=(props)=>{
    const [enteredTitle, setEnteredTitle]=useState('');
    const [enteredAmount, setEnteredAmount]=useState('');
    const [enteredDate, setEnteredDate]=useState('');
    const [enteredLocation, setEnteredLocation]=useState('');

    // const [userInput, setUserInput]=useState({
    //     enteredTitle:'',
    //     enteredAmount:'',
    //     enteredDate:'',
    //     enteredLocation:''
    // });

    const titleChangeHandler=(event)=>{
        setEnteredTitle(event.target.value);

        //may work fine and some time not get latest instance 
        // setUserInput({
        //     ...userInput,
        //     enteredTitle:event.target.value,
        // })

        //works fine we need it
        // setUserInput((prevState)=>{
        //     return {...prevState,enteredTitle:event.target.value};
        // });
    };
    const amountChangeHandler=(event)=>{
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount:event.target.value,
        // })
    };
    const dateChangeHandler=(event)=>{
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate:event.target.value,
        // })
    };
    const locationChangeHandler=(event)=>{
        setEnteredLocation(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredLocation:event.target.value,
        // })
    };




    const submitHandler=(event)=>{
        event.preventDefault();

        const expenseData={
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate),
            location:enteredLocation
        };
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        setEnteredLocation('');
    };

    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type='text' value={enteredTitle} onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Location</label>
                <input type='text' value={enteredLocation} onChange={locationChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type='number' min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type='date' min="2022-01-01" step="2024-12-31" value={enteredDate} onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>
}
export default ExpenseForm;

import React, {useState} from 'react';
import './ExpenceItem.css';
import ExpenseDate from './ExpenceDate';
import Card from '../UI/Card';

const ExpenceItem = (props) => {

    const [title, setTitle]=useState(props.title);

    const clickHendeler=()=>{
      setTitle('updated!!');
      console.log(title)
    }

    const [amount, setAmount]=useState(props.amount);

    const clickHendeler2=()=>{
      setAmount(100);
      console.log(amount)
    }
    return (
      <Card className='expense-item'>
        <ExpenseDate date={props.date}/>
        <div className='expense-item__description'>
          <h2>{title}</h2>
          <h3>{props.location}</h3>
          <div className='expense-item__price'>${amount}</div>
        </div>
        <button onClick={clickHendeler}>Edit</button>
        <button onClick={clickHendeler2}>Expense</button>
      </Card>
    );
}
export default ExpenceItem;
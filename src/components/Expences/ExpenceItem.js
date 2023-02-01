
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
    return (
      <Card className='expense-item'>
        <ExpenseDate date={props.date}/>
        <div className='expense-item__description'>
          <h2>{title}</h2>
          <h3>{props.location}</h3>
          <div className='expense-item__price'>${props.amount}</div>
        </div>
        <button onClick={clickHendeler}>Edit</button>
      </Card>
    );
}
export default ExpenceItem;
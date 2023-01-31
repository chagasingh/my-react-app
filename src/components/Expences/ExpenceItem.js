import './ExpenceItem.css';
import ExpenseDate from './ExpenceDate';
import Card from '../UI/Card';

const ExpenceItem = (props) => {
    const clickHendeler=()=>{
      console.log("clicked!!!")
    }
    const clickHendeler2=()=>{
      console.log("Deleted!!!")
    }
    return (
      <Card className='expense-item'>
        <ExpenseDate date={props.date}/>
        <div className='expense-item__description'>
          <h2>{props.title}</h2>
          <h3>{props.location}</h3>
          <div className='expense-item__price'>${props.amount}</div>
        </div>
        <button onClick={clickHendeler}>Click</button>
        <button onClick={clickHendeler2}>Delete</button>
      </Card>
    );
}
export default ExpenceItem;
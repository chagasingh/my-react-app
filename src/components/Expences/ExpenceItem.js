import './ExpenceItem.css';
import ExpenseDate from './ExpenceDate';
import Card from '../UI/Card';

const ExpenceItem = (props) => {
  
    return (
      <Card className='expense-item'>
        <ExpenseDate date={props.date}/>
        <div className='expense-item__description'>
          <h2>{props.title}</h2>
          <h3>{props.location}</h3>
          <div className='expense-item__price'>${props.amount}</div>
        </div>
      </Card>
    );
}
export default ExpenceItem;
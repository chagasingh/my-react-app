import './ExpenceItem.css';
import ExpenseDate from './ExpenceDate';
import ExpenceDetails from './ExpenceDetails';


function ExpenceItem (props) {
  
    return (
      <div className='expense-item'>
        <ExpenseDate date={props.date}/>
        <ExpenceDetails title={props.title} />
        <ExpenceDetails location={props.location} />
        <ExpenceDetails amount={props.amount} />
      </div>
    );
}
export default ExpenceItem;
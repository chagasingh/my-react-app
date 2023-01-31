import './ExpenceItem.css';

const ExpenceDetails =(props) =>{
    return (
        <div className='expense-item__description'>
          <h2>{props.title}</h2>
          <h3>{props.location}</h3>
          <div className='expense-item__price'>${props.amount}</div>
        </div>
    );
}
export default ExpenceDetails;
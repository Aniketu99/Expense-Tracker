import { useId, useRef, useState } from 'react';
import Wallet from './component/Wallet';
import Expenses from './component/Expenses';
import './App.css';

function App() {
  const nameRef = useRef();
  const AmountRef = useRef();
  const typeRef = useRef();
  const [walletValue, setWalletValue] = useState(0);
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);
  const [name, setName] = useState('');
  const [entries, setEntries] = useState([]);

  const submitHandler = () => {
    const amount = parseInt(AmountRef.current.value);

    setName(nameRef.current.value);

    const entry = {
       category: nameRef.current.value,
       Amount:amount,
       Type :typeRef.current.value,
    }

    setEntries((prev)=> [...prev,entry]);

    if (typeRef.current.value === 'expense') {
      setWalletValue((prev) => prev - amount);
      setExpense((prev) => prev + amount);
    } else {
      setWalletValue((prev) => prev + amount);
      setIncome((prev) => prev + amount);
    }

    nameRef.current.value = '';
    AmountRef.current.value = '';
    typeRef.current.value = 'income';

  };

  return (
    <div className='container'>
      <div className='main'>
        <h2 className='title'>Expense Tracker</h2>
        <div className='sec-1'>
          <div className='sec-1-left'>
            <Wallet income={income} expense={expense} walletValue={walletValue} />
          </div>
          <div className='sec-1-right'>
            <div className='form'>
              <div className='form-field'>
                <label htmlFor="name" className='Name'>
                category</label>
                <input ref={nameRef} type="text" className='Name-input' />
              </div>
              <div className='form-field'>
                <label htmlFor="amount" className='Name'>Amount</label>
                <input ref={AmountRef} type="number" className='Name-input' />
              </div>
              <div className='form-field'>
                <label htmlFor="type" className='Name'>Type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <select ref={typeRef}>
                  <option value="income">Income</option>
                  <option value="expense">Expense</option>
                </select>
              </div>
              <div className='form-field'>
                <div className='btn'>
                  <button onClick={submitHandler} className='btn-submit'>Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='sec-2'>
          <Expenses entries ={entries} />
        </div>
      </div>
    </div>
  );
}

export default App;

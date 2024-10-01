import '../App.css'

const Wallet = ({income,expense,walletValue}) => {

    return (
        <div className='wallet'>
            <div>
                <h3 className='balance'>Wallet : {walletValue}</h3>
            </div>
            <div className='total'>
                <div className='income-box'>
                    <h3 className='income'>Income</h3>
                    <h5><span className='incomeText'>{income}</span></h5>
                </div>
                <div className='expense-box'>
                    <h3 className='expence'>Expence</h3>
                    <h5><span className='expenceText'>{expense}</span></h5>
                </div>
            </div>
        </div>
    )
}

export default Wallet;
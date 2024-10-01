import '../App.css';

const Expenses = ({ entries }) => {
    return (
        <div className='expenses-table'>
            <h3 className='expense-text'>Expenses</h3>
            <div className='table-field'>
                <table>
                    <thead>
                        <tr> 
                            <th>Sr No</th>
                            <th>Category</th>
                            <th>Amount</th>
                            <th>Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            entries.map(({ category, Amount, Type }, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{category}</td>
                                    <td>{Amount}</td>
                                    <td>{Type}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Expenses;

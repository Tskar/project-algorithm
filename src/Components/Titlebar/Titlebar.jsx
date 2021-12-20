import './titlebar.css';

function Titlebar() {
    return (
        <nav className='titlebar'>
            <div className='title'>
                Try Algorithm
            </div>
            <div className='title-body'>
                <ul className='topCenter'>
                    <li className='list-item'>
                        <select className='dd-list'>
                            <option value="none" defaultValue={null}>Algorithm</option>
                            <option value="bubble sort">Sorting</option>
                            <option value="merge sort">Linked List</option>
                        </select>
                    </li>
                    <li className='list-item'>
                        Bubble Sort
                    </li>
                    <li className='list-item'>
                        Insertion Sort
                    </li>
                    <li className='list-item'>
                        Merge Sort
                    </li>
                </ul>
            </div>
        </nav>
    );

};

export default Titlebar;
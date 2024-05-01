import React,{useState} from 'react'
import DataTable from 'react-data-table-component';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './AdminPage.css'



const columns = [
    {
        name: 'S.No',
        selector: row => row.id,
    },
    {
        name: 'Customers Name',
        selector: row => row.name,
    },
    {
        name: 'Account Number',
        selector: row => row.accountnumber,
    },
    {
        name: 'Balance',
        selector: row => row.balance,
    }
];

const rows = [
    {
        id: 1,
        name: "client 1",
        accountnumber: 1001,
        balance: 20000
    },
    {
        id: 2,
        name: "client 2",
        accountnumber: 1002,
        balance: 30000
    },
    {
        id: 3,
        name: "client 3",
        accountnumber: 1003,
        balance: 10000
    },
    {
        id: 4,
        name: "jk",
        accountnumber: 1004,
        balance: 30000
    },
    {
        id: 5,
        name: "client 5",
        accountnumber: 1005,
        balance: 10000
    },
]

function AdminPage() {
    const [data, setData] = useState(rows);
    const handleSearch = (e) => {
        const searchTerm = e.target.value.toLowerCase();
    
        const newRows = rows.filter((row) => {
            const idMatch = row.id.toString().toLowerCase().includes(searchTerm);
            const nameMatch = row.name.toLowerCase().includes(searchTerm);
            const accountNumberMatch = row.accountnumber.toString().toLowerCase().includes(searchTerm);
            const balanceMatch = row.balance.toString().toLowerCase().includes(searchTerm);
    
            return idMatch || nameMatch || accountNumberMatch || balanceMatch;
        });
    
        setData(newRows);
    };
    
    return (
        <div>
            {/* navbar */}
            <div className="nav-bar">
                <div className="bank-logo">
                    <h1 className='name'>JKVIN</h1>
                    <h4 className='name2'>Bank</h4>
                </div>
                <button className='logout-btn'>Logout</button>
            </div>
            <div>
                 <h1 className='para1'>Admin panel</h1>
                <p className='para2'>Here are the customer list of your Bank </p>
            </div>
            <input
                type="search"
                className="search-input"
                placeholder="Search"
                onChange={handleSearch}
            />
            <div className='datatable'>
                <DataTable
                    columns={columns}
                    data={data}
                    fixedHeader
                    responsive
                    striped
                    highlightOnHover
                />
            </div>

        </div>
    )
}

export default AdminPage
import { useEffect, useState } from "react"

export default function Customers() {
    const [customers, setCustomers] = useState([]);

    const fetchCustomersData = () => {

        fetch('api/Customers')

            .then(res => {
                return res.json()
            })

            .then(data => {
                setCustomers(data)
            })
    }

    useEffect(() => {
        fetchCustomersData();
    }, [])


    return (
        <div className="customers-list">
            <ul>
                { customers != null ? (
                    customers.map(customer => <li key={customer.id}><span>{customer.name} {customer.address}</span></li>)
                    ) : (<li>Loading....</li>)
                }
            </ul>

        </div>
    );
}
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Dashboard() {
    let key = '4c2f4591ac10f7e5f05cf38c14a97794';

    // let { symbol } = useParams(); // -> { symbol: ''}

    // console.log(symbol);

    let url = `https://financialmodelingprep.com/api/v3/quote/AAPL,META,GOOG,MSFT,ORCL,INTC?apikey=${key}`;

    let [stockData, setstockData] = useState([]);

    // let navigate = useNavigate() //->returns a function

    async function getstockData() {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setstockData(data);
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        getstockData();
    }, [] );


    // console.log(stockData);

    function goBack() {
        // navigate(-1)
    }


    return (
        <div>
            <h1>
                Most Active Stocks
            </h1>
            <table className="dashboardTableDiv">
                <thead>
                    <tr>
                        <th>Company Name</th>
                        <th>Price</th>
                        <th>Change</th>
                    </tr>
                </thead>
                <tbody>
                    {stockData.map(stock => {
                        return (
                            <tr key={stock.name}>
                                <td><Link to={`/stocks/${stock.symbol}`}>
                                    {stock.name} ({stock.symbol})
                                </Link>
                                </td>
                                <td>{stock.price}</td>
                                <td>{stock.change}</td>
                            </tr>
                        )
                    })}   
                </tbody>
            </table>

        </div>
    )
}
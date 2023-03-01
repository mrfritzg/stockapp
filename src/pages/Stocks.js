import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Stocks(props) {
    let key = '4c2f4591ac10f7e5f05cf38c14a97794';

    let { symbol } = useParams(); // -> { symbol: ''}

    // console.log(symbol);

    let url = `https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=${key}`;

    let [ stockQuote, setStockQuote ] = useState({});

    let navigate = useNavigate() //->returns a function

    async function getStockQuote() {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setStockQuote(data);
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        getStockQuote();
    }, [] ) ;

    // console.log(stockQuote);

function goBack() {
navigate(-1)
}    
    return (
        <div>
            {/* {stockQuote.map( quote => { */}
                <h1>
                    {/* {quote[0].name}  */}
                {/* ({stockQuote})  */}
                </h1>
            {/* })} */}
            
        </div>
    )
}
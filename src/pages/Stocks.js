import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Stocks(props) {
    let key = '4c2f4591ac10f7e5f05cf38c14a97794';

    let { symbol } = useParams(); // -> { symbol: ''}

    // console.log(symbol);

    let url = `https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=${key}`;

    let [ stockQuote, setStockQuote ] = useState([]);

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
    // stockQuote.map( quote => {
    //     console.log(quote.name)
    // })
function goBack() {
navigate(-1)
}    
    return (
        <div>
            {stockQuote.map( quote => { 
                return (
                    <div key ={quote.symbol}>
                <h1> {quote.name} ({quote.symbol}) </h1>
                <h2>Exchange: {quote.exchange}</h2>
                <p>Price: {quote.price}</p>
                <p>Change: {quote.change}</p>
                <p>Market Cap{quote.marketCap}</p>
                <p>Year High: {quote.yearHigh}</p>
                <p>Year Low:{quote.yearLow}</p>
                <p>Avergae Volume: {quote.avgVolume}</p>
                <p>Open: {quote.open}</p>
                <p>Previous Close: {quote.previousClose}</p>
                <p>Shares Outstanding: {quote.sharesOutstanding}</p>
</div>
                )
             })}
            
        </div>
    )
}
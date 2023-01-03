import React, { useState, useEffect } from "react";

function PortfolioTracker() {
  let [stocks, setStocks] = useState([
    { sticker: "GOOG", name: "Google", qty: 20, price: 0 },
    { sticker: "APPL", name: "APPLE", qty: 10, price: 0 },
    { sticker: "FB", name: "Facebook", qty: 400, price: 0 },
    { sticker: "AMZN", name: "Amazon", qty: 50, price: 0 },
  ]);
  let [newStock, setNewStock] = useState({});
  let [sticker, setSticker] = useState("");
  let [qty, setQty] = useState("");
  let [data, setData] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "6d5a7e219dmsh92dcccd43215067p1f8b09jsn5c7301bcd7ef",
        "X-RapidAPI-Host": "real-time-finance-data.p.rapidapi.com",
      },
    };

    let info = fetch(
      `https://real-time-finance-data.p.rapidapi.com/stock-quote?symbol=GOOG`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        let newArray = [...stocks];
        newArray[0].price = response.data.price;
        setData(response.data);
      })
      .catch((err) => console.error(err));
  }, []);
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "6d5a7e219dmsh92dcccd43215067p1f8b09jsn5c7301bcd7ef",
        "X-RapidAPI-Host": "real-time-finance-data.p.rapidapi.com",
      },
    };

    let info = fetch(
      `https://real-time-finance-data.p.rapidapi.com/stock-quote?symbol=AAPL`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        let newArray = [...stocks];
        newArray[1].price = response.data.price;
        setData(response.data);
      })
      .catch((err) => console.error(err));
  }, []);
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "6d5a7e219dmsh92dcccd43215067p1f8b09jsn5c7301bcd7ef",
        "X-RapidAPI-Host": "real-time-finance-data.p.rapidapi.com",
      },
    };

    let info = fetch(
      `https://real-time-finance-data.p.rapidapi.com/stock-quote?symbol=FB`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        let newArray = [...stocks];
        newArray[2].price = response.data.price;
        setData(response.data);
      })
      .catch((err) => console.error(err));
  }, []);
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "6d5a7e219dmsh92dcccd43215067p1f8b09jsn5c7301bcd7ef",
        "X-RapidAPI-Host": "real-time-finance-data.p.rapidapi.com",
      },
    };

    let info = fetch(
      `https://real-time-finance-data.p.rapidapi.com/stock-quote?symbol=AMZN`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        let newArray = [...stocks];
        newArray[3].price = response.data.price;
        setData(response.data);
      })
      .catch((err) => console.error(err));
  }, []);

  let handleChange1 = ({ target }) => {
    let text = target.value;
    setSticker(text.toUpperCase());
  };
  let handleChange2 = ({ target }) => {
    let number = target.value;
    setQty(number);
  };

  let handleDelete = (stock) => {
    let copyArray = [...stocks];
    let filteredArray = copyArray.filter((element) => element !== stock);
    setStocks(filteredArray);
  };

  let handleAdd = () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "6d5a7e219dmsh92dcccd43215067p1f8b09jsn5c7301bcd7ef",
        "X-RapidAPI-Host": "real-time-finance-data.p.rapidapi.com",
      },
    };

    let info = fetch(
      `https://real-time-finance-data.p.rapidapi.com/stock-quote?symbol=${sticker}`,
      options
    )
      .then((response) => response.json())
      .then((response) => setData(response.data))
      .catch((err) => console.error(err));
  };
  return (
    <>
      <div className="portfolio_box">
        <div className="portfolio_searchbox">
          <input
            className="portfolio_input1"
            type="text"
            id="stock"
            name="stock"
            placeholder="Stock Sticker"
            onChange={handleChange1}
            value={sticker}
          ></input>
          <input
            className="portfolio_input2"
            type="number"
            id="qty"
            name="qty"
            placeholder="Quantity"
            onChange={handleChange2}
            value={qty}
          ></input>
        </div>
        <button className="btn btn-yellow" onClick={handleAdd}>
          ADD STOCK
        </button>
      </div>
      <div className="portfolio_table">
        <table>
          <thead>
            <tr>
              <th>Sticker</th>
              <th>Name</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {stocks.map((stock) => (
              <tr key={stock.sticker}>
                <td>{stock.sticker}</td>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.price}</td>
                <td>{stock.price * stock.qty}</td>
                <td>
                  <button
                    className="btn-delete"
                    onClick={() => handleDelete(stock)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default PortfolioTracker;

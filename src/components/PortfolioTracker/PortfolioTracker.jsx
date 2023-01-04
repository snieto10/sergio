import React, { useState, useEffect } from "react";

function PortfolioTracker() {
  let [stocks, setStocks] = useState([
    { sticker: "GOOG", name: "Google", qty: 20, price: 0 },
    { sticker: "APPL", name: "APPLE", qty: 10, price: 5 },
    { sticker: "FB", name: "Facebook", qty: 400, price: 0 },
    { sticker: "AMZN", name: "Amazon", qty: 50, price: 0 },
  ]);
  let [newStock, setNewStock] = useState({});
  let [sticker, setSticker] = useState("");
  let [qty, setQty] = useState("");
  let [data, setData] = useState([]);
  let [validation, setValidation] = useState(0);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "cd157152ddmsh362115c98e02a68p1c16b9jsn86a839c24f3b",
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
    if (sticker.length === 0 && qty.length === 0) {
      setValidation(1);
    }
    if (sticker.length === 0 && qty.length > 0) {
      setValidation(2);
    }
    if (sticker.length > 0 && qty.length === 0) {
      setValidation(3);
    }
    if (sticker.length !== 0 && qty.length !== 0) {
      setValidation(0);
      let clonedArray = [...stocks];
      clonedArray.push({
        sticker: sticker,
        name: "Amazon",
        qty: qty,
        price: 10,
      });
      setStocks(clonedArray);
      setSticker("");
      setQty("");
    }
  };
  return (
    <>
      <div className="portfolio_box">
        <div className="portfolio_searchbox">
          <form>
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
          </form>
        </div>
        <button className="btn btn-yellow" onClick={handleAdd}>
          ADD STOCK
        </button>
      </div>
      {validation === 1 ? (
        <div className="validation">Please add Stock Sticker and Quantity</div>
      ) : null}
      {validation === 2 ? (
        <div className="validation">Please add Stock Sticker </div>
      ) : null}
      {validation === 3 ? (
        <div className="validation">Please add Quantity</div>
      ) : null}
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
      <div className="portfolio_total">
        TOTAL PORTFOLIO VALUE IS{" "}
        {stocks.reduce(
          (accumulator, value) => accumulator + value.price * value.qty,
          0
        )}
      </div>
    </>
  );
}

export default PortfolioTracker;

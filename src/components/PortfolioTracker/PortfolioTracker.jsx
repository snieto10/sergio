import React, { useState, useEffect } from "react";

function PortfolioTracker() {
  let [stocks, setStocks] = useState([
    { sticker: "GOOG", name: "Google", qty: 114, price: 0 },
    { sticker: "META", name: "Meta Platforms", qty: 79, price: 0 },
    { sticker: "AMZN", name: "Amazon", qty: 119, price: 0 },
  ]);
  let [sticker, setSticker] = useState("");
  let [qty, setQty] = useState("");
  let [validation, setValidation] = useState(0);
  let [sortSticker, setSortSticker] = useState(0);

  let apiKey = `${process.env.REACT_APP_STOCKS_API_KEY}`;

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": apiKey,
        "X-RapidAPI-Host": "real-time-finance-data.p.rapidapi.com",
      },
    };

    fetch(
      `https://real-time-finance-data.p.rapidapi.com/stock-quote?symbol=GOOG`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        let newArray = [...stocks];
        newArray[0].price = response.data.price.toFixed(2);
        setStocks(newArray);
      })
      .catch((err) => console.error(err));

    fetch(
      `https://real-time-finance-data.p.rapidapi.com/stock-quote?symbol=META`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        let newArray = [...stocks];
        newArray[1].price = response.data.price.toFixed(2);
        setStocks(newArray);
      })
      .catch((err) => console.error(err));

    fetch(
      `https://real-time-finance-data.p.rapidapi.com/stock-quote?symbol=AMZN`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        let newArray = [...stocks];
        newArray[2].price = response.data.price.toFixed(2);
        setStocks(newArray);
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
    console.log(1, stocks);
    let finder = stocks.find((element) => element.sticker == sticker);

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

      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": apiKey,
          "X-RapidAPI-Host": "real-time-finance-data.p.rapidapi.com",
        },
      };

      fetch(
        `https://real-time-finance-data.p.rapidapi.com/stock-quote?symbol=${sticker}`,
        options
      )
        .then((response) => response.json())
        .then((response) => {
          if (response.data.name === undefined) {
            setValidation(4);
          } else if (finder !== undefined) {
            setValidation(5);
          } else {
            let clonedArray = [...stocks];
            clonedArray.push({
              sticker: sticker,
              name: response.data.name,
              qty: qty,
              price: response.data.price.toFixed(2),
            });
            setStocks(clonedArray);
          }
        })
        .catch((err) => console.error(err));

      setSticker("");
      setQty("");
    }
  };

  let handleSortSticker = () => {
    if (sortSticker == 0) {
      let clonedArray = [...stocks];
      let newArray = clonedArray.sort((a, b) => {
        if (a.sticker < b.sticker) return -1;
        if (a.sticker > b.sticker) return 1;
        return 0;
      });
      setStocks(newArray);
      setSortSticker(1);
    }
    if (sortSticker == 1) {
      let clonedArray = [...stocks];
      let newArray = clonedArray.sort((a, b) => {
        if (a.sticker < b.sticker) return 1;
        if (a.sticker > b.sticker) return -1;
        return 0;
      });
      setStocks(newArray);
      setSortSticker(0);
    }
  };
  let handleSortPrice = () => {
    let clonedArray = [...stocks];
    let newArray = clonedArray.sort((a, b) => {
      return b.price - a.price;
    });
    setStocks(newArray);
  };
  let handleSortQty = () => {
    let clonedArray = [...stocks];
    let newArray = clonedArray.sort((a, b) => {
      return b.qty - a.qty;
    });
    setStocks(newArray);
  };

  let handleSortName = () => {
    if (sortSticker == 0) {
      let clonedArray = [...stocks];
      let newArray = clonedArray.sort((a, b) => {
        let variableOne = a.name.toUpperCase();
        let variableTwo = b.name.toUpperCase();
        if (variableOne < variableTwo) return -1;
        if (variableOne > variableTwo) return 1;
        return 0;
      });
      setStocks(newArray);
      setSortSticker(1);
    }
    if (sortSticker == 1) {
      let clonedArray = [...stocks];
      let newArray = clonedArray.sort((a, b) => {
        let variableOne = a.name.toUpperCase();
        let variableTwo = b.name.toUpperCase();
        if (variableOne < variableTwo) return 1;
        if (variableOne > variableTwo) return -1;
        return 0;
      });
      setStocks(newArray);
      setSortSticker(0);
    }
  };

  let totalValue = stocks
    .reduce((accumulator, value) => accumulator + value.price * value.qty, 0)
    .toFixed(2)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  let newArray = [...stocks];
  let valueArray = [...newArray];

  newArray.forEach((stock, index) => {
    let number = stock.qty * stock.price;
    let fixed = number
      .toFixed(2)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    valueArray[index].value = fixed;
  });

  return (
    <>
      {" "}
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
      {validation === 4 ? (
        <div className="validation">Sticker does not exist</div>
      ) : null}
      {validation === 5 ? (
        <div className="validation">
          Sticker was already added. To change QTY, delete and add again.
        </div>
      ) : null}
      <div className="portfolio_table">
        <table>
          <thead>
            <tr>
              <th onClick={handleSortSticker}>Sticker</th>
              <th onClick={handleSortName}>Name</th>
              <th onClick={handleSortQty}>Qty</th>
              <th onClick={handleSortPrice}>Price</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {newArray.map((stock) => (
              <tr key={stock.sticker}>
                <td>{stock.sticker}</td>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{"$" + stock.price}</td>
                <td>{"$" + stock.value}</td>
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
        TOTAL PORTFOLIO VALUE IS {"$" + totalValue}
      </div>
    </>
  );
}

export default PortfolioTracker;

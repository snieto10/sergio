import React from "react";

import { useState, useRef } from "react";

function FinalTable({ data }) {
  const [list, setList] = useState(data);
  const [dragging, setDragging] = useState(false);
  const dragItem = useRef();
  const dragNode = useRef();

  const handleDragStart = (e, params) => {
    dragItem.current = params;
    dragNode.current = e.target;
    dragNode.current.addEventListener("dragend", handleDragEnd);
    setTimeout(() => {
      setDragging(true);
    }, 0);
  };

  const handleDragEnter = (e, params) => {
    const currentItem = dragItem.current;
    if (e.target !== dragNode.current) {
      setList((oldList) => {
        let newList = JSON.parse(JSON.stringify(oldList));
        newList[params.boxIndex].items.splice(
          params.itemIndex,
          0,
          newList[currentItem.boxIndex].items.splice(
            currentItem.itemIndex,
            1
          )[0]
        );
        dragItem.current = params;
        return newList;
      });
    }
  };

  const handleDragEnd = () => {
    setDragging(false);
    dragNode.current.removeEventListener("dragend", handleDragEnd);
    dragItem.current = null;
    dragNode.current = null;
  };

  const getStyles = (params) => {
    const currentItem = dragItem.current;
    if (
      currentItem.boxIndex === params.boxIndex &&
      currentItem.itemIndex === params.itemIndex
    ) {
      return "box-item-box current-box";
    }
    return "box-item-box";
  };

  let total = 0;
  list[1].items.forEach((element) => {
    total = total + element.price;
  });

  return (
    <>
      <div className="container-title-box">
        <div className="box-title-box">
          <span className="shopping-text">Products</span>
        </div>
        <div className="box-title-box">
          <span className="shopping-text">Shopping Cart</span>
        </div>
      </div>
      <div className="container-box-box">
        {list.map((element, boxIndex) => {
          return (
            <div
              className="box-box"
              key={element.title}
              onDragEnter={
                dragging && !element.items.length
                  ? (e) => handleDragEnter(e, { boxIndex, itemIndex: 0 })
                  : null
              }
            >
              {element.items.map((element, itemIndex) => (
                <div
                  onDragStart={(e) =>
                    handleDragStart(e, { boxIndex, itemIndex })
                  }
                  onDragEnter={
                    dragging
                      ? (e) => handleDragEnter(e, { boxIndex, itemIndex })
                      : null
                  }
                  key={itemIndex}
                  className={
                    dragging
                      ? getStyles({ boxIndex, itemIndex })
                      : "box-item-box"
                  }
                  draggable
                >
                  <div className="baby-box">
                    <div>{element.name}</div>
                    <div className="fruits">${element.price}</div>
                  </div>
                </div>
              ))}
            </div>
          );
        })}
      </div>
      <div className="container-title-box">
        <div className="box-title-box">
          <span className="shopping-text">Your total is ${total}.00</span>
        </div>
      </div>
    </>
  );
}

export default FinalTable;

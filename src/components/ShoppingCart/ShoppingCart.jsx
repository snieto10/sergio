import FinalTable from "./FinalTable";

function ShoppingCart() {
  const data = [
    {
      title: "box1",
      items: [
        { name: "banana", price: 6 },
        { name: "avocado", price: 8 },
        { name: "tomato", price: 4 },
        { name: "juice", price: 7 },
      ],
    },
    { title: "box2", items: [] },
  ];
  return (
    <>
      <FinalTable data={data} />
    </>
  );
}

export default ShoppingCart;

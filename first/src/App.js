import { useState, useRef } from "react";

function Item(prop) {
  return (
    <li>
      {prop.name}, {prop.price}
    </li>
  );
}

export default function App() {
  const [data, setData] = useState(
    [
      { id: 1, name: "Apple", price: 0.99 },
      { id: 2, name: "Orange", price: 0.89 }
    ]
  );

  const nameRef = useRef();
  const priceRef = useRef();

  const add = () => {
    const id = data.length + 1;
    const name = nameRef.current.value;
    const price = priceRef.current.value;

    setData([
      ...data,
      { id, name, price }
    ]);
  }

  return (
    <div>
      <h1>Hello React</h1>

      <ul>
        {data.map(i => (
          <Item key={i.id} name={i.name} price={i.price} />
        ))}
      </ul>

      <input type="text" ref={nameRef} placeholder="Name" /> <br />
      <input type="text" ref={priceRef} placeholder="Price" /> <br />

      <button onClick={add}>Add</button>
    </div>
  );

}
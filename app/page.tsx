"use client";
import { useState } from "react";
import Header from '../components/Header';

interface FoodItem {
  name: string;
  quantity: string;
}

export default function Home() {
  const [foodItems, setFoodItems] = useState<FoodItem[]>([]);
  const [foodName, setFoodName] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFoodItems([...foodItems, { name: foodName, quantity }]);
    setFoodName("");
    setQuantity("");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center p-24">
        <h1 className="text-4xl font-bold mb-8">Welcome to Bhumi App</h1>
        <form onSubmit={handleSubmit} className="mt-8">
          <input
            type="text"
            value={foodName}
            onChange={(e) => setFoodName(e.target.value)}
            placeholder="Food name"
            className="mr-2 p-2 border rounded text-black"
          />
          <input
            type="text"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="Quantity"
            className="mr-2 p-2 border rounded text-black"
          />
          <button type="submit" className="p-2 bg-green-500 text-white rounded">
            Add Food
          </button>
        </form>
        <div className="mt-4 w-full max-w-md">
          <h2 className="text-2xl font-bold mb-2">Food Items:</h2>
          <table className="w-full border-collapse shadow-lg bg-white">
            <thead>
              <tr className="bg-green-500 text-white">
                <th className="border border-green-600 p-2 text-left">Food Name</th>
                <th className="border border-green-600 p-2 text-left">Quantity</th>
              </tr>
            </thead>
            <tbody>
              {foodItems.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-green-100" : "bg-white"}>
                  <td className="border border-green-200 p-2 text-black">{item.name}</td>
                  <td className="border border-green-200 p-2 text-black">{item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
      <footer className="bg-green-500 text-white p-4 mt-auto">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Bhumi App. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
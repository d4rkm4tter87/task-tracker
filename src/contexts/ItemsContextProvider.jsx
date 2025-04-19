import { initialItems } from "../lib/constants.js";
import { createContext, useEffect, useState } from "react";

export const ItemsContext = createContext();

export default function ItemsContextProvider({ children }) {
  const [items, setItems] = useState(
    //() => JSON.parse(localStorage.getItem("items")) || initialItems
    () => initialItems
  );

  const handleAddItem = (newItemText) => {
    const newItem = {
      id: new Date().getTime(),
      name: newItemText,
      packed: false,
    };
    const newItems = [...items, newItem];
    setItems(newItems);
  };
  const handleRemoveAllItems = () => {
    setItems([]);
  };
  const handleResetToInital = () => {
    setItems(initialItems);
  };
  const handleMarkAllAsComplete = () => {
    const newItems = items.map((item) => ({
      ...item,
      packed: true,
    }));
    setItems(newItems);
  };
  const handleMarkAllAsIncomplete = () => {
    const newItems = items.map((item) => ({
      ...item,
      packed: false,
    }));
    setItems(newItems);
  };
  const handleDeleteItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };
  const handleToggleItem = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          packed: !item.packed,
        };
      }
      return item;
    });
    setItems(newItems);
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);
  return (
    <ItemsContext.Provider
      value={{
        items,
        handleAddItem,
        handleRemoveAllItems,
        handleResetToInital,
        handleMarkAllAsComplete,
        handleMarkAllAsIncomplete,
        handleDeleteItem,
        handleToggleItem,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
}

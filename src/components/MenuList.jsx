import { useEffect, useState } from "react";
import MenuItem from "./MenuItem"; // adjust path as needed

function MenuList() {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(function() {
    fetch("http://localhost:3000/menuItems")
      .then(function(res) {
        if (!res.ok) {
          throw new Error("Failed to fetch menu items");
        }
        return res.json();
      })
      .then(function(data) {
        setMenuItems(data);
      })
      .catch(function(err) {
        console.error(err);
      });
  }, []);

  return (
    <>
      {menuItems.map(function(item) {
        return <MenuItem key={item.id} item={item} />;
      })}
    </>
  );
}

export default MenuList;
import { useState, useEffect } from "react";

function SearchBar({ setSearch }) {

  const [input, setInput] = useState("");

  useEffect(() => {

    const timer = setTimeout(() => {
      setSearch(input);
    }, 500);

    return () => clearTimeout(timer);

  }, [input, setSearch]);

  return (
    <input
      type="text"
      placeholder="Search products..."
      value={input}
      onChange={(e) => setInput(e.target.value)}
    />
  );
}

export default SearchBar;
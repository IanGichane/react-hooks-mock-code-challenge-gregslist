import React from "react";
import Search from "./Search";

function Header() {
  const [searchTerm, setSearchTerm] = useState("");

  	const filteredTransactions = transactions.filter((transaction) =>
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    </header>
  );
}

export default Header;

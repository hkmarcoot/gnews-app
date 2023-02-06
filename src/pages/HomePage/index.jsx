import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h1 className="text-blue-300 text-3xl font-bold underline">
        This is the Home Page
      </h1>
      <Link to="/">Homepage</Link>
      <Link to="/faqpage">FAQ Page</Link>
      <Link to="/contactpage">Contact Page</Link>
    </div>
  );
}

export default HomePage;

import React from "react";
import { Link } from "react-router-dom";

function ContactPage() {
  return (
    <div>
      <h1 className="text-green-300 text-3xl font-bold underline">
        This is the Contact Page
      </h1>
      <Link to="/">Homepage</Link>
      <Link to="/faqpage">FAQ Page</Link>
      <Link to="/contactpage">Contact Page</Link>
    </div>
  );
}

export default ContactPage;

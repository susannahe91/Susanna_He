// import React, { useState, useEffect } from "react";
import "./QuoteCard.css";

function QuoteCard(props) {
  const { quoteText, quoteSource } = props;

  return (
    <blockquote className="quote-container">
      <div className="large-quotation-mark">"</div>
      <p>{quoteText}"</p>
      <div className="quote-source">— {quoteSource}</div>
    </blockquote>
  );
}

export default QuoteCard;

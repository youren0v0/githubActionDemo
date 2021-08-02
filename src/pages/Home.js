import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="Home">
      <h1>主页</h1>
      <Link to="/app">应用1</Link>
    </div>
  );
}

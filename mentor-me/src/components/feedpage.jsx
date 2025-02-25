import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./feedpage.css";
import { UserContext } from "../UserContext.js";

const FeedPage = () => {
    const posts = [
      { id: 1, user: "Alice", content: "Just had an amazing coffee! ☕" },
      { id: 2, user: "Bob", content: "Loving the new React update! 🚀" },
      { id: 3, user: "Charlie", content: "What a beautiful day outside! ☀️" },
    ];
  
    return (
      <div className="feed-container">
        <h2 className="feed-title">Feed</h2>
        <div className="feed-list">
          {posts.map((post) => (
            <div key={post.id} className="feed-item">
              <h3 className="feed-user">{post.user}</h3>
              <p className="feed-content">{post.content}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default FeedPage;
import React from "react";
import "./feedpage.css";

const FeedPage = () => {
  const newsArticles = [
    {
      id: 1,
      title: "Breaking: Major Event Unfolds",
      content: "A major event is happening right now with significant global impact...",
      image: "https://via.placeholder.com/300",
      author: "Alice Johnson",
      date: "March 18, 2025"
    },
    {
      id: 2,
      title: "Tech Innovations in 2025",
      content: "AI and robotics continue to evolve, shaping the future of technology...",
      image: "https://via.placeholder.com/300",
      author: "Bob Williams",
      date: "March 17, 2025"
    },
    {
      id: 3,
      title: "New Discovery in Space",
      content: "Scientists have discovered a new exoplanet that could support life...",
      image: "https://via.placeholder.com/300",
      author: "Charlie Smith",
      date: "March 16, 2025"
    },
    {
      id: 4,
      title: "Global Markets See Significant Change",
      content: "Stock markets around the world experienced unexpected fluctuations...",
      image: "https://via.placeholder.com/300",
      author: "Timothy Clark",
      date: "March 15, 2025"
    },
    {
      id: 5,
      title: "Breaking: Major Event Unfolds",
      content: "A major event is happening right now with significant global impact...",
      image: "https://via.placeholder.com/300",
      author: "Alice Johnson",
      date: "March 18, 2025"
    },
    {
      id: 6,
      title: "Breaking: Major Event Unfolds",
      content: "A major event is happening right now with significant global impact...",
      image: "https://via.placeholder.com/300",
      author: "Alice Johnson",
      date: "March 18, 2025"
    },
    {
      id: 7,
      title: "Global Markets See Significant Change",
      content: "Stock markets around the world experienced unexpected fluctuations...",
      image: "https://via.placeholder.com/300",
      author: "Timothy Clark",
      date: "March 15, 2025"
    },
    {
      id: 8,
      title: "Global Markets See Significant Change",
      content: "Stock markets around the world experienced unexpected fluctuations...",
      image: "https://via.placeholder.com/300",
      author: "Timothy Clark",
      date: "March 15, 2025"
    },
    {
      id: 9,
      title: "Global Markets See Significant Change",
      content: "Stock markets around the world experienced unexpected fluctuations...",
      image: "https://via.placeholder.com/300",
      author: "Timothy Clark",
      date: "March 15, 2025"
    },
  ];

  return (
    <div className="feed-container">
      <h2 className="feed-title">Opportunities and News!</h2>
      <div className="feed-list">
        {newsArticles.map((article) => (
          <div key={article.id} className="feed-item">
            <img src={article.image} alt={article.title} className="feed-image" />
            <h3 className="feed-headline">{article.title}</h3>
            <p className="feed-content">{article.content}</p>
            <p className="feed-meta">By {article.author} • {article.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedPage;

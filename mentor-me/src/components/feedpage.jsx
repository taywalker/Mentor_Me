import React from "react";
import "./feedpage.css";
import FBI_Internship from './FeedPage_Images/FBI_Internship.jpeg';
import Chevron_TMCF from './FeedPage_Images/Chevron_TMCF.jpeg'
import Harvard_BusinessSchool from './FeedPage_Images/Harvard_BusinessSchool.jpg'
import Google_Scholarship from './FeedPage_Images/Google_Scholarship.jpg'
import Virtual_CareerFair from './FeedPage_Images/Virtual_CareerFair.jpg'
import Aamu_Sign from './FeedPage_Images/Aamu_Sign.jpg'
const FeedPage = () => {
  const newsArticles = [
    {
      id: 1,
      title: "FBI Honors Program Internship",
      content: "Description:10-week paid internship for students pursuing associate, bachelor's, and advanced degrees who are ready work in federal law enforcement. Application Deadline: May 2, 2025.",
      image: FBI_Internship,
      author: "Alice Johnson",
      date: "Posted: March 20, 2025",
      link: "https://ow.ly/2QzB50VtytO"
    },
    {
      id: 2,
      title: "Chevron Energy Innovation Summit",
      content: "Description: A 4-day immersive experience hosted by TMCF and Chevron for HBCU/PBI freshmen and sophomores interested in the energy sector. Participants will engage in business case competitions, network with Chevron executives, and gain access to internship opportunities, scholarships, and exclusive industry insights. Application deadline: May 12, 2025.",
      image: Chevron_TMCF,
      author: "Bob Williams",
      date: "March 20, 2025",
      link:"https://careers-tmcf.icims.com/jobs/1574/2025-chevron-energy-summit"
    },
    {
      id: 3,
      title: "Harvard SVMP",
      content: "The Summer Venture in Management Program is a four-day, on-campus experience at Harvard Business School for high-achieving juniors and seniors. Designed to introduce students to the MBA experience, the program focuses on leadership, business education, and real-world impact through the case method. Ideal for students making a difference in their communities. Application deadline: March 28, 2025.",
      image: Harvard_BusinessSchool,
      author: "Charlie Smith",
      date: "March 19, 2025",
      link:"https://www.hbs.edu/mba/admissions/college-students/svmp"
    },
    {
      id: 4,
      title: "Google Academic & Conference Scholarships",
      content: "Explore a range of scholarships designed to support and inspire students pursuing careers in technology. Open to those in post-secondary education, these opportunities include funding for academics and travel, helping future tech leaders grow and connect. Application Deadline: Multiple Dates",
      image: Google_Scholarship,
      author: "Timothy Clark",
      date: "March 17, 2025",
      link: "https://buildyourfuture.withgoogle.com/scholarships"
    },
    {
      id: 5,
      title: "Spring 2025 Mini Virtual Career Fair",
      content: "Alabama A&M University invites graduating students and alumni to connect with employers during the Spring 2025 Mini Virtual Fair. Held via Handshake, this event offers opportunities to explore full-time, co-op, and internship roles. Date: May 13, 2025",
      image: Virtual_CareerFair,
      author: "Alice Johnson",
      date: "March 16, 2025",
      link: "https://www.aamu.edu/calendar/index.php?eID=4157"
    },
    {
      id: 6,
      title: "TMCF AAMU/DSTC Student Mentor Opportunity",
      content: "A leadership role for college students to mentor high school seniors during a week-long summer program hosted by AAMU & DSTC. Mentors will guide students through personal development, college and career exploration, leadership training, and team-building activities while serving as role models and facilitators. Application Deadline: March 14, 2025",
      image: Aamu_Sign,
      author: "Alice Johnson",
      date: "March 15, 2025",
      link:"https://docs.google.com/forms/d/e/1FAIpQLSeR98XAf-QiS2N14fh7LMkfiOZ9THpEgHzp9chpwusy9Kbiww/viewform"
    },

  ];

  return (
    <div className="feed-container">
      <h2 className="feed-title">Opportunities and News!</h2>
      <div className="feed-list">
        {newsArticles.map((article) =>
          article.link ? (
            <a
              key={article.id}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="feed-link-wrapper"
            >
              <div className="feed-item">
                <img src={article.image} alt={article.title} className="feed-image" />
                <h3 className="feed-headline">{article.title}</h3>
                <p className="feed-content">{article.content}</p>
                <p className="feed-meta">By {article.author} • {article.date}</p>
              </div>
            </a>
          ) : (
            <div key={article.id} className="feed-item">
              <img src={article.image} alt={article.title} className="feed-image" />
              <h3 className="feed-headline">{article.title}</h3>
              <p className="feed-content">{article.content}</p>
              <p className="feed-meta">By {article.author} • {article.date}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
};
  

export default FeedPage;

import React from "react";
import InfoIcon from "@mui/icons-material/Info";
import { FiberManualRecord } from "@mui/icons-material";
import "./widgets.css";
const Widgets = () => {
  const newsArticle = (heading, subtitle) => {
    return (
      <div className="widgets_article">
        <div className="widgets_articleLeft">
          <FiberManualRecord className="widgets_articleLeft_icon" />
        </div>
        <div className="widgets_articleRight">
          <h4>{heading}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="widgets">
      <div className="widgets_header">
        <h2>LinkedIn News</h2>
        <InfoIcon className="widgets_header_icon" />
      </div>
      <div className="news_article">
        {newsArticle("Making students future-ready", "Top news.4374 readers")}
        {newsArticle("Physics Wallah to hire 2500", "4 days ago.3314 readers")}
        {newsArticle(
          "How India Inc is using ChatGPT",
          "2 days ago.2350 readers"
        )}
        {newsArticle(
          "Bjyu's makes fresher jobs cut",
          "2 days ago.1640 readers"
        )}
        {newsArticle(
          "Salaries of senior execs rise",
          "3 days ago.1452 readers"
        )}
        {newsArticle(
          "Unpacking the Budget: Key takeaways",
          "3 days ago.1020 readers"
        )}
        {newsArticle("Adani Enterprises cancel FPO", "3 days ago.654 readers")}
        {newsArticle(
          "What the budget means for insurance",
          "2 days ago.178 readers"
        )}
        {newsArticle("How to cope with adversity", "1 day ago.89 readers")}
      </div>
    </div>
  );
};
export default Widgets;

import React from "react";

const EmailItem = ({ content }) => {
  return (
    <div>
      <p>Subject: {content.subject}</p>
    </div>
  )
};

export default EmailItem;
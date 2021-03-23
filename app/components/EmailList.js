import React from "react";
import EmailItem from "./EmailItem";
import { useSelector } from "react-redux";

const EmailList = () => {
  const { emailsById, emailsIdArray} = useSelector((state) => ({
    emailsById: state.emailsById,
    emailsIdArray: state.emailsIdArray
  }));
  return (
    <div >
      {emailsIdArray.map(id => {
        return (
          <EmailItem
            key={id}
            content={emailsById[id]}
          />
        );
      })}
    </div>
  )
};

export default EmailList;
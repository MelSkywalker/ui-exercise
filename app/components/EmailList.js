import React from "react";
import { useSelector } from "react-redux";
import { emailSelector } from '../redux/selectors';
import EmailItem from "./EmailItem";

const EmailList = () => {
  const { emailsById, emailsIdArray } = useSelector(emailSelector);
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
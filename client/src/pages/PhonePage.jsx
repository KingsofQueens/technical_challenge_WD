import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PhoneContent from "../components/PhoneContent";
import { phoneLoadSingle } from "../services/phone";

const PhonePage = () => {
  const { id } = useParams();
  const [phone, setPhone] = useState([]);
  useEffect(() => {
    phoneLoadSingle(id).then((data) => {
      setPhone(data.phone);
    });
  }, []);

  return <div>{phone && <PhoneContent phone={phone} />}</div>;
};

export default PhonePage;

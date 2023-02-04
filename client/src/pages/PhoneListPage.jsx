import React, { useEffect, useState } from "react";
import PhoneList from "../components/PhoneList";
import { phoneLoadAll } from "../services/phone";

const PhoneListPage = () => {
  const [phones, setPhones] = useState([]);
  useEffect(() => {
    phoneLoadAll().then((data) => {
      setPhones(data.phones);
    });
  }, []);
  //   console.log(phones);

  return (
    <div>
      <h1>Phone List</h1>
      {phones.length && <PhoneList phones={phones} />}
    </div>
  );
};

export default PhoneListPage;

import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvaider/AuthProvaider";

const Myreveow = () => {
  const { user } = useContext(AuthContext);
  const [reveos, setReveos] = useState([]);
  console.log(reveos);
  useEffect(() => {
    fetch(`http://localhost:5000/reveousbyemail/?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          setReveos(data.data);
        }
      });
  }, [user?.email]);
  return (
    <div>
      this is my reveow page
      <p>{reveos.length}</p>
    </div>
  );
};

export default Myreveow;

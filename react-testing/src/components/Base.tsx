import React, { useEffect } from "react";
import Loading from "./Loading";
import Hello from "./Hello";

const Base = () => {
  const [show, setShow] = React.useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true);
    }, 2500);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div>
      ====== Base ======
      {!show && <Loading></Loading>}
      {show && <Hello></Hello>}
    </div>
  );
};

export default Base;

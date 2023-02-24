import React, { useEffect } from "react";
import { usePageContext } from "../../renderer/usePageContext";

const Page = (params: any) => {
  const pageContext: any = usePageContext();
  useEffect(() => {
    console.log(pageContext);
    console.log(params);
  }, []);
  return (
    <div>
      <h1>Edit Movie edit</h1>
    </div>
  );
};

export { Page };

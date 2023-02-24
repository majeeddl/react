// /pages/product/edit.page.route.js

import partRegex from "part-regex";

export default (pageContext: any) => {
  // Route guard
  // if (!pageContext.user.isAdmin) {
  //   return false;
  // }

  // We can use RegExp / any library we want
  if (!partRegex`/film/${/[0-9]+/}/edit`.test(pageContext.urlPathname)) {
    return false;
  }
  const id = pageContext.urlPathname.split("/")[2];

  return {
    // Make `id` available as pageContext.routeParams.id
    routeParams: { id },
  };
};

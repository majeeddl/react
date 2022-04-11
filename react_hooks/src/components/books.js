import { useQuery, gql } from "@apollo/client";
import { useEffect, useState } from "react";
import { getBooksQuery } from "../graphQL/queries";

const getBooks = () => {
  const { error, loading, data } = useQuery(getBooksQuery);

  const [books, setBooks] = useState([]);

  useEffect(() => {
    console.log(data);
    setBooks(data.books);
  }, [data]);

  return (
    <div>
      <div>GET BOOKS :</div>

      <div>
        <ul>
          {books.map((book) => {
            return <li key={book.title}>{book.title}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default getBooks;

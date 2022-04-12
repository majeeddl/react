import { useQuery, gql, useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import { createBookMutation } from "../graphQL/mutations";
import { getBooksQuery } from "../graphQL/queries";

const getBooks = () => {
  const { error, loading, data, refetch } = useQuery(getBooksQuery);

  const [books, setBooks] = useState([]);

  useEffect(() => {
    console.log(data);
    if (data) {
      setBooks(data.books);
    }
  }, [data]);

  const [createBook, { createBookError }] = useMutation(createBookMutation);

  const createBookHander = () => {
    createBook({
      variables: {
        title: "The book 3",
        author: "majeed",
      },
    });

    if (createBookError) {
      console.log(createBookError);
    }
  };

  return (
    <div>
      <div>GET BOOKS :</div>

      <div>
        <button type="button" onClick={() => refetch()}>
          Refetch
        </button>
      </div>
      <div>
        <ul>
          {books.map((book) => (
            <li key={book.title}>
              {book.title} - {book.author}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <button type="button" onClick={createBookHander}>
          Create Book
        </button>
      </div>
    </div>
  );
};

export default getBooks;

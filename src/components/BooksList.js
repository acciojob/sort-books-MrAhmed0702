import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks, setSortBy, setSortOrder } from "../redux/actions";

const BooksList = () => {
  const dispatch = useDispatch();
  const { books, loading, error, sortBy, sortOrder } = useSelector(state => state);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const sortedBooks = [...books].sort((a, b) => {
    const valA = a[sortBy]?.toLowerCase?.() || "";
    const valB = b[sortBy]?.toLowerCase?.() || "";

    if (sortOrder === "asc") return valA.localeCompare(valB);
    return valB.localeCompare(valA);
  });

  return (
    <div style={{ padding: "20px" }}>
      <h2>Books List</h2>

      {/* SORT BY DROPDOWNS  */}
      <select value={sortBy} onChange={(e) => dispatch(setSortBy(e.target.value))}>
        <option value="title">Title</option>
        <option value="author">Author</option>
        <option value="publisher">publisher</option>
      </select>

      <select value={sortOrder} onChange={(e) => dispatch(setSortOrder(e.target.value))}>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>

      {/* LOADING / ERROR */}
      {loading && <p>Loading...</p>}
      {error && <p>Error fetching books</p>}

      {/* BOOKS TABLE */}
      {!loading && !error && (
        <table border="1" style={{ marginTop: "20px", width: "100%" }}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Publisher</th>
              <th>ISBN</th>
            </tr>
          </thead>
          <tbody>
            {sortedBooks.map((b, index) => (
              <tr key={index}>
                <td>{b.title}</td>
                <td>{b.author}</td>
                <td>{b.publisher}</td>
                <td>{b.primary_isbn13}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default BooksList;

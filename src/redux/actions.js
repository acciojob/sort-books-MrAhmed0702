export const FETCH_BOOKS_REQUEST = "FETCH_BOOKS_REQUEST";
export const FETCH_BOOKS_SUCCESS = "FETCH_BOOKS_SUCCESS";
export const FETCH_BOOKS_ERROR = "FETCH_BOOKS_ERROR";
export const SET_SORT_BY = "SET_SORT_BY";
export const SET_SORT_ORDER = "SET_SORT_ORDER";

// Fetch Books
export const fetchBooks = () => async (dispatch) => {
  dispatch({ type: FETCH_BOOKS_REQUEST });

  try {
    const res = await fetch("https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=demo");
    const data = await res.json();

    const formatted = data.results.books.map(b => ({
      title: b.title,
      author: b.author,
      publisher: b.publisher,
      primary_isbn13: b.primary_isbn13
    }));

    dispatch({ type: FETCH_BOOKS_SUCCESS, payload: formatted });
  } catch (err) {
    dispatch({ type: FETCH_BOOKS_ERROR });
  }
};

// Sorting
export const setSortBy = (value) => ({
  type: SET_SORT_BY,
  payload: value
});

export const setSortOrder = (value) => ({
  type: SET_SORT_ORDER,
  payload: value
});

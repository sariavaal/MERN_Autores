import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DeleteAuthor from "./DeleteAuthor";

const AuthorList = () => {
  const [authors, setAuthors] = useState([]);
  const [sortedAuthors, setSortedAuthors] = useState([]);

  const fetchAuthors = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/author");
      setAuthors(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAuthors();
  }, []);

 useEffect(() => {
    const intervalId = setInterval(() => {
      fetchAuthors();
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    setSortedAuthors([...authors].sort((a, b) => a.name.localeCompare(b.name)));
  }, [authors]);

  return (
    <div className="row justify-content-center">
      <div className="col-6 p-5">
        <h3 className="text-center">Favorite Authors</h3>
        <Link to="/new">Add an author</Link>
        <h3>we have quotes by:</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Author</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {sortedAuthors.map((author) => {
              return (
                <tr key={author._id}>
                  <td>
                    {author.name} {author.lastName}
                  </td>
                  <td>
                    <button className="btn btn-info" style={{ margin: "5px" }}>
                      <Link to={`/update/${author._id}`} className="text-white text-decoration-none">Edit</Link>
                    </button>
                    <button
                      className="btn btn-danger"
                      style={{ margin: "5px" }}
                      onClick={() => DeleteAuthor(author._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AuthorList;

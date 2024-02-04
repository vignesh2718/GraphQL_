import "./App.css";
import { gql, useQuery } from "@apollo/client";

const query = gql`
  query GetThings {
    getAllPost {
      id
      title
      body
      user {
        id
      }
    }
  }
`;
function App() {
  const { loading, error, data } = useQuery(query);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="container">
      <h1>Posts</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Post-id</th>
            <th>Post-Title</th>
            <th>Body</th>
            <th>User ID</th>
          </tr>
        </thead>
        <tbody>
          {data.getAllPost.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
              <td>{post.user.id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default App;

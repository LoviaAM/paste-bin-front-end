import  { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import DeletePost from "./DeletePost";
import EditPost from "./EditPost";
import { pastes } from "../utils/interface";

// fetch the api information int
// render the mapped version of database rendering into table

export default function PostTable(): JSX.Element {
  const [posts, setPosts] = useState<pastes[]>([]); //going to bring in an array of objects that will be mapped through-  go back react notes with useEfect

  const getPosts = async () => {
    // typing for json body requests look back on notes
    try {
      const response = await fetch("http://localhost:4000/viewpost");
      const jsonData: pastes[] = await response.json();
      console.log(jsonData);
      setPosts(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Post Number</th>
            <th>Description</th>
            <th>Title</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post: pastes) => (
            <tr key={post.post_id}>
              <td>{post.post_id}</td>
              <td>{post.post_description}</td>
              <td>{post.post_title}</td>
              <td>
                <EditPost post={post} />
              </td>
              <td>
                <DeletePost post={post} posts={posts} onPostChange={setPosts} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
  // including CDN, bootstrap CSS styles into
}

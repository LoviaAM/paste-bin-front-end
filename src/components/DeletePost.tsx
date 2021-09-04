
// import pastes from "./PostTable"
import { listOfPastes } from "../utils/interface";

export default function DeletePost({
  post,
  posts,
  onPostChange,
}: listOfPastes): JSX.Element {
  //passing the state and function as deconstructed props into te functions component
  const deletePost = async (id: number) => {
    try {
      //delete id specified as the parameter
       await fetch(`https://sleepy-mountain-69917.herokuapp.com/${id}`, {
        method: "DELETE",
      });
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <button className="btn btn-danger" onClick={() => deletePost(post.post_id)}>
      Delete
    </button>
  );
}
// passing the state from post table into the delete function

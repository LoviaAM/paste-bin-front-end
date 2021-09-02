import react from "react";
// import pastes from "./PostTable"
import {listOfPastes } from "../utils/interface" 


export default function DeletePost ({post, posts,onPostChange}: listOfPastes): JSX.Element { //passing the state and function as deconstructed props into te functions component 
    const deletePost  = async(id : number) => {
         try{
             //delete id specified as the parameter
             const deletePost = await fetch(`http://localhost:4000/post/${id}`,{
                 method: "DELETE"
             })
        }catch (err){
            console.error(err.message)
        }  
    }
    return(
        <button className = "btn btn-danger" onClick={()=> deletePost(post.post_id)}>Delete</button>
    )
}
// passing the state from post table into the delete function 
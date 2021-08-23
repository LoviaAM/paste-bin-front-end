import react ,{useEffect , useState} from "react";
import Table from "react-bootstrap/Table"
// fetch the api information int
// render the mapped version of database rendering into table 

export default function PostTable() {
    const [posts, setPosts] = useState([]) //going to bring in an array of objects that will be mapped through-  go back react notes with useEfect
    
    const getPosts = async()=>{  // typing fo json body requests look back on notes
        try{
            const response = await fetch("http://localhost:4000/viewpost")
            const jsonData = await response.json
            console.log(jsonData)  
        } 
        catch(err) {
            console.error(err.message)
        }
    } 
    useEffect(()=>{
        getPosts();
    },[]);
    console.log(posts)
    return(
        <>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>Post Number</th>
                    <th>Description</th>
                    <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map((post, id )=>{
                         <tr>
                         <td>posts.</td>
                         <td>Mark</td>
                         <td>Otto</td>
                         <td>@mdo</td>
                         </tr>
                    })}
                   
                </tbody>
            </Table>
        </>
    )
// including CDN, bootstrap CSS styles into
}
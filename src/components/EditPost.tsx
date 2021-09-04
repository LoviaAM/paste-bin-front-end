import { listOfPastes } from "../utils/interface";
import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
// the edit function
// handle to await and fetch the put request for each item
// render
export default function EditPost({ post }: listOfPastes): JSX.Element {
  const [description, setDescription] = useState(post.post_description);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // edit Description function
  async function updateDescription(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    try {
      const body = { description };
      await fetch(
        `https://sleepy-mountain-69917.herokuapp.com/${post.post_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      //The window.location object can be used to get the current page address (URL) and to redirect the browser to a new page
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <input
            type="text"
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />{" "}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={(e) => {
              updateDescription(e);
              handleClose();
            }} //wrapping multiple functions within an onClick // https://stackoverflow.com/questions/26069238/call-multiple-functions-onclick-reactjs
          >
            Save Edit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

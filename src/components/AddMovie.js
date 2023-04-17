import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';



function AddMovie( {movies,setmovies}) {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
const [newmovie,setnewmovie] = useState({
    name:"",
    posterurl:"",
    description:"",
    rating:"",
    }
)
const add=()=>{
    setmovies([...movies,newmovie])
}
  return (
    <div>
      
       <Button variant="primary" onClick={handleShow} style={{backgroundColor:"black",color:"yellow",border:"none" }}> 
         + 
      </Button> 

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title   >Add Movies  </Modal.Title>
        </Modal.Header>
        <Modal.Body>   
            <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Movie Name</Form.Label>
        <Form.Control 
        type="text"
         placeholder="Enter movie name" 
          onChange ={(e) =>
            setnewmovie ({...newmovie,name:e.target.value})
          }  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Movie image</Form.Label>
        <Form.Control type="text" placeholder="Enter movie image" on onChange={(e)=>
            setnewmovie ({...newmovie,posterurl:e.target.value})
            }
             />
      </Form.Group>

     
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Movie description</Form.Label>
        <Form.Control type="text" placeholder="Enter movie description"on onChange={(e)=>
            setnewmovie({...newmovie,description:e.target.value})
            }
             />
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Movie rating</Form.Label>
        <Form.Control type="text" placeholder="Enter movie rating" on onChange={(e)=>setnewmovie({...newmovie,rating:e.target.value})}/>
      </Form.Group>

    </Form>
    </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose  }  >
            close
          </Button>
           <Button variant="primary"  style={{backgroundColor:"black",color:"dark",border:"none"} } 
           onClick={()=>{ 
            add(); 
            handleClose ();} 
           }> Add
             </Button> 
        </Modal.Footer>
      </Modal>
 
    </div>
  )
}

export default AddMovie

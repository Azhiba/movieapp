import React from 'react'
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';
function MovieCard({movie}) {
  return (
    <div>
      <Link
        to={`/trailer/${movie.name}`}
        style={{textDecoration:"none" , color:"white"}} >
      <Card style={{ width: '20rem',margin:"30px" , boxShadow:" 0px 0px 10px #ffff00 " , backgroundColor:"#ffff00"}}>
       <Card.Img variant="top" src= {movie.posterurl}   style={{width:" 320px" , height: "250px",borderRadius:"5px 5px 5px 5px"}} /> 
       <Card.Body> 
        <Card.Title>{movie.name}</Card.Title>
        <Card.Text style={{width:" 290px" , height: "180px"}}>{movie.description} </Card.Text>
        <ReactStars count={5}  size={24} activeColor="#ffd700" edit={false} value={movie.rating}/>
        {/* <Button variant="primary">See Trailer</Button> */}
       </Card.Body> 
    </Card>
    </Link>
    </div>
  );
}export default MovieCard;
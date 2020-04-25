import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,CardTitle } from 'reactstrap';

  function RenderComments({comments}){
    if(comments != null)
      return(
        <div className="col-12 col-md-5 m-1">
        <Card>
        <h4>comments</h4>
        <ul className="list-unstyled">
          {comments.comments.map((comment) => {
            return (
              <li>
                <p>{comment.comment}</p>
                <p> {comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))} </p>
              </li>
              );
            })}
        </ul>
        </Card>
      </div>
        );
    else {
      return (<div></div>);
    }
  }

  function RenderDish({dish}){
    if(dish != null){
      return(
        <div className="col-12 col-md-5 m-1">
          <Card>
              <CardImg top src={dish.image} alt={dish.name} />
              <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
              </CardBody>
          </Card>
        </div>
      );
    }
    else {
      return (<div></div>);
    }
  }


      const DishDetail= (props) => {
        return (
          <div className="container">
            <div className="row">
                <RenderDish dish={props.dish} />
                <RenderComments comments={props.dish} />
            </div>
          </div>
        );
      }

export default DishDetail;

import React from 'react';
import { Card } from 'react-bootstrap';

const VideoCard = ({ video }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={video.thumbnail} />
      <Card.Body>
        <Card.Title>{video.title}</Card.Title>
        <Card.Text>{video.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default VideoCard;

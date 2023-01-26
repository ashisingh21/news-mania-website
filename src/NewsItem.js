import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function NewsItem(props) {
    return <>
      <Card className='news-card'>
        <span className='badge position-absolute  rounded-pill bg-danger'>{ props.source}</span>
      <Card.Img  style={{ height: '10rem' }} variant="top" src={ props.imageUrl} />
      <Card.Body>
                <Card.Title>{ props.title}</Card.Title>
        <Card.Text>
          { props.description}...
          </Card.Text>
          <small className="text-muted published"> By {props.author} on {new Date(props.publishedAt).toGMTString()}</small>
        <Button variant="primary" ><a href={props.newsUrl}>Read More</a></Button>
      </Card.Body>
    </Card></>
}
export default NewsItem;
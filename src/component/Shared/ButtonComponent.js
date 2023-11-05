
import { Button } from 'react-bootstrap';

const ButtonComponent = ({ content, click, className }) => {
  return (
    <Button className={`rounded-5 ${className}`} onClick={click} variant='primary'>
      {content}
    </Button>
  );
}

export default ButtonComponent;
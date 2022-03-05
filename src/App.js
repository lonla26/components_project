import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NaveBar from './Component/NaveBar';
import { Button, Card } from 'react-bootstrap';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import FullName from './Component/Profile/FullName';
import Address from './Component/Profile/Address';

function App() {
  return (
    <div className="App">
      <NaveBar />
      <h1>Welcome</h1>
      <Card className='infos' style={{ width: '18rem' }}>
        <ProfilePhoto/>
        <Card.Body>
          <Card.Title>{<FullName />}</Card.Title>
          <Card.Text>
            {<Address />}
          </Card.Text>
          <Button variant="primary">Contact me</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;

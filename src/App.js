import './App.css';
import {button} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <div style={{ width: '18rem' }}>
        <h1 style={{textAlign:'center',color:'brown', fontSize:'30px'}} className='text1'>Graphene battery</h1> 
        <img  alt='' src="https://th.bing.com/th/id/OIP.6ls2GCoi2tXdKhBsXvDxcQHaFQ?pid=ImgDet&rs=1" width='300px' height='150px' />         
         <p> Samsung’s next flagship smartphone is hoped to feature a graphene-based battery. A lot has been said about graphene, and Samsung will go further to prove some of the things we’ve heard about graphene batteries. Is it possible for a high capacity battery (let’s say 6000mAH) to charge fully in less than 30 minutes?</p>
        <button className="btn btn-primary">More informations</button>
      </div>
    </div>
  );
}
export default App;


import AddPosts from './component/private/AddPosts';
import './App.css';
import Conditional from './component/Conditional';
import Login from './component/Login';
import Navbar from './component/private/Navbar';
import Posts from './component/private/Posts';
import Signup from './component/Signup';
import PublicPosts from './component/public/PublicPosts';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
// import { PostContext } from './context/PostContext';
// import PostFunctions from './context/PostFunctions';
import ForUpdate from './component/private/ForUpdate';
import BlogDetails from './component/public/blogDetail/BlogDetails';
function App() {
    return (

<div>
<Router>
    <Routes>
        <Route  element={<Conditional/>}>
        <Route path='/' element={<Navbar/>}>
            <Route path='/' element={<Posts/>}/>
            <Route path='/addPosts' element={<AddPosts/>}/>
            <Route path='/publicPosts' element={<PublicPosts/>}/>
            <Route path='/updatePosts' element={<ForUpdate/>}/>
            <Route path='/:id' element={<BlogDetails/>}/>
            </Route>
  </Route>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={< Login/>}/>
    </Routes>
</Router>
</div>
// </PostFunctions>
    );
}

export default App; 
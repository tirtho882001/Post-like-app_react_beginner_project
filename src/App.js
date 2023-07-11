import React, { useState } from 'react';
import { BiUserCircle, BiComment, BiShare } from 'react-icons/bi';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';


function App() {

  const [like, setLike] = useState(false);
  const [count, setCount] = useState(0);

  //handle likes
  const handleLikes = () => {
    if (!like) {
      setLike(true);
      setCount(count + 1);
    } else {
      setLike(false);
      setCount(count - 1);
    }
  }

  const imgUrl = 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80';

  return (
    <>
      <div className='main-container'>
        <h1 className="text-info">POST LIKE APP</h1>
        <h4>Likes count : {count}</h4>
        <div className="card" style={{ width: '18rem' }}>
          <div className="card-header">
            <BiUserCircle size={30} /> @_userName
          </div>
          <div className="card-body">
            <img src={imgUrl} alt="post-img" height={'300px'} width={'100%'} onDoubleClick={handleLikes} style={{ cursor: 'pointer' }} />
          </div>
          <div className="card-footer">
            {like ? (<AiFillHeart size={30} className='text-danger' onClick={handleLikes} style={{ cursor: 'pointer' }} />)
              :
              (<AiOutlineHeart size={30} onClick={handleLikes} style={{ cursor: 'pointer' }} />)}
            &nbsp;
            <BiComment size={30} style={{ cursor: 'pointer' }} />
            &nbsp;
            <BiShare size={30} style={{ cursor: 'pointer' }} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

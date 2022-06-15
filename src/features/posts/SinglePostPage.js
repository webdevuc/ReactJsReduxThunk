import { useSelector } from 'react-redux';
import { selectPostById } from '../../action/postsSlice';

import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';

const SinglePostPage = () => {
  const { postId } = useParams();

  const post = useSelector((state) => selectPostById(state, Number(postId)));

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    );
  }

  return (
    <div className="articles">
      <h5>{post.title}</h5>
      <p>{post.body}</p>
      <p className="postCredit">
        <Button size="medium" variant="outlined">
          <Link to={`/post/edit/${post.id}`} className="editPost">
            Edit Post
          </Link>
        </Button>
        <Button size="medium" variant="outlined" sx={{ marginLeft: 2 }}>
          <Link to={'/'} className="editPost">
            back
          </Link>
        </Button>
      </p>
    </div>
  );
};

export default SinglePostPage;

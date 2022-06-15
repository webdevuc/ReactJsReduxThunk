import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const PostsExcerpt = ({ post }) => {
  return (
    <div className="articles">
      <h5>{post.title}</h5>
      <p className="excerpt">{post.body.substring(0, 50)}...</p>
      <p className="postCredit">
        <Button size="medium" variant="outlined">
          <Link to={`post/${post.id}`} className="editPost">
            View Post
          </Link>
        </Button>
      </p>
    </div>
  );
};
export default PostsExcerpt;

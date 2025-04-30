import PostActions from "./PostActions";
import PostHeader from "./PostHeader";
const PostItem = () => {
  return (
    <>
      <PostHeader></PostHeader>
      <div className="post-body">
        <div className="post-text py-1 px-3">
          <p className="text-[11pt]">
            found this pict last night, my first setup. the joys of that first
            moment when you make your first connection over the airwaves.
          </p>
        </div>
        <div className="py-2 px-0">
          <img src={`/images/Amateurfunkstation.jpg`} />
        </div>
      </div>
      <div className="mx-2">
        <PostActions></PostActions>
      </div>
    </>
  );
};

export default PostItem;

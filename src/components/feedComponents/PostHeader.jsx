const PostHeader = ({ postType = 1 }) => {
  let headerText =
    postType == "2"
      ? "is selling"
      : postType == "3"
      ? "is looking for"
      : postType == "4"
      ? "received"
      : "posted";

  return (
    <div className="flex post-header p-2">
      <div className="thumbnail">
        <i className="icon-[mdi--account-circle-outline] post-thumbnail"></i>
      </div>
      <div className="flex-1 ps-2 ">
        <div className="">
          <div className="title">ARJ908W (Johnson Smith) {headerText}</div>
          <p className="location">
            <small>South Africa</small>&nbsp;&bull;&nbsp;
            <small>posted a day ago</small>
          </p>
        </div>
      </div>
      <div>
        <button>
          <i className="icon-[mdi--dots-horizontal] text-xl"></i>
        </button>
      </div>
    </div>
  );
};

export default PostHeader;

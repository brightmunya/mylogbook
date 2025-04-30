const PostActions = () => {
  return (
    <div className="post-actions">
      <div className="border-t-1 border-b-1 border-gray-300 my-2">
        <div className="flex justify-around p-1">
          <div>
            {/* like    */}
            <button>
              <i className="icon-[line-md--heart]"></i>
            </button>
          </div>
          <div>
            {/* comment  */}
            <button>
              <i className="icon-[line-md--chat]"></i>
            </button>
          </div>
          <div>
            {/* share  */}
            <button>
              <i className="icon-[material-symbols--share]"></i>
            </button>
          </div>
          <div>
            {/* bookmark  */}
            <button>
              <i className="icon-[material-symbols--bookmark-outline]"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostActions;

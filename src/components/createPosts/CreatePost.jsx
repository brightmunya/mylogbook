//Post: Question, Broadcast, Contest
const CreatePost = () => {
  const styleFormControl = "w-full border rounded-md border-gray-400 py-1 px-2";
  const styleCard = "w-full bg-white border border-gray-300 rounded-lg mb-3";
  const styleCardHeader = "min-h-10  p-3";
  const styleCardBody = "py-1 px-4";
  const styleCardFooter = "p-4 border-t border-gray-300";
  const styleButtonCancel =
    "border border-red-400 text-red-400 rounded-md h-full w-full";
  const styleButtonSubmit =
    "border border-blue-400 rounded-md text-blue-400 h-full w-full";
  return (
    <div className={styleCard}>
      <div className={styleCardHeader}>
        <div className="float-right">
          <button>
            <span className="icon-[line-md--close]"></span>
          </button>
        </div>
        <div>
          <h4>Broadcast</h4>
        </div>
      </div>
      <div className={styleCardBody}>
        <div>
          <textarea
            className="w-full"
            placeholder="Alpha Charlie Two Whisky relay your message"
          ></textarea>
        </div>
        <div className="flex h-10 place-content-evenly ">
          <div>
            <button className="w-full h-full">
              <i className="icon-[line-md--image-twotone] text-xl"></i>
            </button>
          </div>
          <div>
            <button className="w-full h-full">
              <i className="icon-[line-md--map-marker-radius] text-xl"></i>
            </button>
          </div>
        </div>
      </div>
      <div className={styleCardFooter}>
        <div className="grid grid-cols-2 gap-2">
          <div className="h-8">
            <button className={styleButtonSubmit}>Post</button>
          </div>
          <div className="h-8">
            <button className={styleButtonCancel}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;

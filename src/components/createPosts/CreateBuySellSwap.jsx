const CreateBuySellSwap = ({ onClose }) => {
  const styleFormControl = "w-full border rounded-md border-gray-400 py-1 px-2"
  const styleCard = "w-full bg-white border border-gray-300 rounded-lg mb-3"
  const styleCardHeader = "min-h-10  p-3"
  const styleCardBody = "p-4"
  const styleCardFooter = "p-4 border-t border-gray-300"
  const styleButtonCancel =
    "border border-red-400 text-red-400 rounded-md h-full w-full"
  const styleButtonSubmit =
    "border border-blue-400 rounded-md text-blue-400 h-full w-full"
  return (
    <div className={styleCard}>
      <div className={styleCardHeader}>
        <div className="float-right">
          <button>
            <span className="icon-[line-md--close]" onClick={onClose}></span>
          </button>
        </div>
        <div>
          <h4>Swap/Buy/Sell Post</h4>
        </div>
      </div>
      <div className={styleCardBody}>
        <div>
          <textarea
            className="w-full"
            placeholder="Give a description to what you are looking to buy/sell/swap"
          ></textarea>
        </div>
        <div className="grid grid-cols-3 h-30">
          <div className="border border-gray-300 rounded-md w-full h-full bg-gray-100 flex justify-around">
            <div className="self-center ">
              <div className="text-center">
                <i className="icon-[line-md--uploading-loop] text-[3rem]"></i>
                <br />
                Upload Image
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styleCardFooter}>
        <div className="grid grid-cols-2 gap-2">
          <div className="h-8">
            <button className={styleButtonSubmit}>Post</button>
          </div>
          <div className="h-8">
            <button className={styleButtonCancel} onClick={onClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateBuySellSwap

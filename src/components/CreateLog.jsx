const CreateLog = () => {
  const styleFormControl = "w-full border rounded-md border-gray-400 py-1 px-2";
  const styleButtonActive =
    "border rounded-md w-full border-gray-900 h-full text-[10px]";
  const styleButtonPrimary =
    "border rounded-md w-full border-gray-400 h-full text-[10px]";
  const styleButtonSubmit =
    "border rounded-md w-full border-blue-400 h-full text-sm text-blue-400";
  const styleButtonCancel =
    "border rounded-md w-full border-red-400 h-full text-sm text-red-400";
  const styleButtonRadioPrimary =
    "border rounded-md w-full border-blue-400 h-full text-[10px] text-white bg-blue-400";
  return (
    <>
      <div className="w-full bg-white border border-gray-300 rounded-lg mb-3">
        <div className="p-4 pb-2">
          <div className="grid grid-cols-2 mb-2 gap-2">
            <div>
              <input
                type="date"
                className={styleFormControl}
                placeholder="Date"
              ></input>
            </div>
            <div>
              <input
                type="time"
                className={styleFormControl}
                placeholder="Time"
              ></input>
            </div>
          </div>
          <div className="h-12 mb-2">
            <input
              maxLength="11"
              value="000.000.000"
              type="text"
              className="border border-gray-300 w-full h-full p-2 text-3xl text-center rounded-md"
              pattern="\d\d\d\.\d\d\d\.\d\d\d"
            ></input>
          </div>
          <div className="grid grid-cols-8 md:grid-cols-8 gap-1">
            <div className="h-8">
              <button className={styleButtonRadioPrimary}>AM</button>
            </div>
            <div className="h-8 ">
              <button className={styleButtonPrimary}>FM</button>
            </div>
            <div className="h-8">
              <button className={styleButtonPrimary}>USB</button>
            </div>
            <div className="h-8">
              <button className={styleButtonPrimary}>LSB</button>
            </div>
            <div className="h-8">
              <button className={styleButtonPrimary}>CW</button>
            </div>
            <div className="h-8">
              <button className={styleButtonPrimary}>PSK</button>
            </div>
            <div className="h-8">
              <button className={styleButtonPrimary}>RTTY</button>
            </div>
            <div className="h-8">
              <button className={styleButtonPrimary}>ECHO</button>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-2 mt-2">
            <div>
              <input
                className={styleFormControl}
                placeholder="Callsign"
              ></input>
            </div>
            <div>
              <input className={styleFormControl} placeholder="Name"></input>
            </div>

            <div>
              <input className={styleFormControl} placeholder="RST Tx"></input>
            </div>
            <div>
              <input className={styleFormControl} placeholder="RST Rx"></input>
            </div>
          </div>
        </div>
        <div className="p-4 border-t mt-2 border-gray-300">
          <div className="grid grid-cols-2 gap-2">
            <div className="h-8 ">
              <button className={styleButtonSubmit}>Post</button>
            </div>
            <div className="h-8 ">
              <button className={styleButtonCancel}>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateLog;

import { useState } from "react"

const CreateLog = () => {
  const styleFormControl = "w-full border rounded-md border-gray-400 py-1 px-2"
  const styleButtonActive =
    "border rounded-md w-full border-gray-900 h-full text-[10px]"
  const styleButtonPrimary =
    "border rounded-md w-full border-gray-400 h-full text-[10px]"
  const styleButtonSubmit =
    "border rounded-md w-full border-blue-400 h-full text-sm text-blue-400"
  const styleButtonCancel =
    "border rounded-md w-full border-red-400 h-full text-sm text-red-400"
  const styleButtonRadioPrimary =
    "border rounded-md w-full border-blue-400 h-full text-[10px] text-white bg-blue-400"
  const styleCardHeader = "min-h-10  px-3 py-2"
  const [mode, setMode] = useState("AM")
  const [newLog, setNewLog] = useState({
    frequency: "000.000.000",
    mode: "AM",
    callsign: "",
    contactName: "",
    rstTX: "5/9",
    rstRX: "5/9",
    commDate: "2025/05/05",
    commTime: "08:18 AM"
  })
  function changeFrequencyMode(m) {
    setMode(m)
  }
  return (
    <div className="w-full bg-white border border-gray-300 rounded-lg mb-3">
      <div className={styleCardHeader}>
        <div className="float-right">
          <button>
            <span className="icon-[line-md--close]"></span>
          </button>
        </div>
        <div>
          <h4>New Log</h4>
        </div>
      </div>
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
            <button
              onClick={() => changeFrequencyMode("AM")}
              className={
                mode == "AM" ? styleButtonRadioPrimary : styleButtonPrimary
              }
            >
              AM
            </button>
          </div>
          <div className="h-8 ">
            <button
              onClick={() => changeFrequencyMode("FM")}
              className={
                mode == "FM" ? styleButtonRadioPrimary : styleButtonPrimary
              }
            >
              FM
            </button>
          </div>
          <div className="h-8">
            <button
              onClick={() => changeFrequencyMode("USB")}
              className={
                mode == "USB" ? styleButtonRadioPrimary : styleButtonPrimary
              }
            >
              USB
            </button>
          </div>
          <div className="h-8">
            <button
              onClick={() => changeFrequencyMode("LSB")}
              className={
                mode == "LSB" ? styleButtonRadioPrimary : styleButtonPrimary
              }
            >
              LSB
            </button>
          </div>
          <div className="h-8">
            <button
              onClick={() => changeFrequencyMode("CW")}
              className={
                mode == "CW" ? styleButtonRadioPrimary : styleButtonPrimary
              }
            >
              CW
            </button>
          </div>
          <div className="h-8">
            <button
              onClick={() => changeFrequencyMode("PSK")}
              className={
                mode == "PSK" ? styleButtonRadioPrimary : styleButtonPrimary
              }
            >
              PSK
            </button>
          </div>
          <div className="h-8">
            <button
              onClick={() => changeFrequencyMode("RTTY")}
              className={
                mode == "RTTY" ? styleButtonRadioPrimary : styleButtonPrimary
              }
            >
              RTTY
            </button>
          </div>
          <div className="h-8">
            <button
              onClick={() => changeFrequencyMode("ECHO")}
              className={
                mode == "ECHO" ? styleButtonRadioPrimary : styleButtonPrimary
              }
            >
              ECHO
            </button>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-2 mt-2">
          <div>
            <input className={styleFormControl} placeholder="Callsign"></input>
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
  )
}

export default CreateLog

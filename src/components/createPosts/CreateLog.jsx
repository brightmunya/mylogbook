import { useState } from "react"

const CreateLog = ({ onClose }) => {
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
    mode: "FM",
    callsign: "",
    contactName: "",
    rstTX: "5/9",
    rstRX: "5/9",
    commDate: new Date().toISOString().split("T")[0],
    commTime: displayTime(new Date())
  })

  function displayTime(d) {
    let date = new Date(d)
    let h = date.getHours()
    let m = date.getMinutes()
    return `${formatDisplayValue(h)}:${formatDisplayValue(m)}`
  }

  function formatDisplayValue(i) {
    if (parseInt(i) < 10) {
      i = "0" + i
    }

    return i
  }

  function changeFrequencyMode(m) {
    setMode(m)
    setNewLog({ ...newLog, mode: m })
  }

  function iptFrequency_keydown(e) {
    let value = parseInt(e.key)
    if (Number.isInteger(value)) {
      let currentVal = newLog.frequency
      let frequency = currentVal.split("")
      frequency.push(value)
      frequency.shift()
      let freq = frequency.filter((item) => item !== ".")
      freq.splice(3, 0, ".")
      freq.splice(7, 0, ".")
      let updateFrequency = freq.join("")
      setNewLog({ ...newLog, frequency: updateFrequency })
    }
  }

  return (
    <div className="w-full bg-white border border-gray-300 rounded-lg mb-3">
      <div className={styleCardHeader}>
        <div className="float-right">
          <button>
            <span className="icon-[line-md--close]" onClick={onClose}></span>
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
              value={newLog.commDate}
              onChange={(e) => {
                setNewLog({ ...newLog, commDate: e.target.value })
              }}
            ></input>
          </div>
          <div>
            <input
              type="time"
              className={styleFormControl}
              placeholder="Time"
              value={newLog.commTime}
              onChange={(e) => {
                setNewLog({ ...newLog, commTime: e.target.value })
              }}
            ></input>
          </div>
        </div>
        <div className="h-12 mb-2">
          <div className="relative">
            <div className=" w-full h-[3rem] absolute ">
              <input
                id="iptFrequency"
                maxLength="11"
                value={newLog.frequency}
                type="text"
                className="border border-gray-300 w-full h-full p-2 text-3xl text-center rounded-md"
                pattern="\d\d\d\.\d\d\d\.\d\d\d"
                onKeyDown={iptFrequency_keydown}
                onChange={(e) => {
                  console.log("frequency changed")
                  //setNewLog({ ...newLog, frequency: e.target.value })
                }}
              ></input>
            </div>
            <div className="float-right me-1">
              <button
                onClick={() => {
                  setNewLog({ ...newLog, frequency: "000.000.000" })
                  document.getElementById("iptFrequency").focus()
                }}
              >
                <i className="icon-[line-md--close-circle] text-md"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-8 md:grid-cols-8 gap-1">
          <div className="h-8">
            <button
              onClick={() => changeFrequencyMode("AM")}
              className={
                newLog.mode == "AM"
                  ? styleButtonRadioPrimary
                  : styleButtonPrimary
              }
            >
              AM
            </button>
          </div>
          <div className="h-8 ">
            <button
              onClick={() => changeFrequencyMode("FM")}
              className={
                newLog.mode == "FM"
                  ? styleButtonRadioPrimary
                  : styleButtonPrimary
              }
            >
              FM
            </button>
          </div>
          <div className="h-8">
            <button
              onClick={() => changeFrequencyMode("USB")}
              className={
                newLog.mode == "USB"
                  ? styleButtonRadioPrimary
                  : styleButtonPrimary
              }
            >
              USB
            </button>
          </div>
          <div className="h-8">
            <button
              onClick={() => changeFrequencyMode("LSB")}
              className={
                newLog.mode == "LSB"
                  ? styleButtonRadioPrimary
                  : styleButtonPrimary
              }
            >
              LSB
            </button>
          </div>
          <div className="h-8">
            <button
              onClick={() => changeFrequencyMode("CW")}
              className={
                newLog.mode == "CW"
                  ? styleButtonRadioPrimary
                  : styleButtonPrimary
              }
            >
              CW
            </button>
          </div>
          <div className="h-8">
            <button
              onClick={() => changeFrequencyMode("PSK")}
              className={
                newLog.mode == "PSK"
                  ? styleButtonRadioPrimary
                  : styleButtonPrimary
              }
            >
              PSK
            </button>
          </div>
          <div className="h-8">
            <button
              onClick={() => changeFrequencyMode("RTTY")}
              className={
                newLog.mode == "RTTY"
                  ? styleButtonRadioPrimary
                  : styleButtonPrimary
              }
            >
              RTTY
            </button>
          </div>
          <div className="h-8">
            <button
              onClick={() => changeFrequencyMode("ECHO")}
              className={
                newLog.mode == "ECHO"
                  ? styleButtonRadioPrimary
                  : styleButtonPrimary
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
            <button className={styleButtonCancel} onClick={onClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateLog

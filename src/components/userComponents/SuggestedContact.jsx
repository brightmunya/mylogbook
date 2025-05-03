const SuggestedContact = ({ contact }) => {
  const styleButtonPrimary =
    "border rounded-md w-full border-gray-400 h-full text-[10px]"
  return (
    <div className="h-full bg-white p-2 border border-gray-300 rounded-md contacts-suggested ">
      <div className="body flex flex-col">
        <div className="cover-image ">
          <img src={"/" + contact.profile} />
        </div>
        <div className="profile-highlights flex-1">
          <div>{contact.name}</div>
          <div>{contact.callsign}</div>
        </div>

        <div className="action mb-1">
          <button className={styleButtonPrimary}>Connect</button>
        </div>
      </div>
    </div>
  )
}
export default SuggestedContact

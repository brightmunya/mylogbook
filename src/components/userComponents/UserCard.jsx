const UserCard = ({ identity }) => {
  const address = identity?.address.split(",")
  const country =
    `${address?.[address.length - 2]}, ${address?.[address.length - 1]}` ||
    "South Africa"
  return (
    <div className="w-70 h-60 bg-white border border-gray-300 rounded-lg mb-2 user-card">
      <div className="cover-image">
        <img src={identity.cover} />
      </div>
      <div className="profile">
        <img src={identity.profile} />
      </div>
      <div className="summary py-2 px-3">
        <h3>{identity.name}</h3>
        <h4>{identity.callsign}</h4>
        <p>
          <small>{country}</small>
        </p>
      </div>
    </div>
  )
}

export default UserCard

const UserCard = () => {
  return (
    <div className="w-70 h-60 bg-white border border-gray-300 rounded-lg mb-2 user-card">
      <div className="cover-image"></div>
      <div className="profile"></div>
      <div className="summary p-2">
        <h3>Jonathan Jefferson</h3>
        <h3>CALL216N</h3>
        <p>
          <small>South Africa</small>
        </p>
      </div>
    </div>
  );
};

export default UserCard;

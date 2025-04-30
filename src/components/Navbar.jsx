const Navbar = () =>{

  return(
    <nav className="flex h-15 items-center">
      <div className="w-14 flex-none" id='icon-header'></div>
      <div className="flex-1">
        <ul className="flex ">
          <li className="m-2">Home</li>
          <li className="m-2">About</li>
        </ul>
      </div>
    </nav>
    
  )
}

export default Navbar
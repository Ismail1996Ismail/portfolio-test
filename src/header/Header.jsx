import Menu from './Menu';
import HeaderMain from './HeaderMain';
import { useState } from 'react';
function Header(){
  const [menuUp, setMenuUp ] = useState(false);
  return(
    <div className="Header">
      <div className='header__content'>
          <Menu menuUp = {menuUp} setMenuUp={setMenuUp}/>
          <HeaderMain/>
      </div>
      <div className="bgBlue"></div>
    </div>
  )
}
export default Header;
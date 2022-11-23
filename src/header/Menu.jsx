import menuLogo from '../static/icon/menu-line.png';
import logo from '../static/icon/logo.png';
import { useState } from 'react';
function Menu({menuUp, setMenuUp}){
  const [menuItem, setMenuItem] = useState([
    {name: 'Home', status: false, id: 'item1'},
    {name: 'Services', status: false, id: 'item2'},
    {name: 'About', status: false, id: 'item3'}
  ])
  function addClassItem(id){
    setMenuItem([...menuItem.map(i => {
      i.status = false
      return i.id === id ? {...i, status: !i.status} : {...i}
    })
  ])
}
  // const [menuUp, setMenuUp ] = useState(false);
  const open = () => {
    setMenuUp(!menuUp)
  }

  console.log(menuUp)
  return(
    <div onBlur = {() => setMenuUp(false)}  className="Menu">
        <div className = {menuUp ? 'pop-up_menu' :  'noNe'}>
          <li><a href="https://ya.ru/">link 1</a></li>
          <li><a href="#">link 2</a></li>
          <li><a href="#">link 3</a></li>
          <li><a href="#">link 4</a></li>
          <li><a href="#">link 5</a></li>
        </div>
      <div className="menu__logo">
        <a onFocus={() => open()} href="#"><img src={menuLogo} className='menu__logo-img' alt="menu-logo" /></a>
      </div>
      <div className='nav'>
        <div className="logo">
        <a href="http://localhost:3000/"><img src={logo} className='logo-img' alt="menu-logo" /></a>
        </div>
        <ul className="menu__nav">
          {menuItem.map(item => {
            return(
                <li 
                key = {item.id} 
                className={item.status ? 'menu__item menu__item-active' : 'menu__item'}>
                    <a 
                    href="#" 
                    onClick={() => addClassItem(item.id)}>
                      {item.name}
                    </a>  
                </li>)
          })}
        </ul>
      </div>
    </div>
  )
}
export default Menu;
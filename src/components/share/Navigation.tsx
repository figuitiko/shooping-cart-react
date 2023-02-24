import React from 'react';
import {Link} from 'react-router-dom';
import {dataMenu} from '../../data/configShare';

const Navigation = () => {
  return (
    <nav className='flex justify-end  w-1/2'>
        <ul className='flex gap-4'>
          {          
          dataMenu.map((item, index) => {
            return (
              <li className={`hover:text-blue-300 ${item.path === '/cart' && 'ml-auto'}`} key={index}>               
                <Link to={item.path}>{item.label}</Link>
              </li>
            )
          })}         
        </ul>
      </nav>
  )
}

export default Navigation;
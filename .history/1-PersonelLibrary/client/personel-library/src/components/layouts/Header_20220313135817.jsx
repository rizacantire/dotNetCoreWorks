import React from 'react'
import { Menu } from 'semantic-ui-react'

export default function Header() {
  let handleItemClick = (e, { name }) => this.setState({ activeItem: name })
 

  return (
    <div>
    
    <Menu>
        <Menu.Item
          name='browse'
          
          onClick={handleItemClick}
        >
          Browse
        </Menu.Item>

        <Menu.Item
          name='submit'
          active={activeItem === 'submit'}
          onClick={handleItemClick}
        >
          Submit
        </Menu.Item>

        <Menu.Menu position='right'>
          <Menu.Item
            name='signup'
            active={activeItem === 'signup'}
            onClick={handleItemClick}
          >
            Sign Up
          </Menu.Item>

          <Menu.Item
            name='help'
            active={activeItem === 'help'}
            onClick={handleItemClick}
          >
            Help
          </Menu.Item>
        </Menu.Menu>
      </Menu>
      </div>
  )
}

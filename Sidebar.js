import React from 'react';
import {Avatar,IconButton,} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChatIcon from '@material-ui/icons/Chat';
import SidebarChat from './SidebarChat';
import SearchOutlined from '@material-ui/icons/SearchOutlined';



import './Sidebar.css';

function Sidebar() {
 

  return (
    <div className='sidebar'>
  
      <div className='sidebar__header'>
        <Avatar/>
 
        <div className='sidebar__headerRight'>
          <IconButton>
            <ChatIcon/>
          </IconButton>
          <IconButton>
           <MoreVertIcon />
          </IconButton>

        </div>
        
           
            

      </div>
      <div className='sidebar__search'>
        <div className='sidebar__searchContainer'>
          <SearchOutlined />
          <input placeholder='Search or start new chat' type='text'/>
        </div>
      </div>

      <div className='sidebar__chats'>
        <SidebarChat addNewChat/>
        <SidebarChat/>
        <SidebarChat/>
      </div>
    </div>
  );
}

export default Sidebar;

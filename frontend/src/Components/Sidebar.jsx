import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';

import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (<div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
  <CDBSidebar textColor="#000" backgroundColor="#FFC765">
    <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
      <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
        SanjiLLM
      </a>
    </CDBSidebarHeader>

    <CDBSidebarFooter style={{ textAlign: 'center' }}>
      <div
        className="sidebar-btn-wrapper"
        style={{
          'border-top':'solid #000',
          padding: '20px 5px',
        }}
      >
        Sidebar Footer
      </div>
    </CDBSidebarFooter>
  </CDBSidebar>
</div>);
};

export default Sidebar;

import React from 'react';
import SideNav from 'react-simple-sidenav';

import SiteNavItems from './sitenavitems';

const SideNavigation = (props) => {
    return (
        <div>
            <SideNav
                showNav={props.showNav}
                onHideNav={props.onHideNav}
                navStyle={{
                    background: '#242424',
                    maxWidth: '220px'

                }}> 
                <SiteNavItems />
            </SideNav>
        </div>
    );
}

export default SideNavigation;
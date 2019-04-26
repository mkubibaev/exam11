import React from 'react';
import {DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown} from "reactstrap";

const UserMenu = ({user, logout}) => {
    return (
        <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
                Hello, {user.fullname}
            </DropdownToggle>
            <DropdownMenu right>
                <DropdownItem>
                    Show profile
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={logout}>
                    Logout
                </DropdownItem>
            </DropdownMenu>
        </UncontrolledDropdown>
    );
};

export default UserMenu;

import React from 'react'

const drawerToggleButton = props => (
    <div className="toggle-button" onClick={props.click}>
        <div className="toggle-button__line"></div>
        <div className="toggle-button__line"></div>
        <div className="toggle-button__line"></div>
    </div>
);

export default drawerToggleButton;
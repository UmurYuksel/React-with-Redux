import React from 'react';



const Header = (props) => {
    return (
        <Header>
            <div>
                <h2>Header of the application</h2>
                <br />
                <input type="text" onChange={props.keywords} />
            </div>
        </Header>

    )
}

export default Header;
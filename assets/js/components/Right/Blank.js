import React from 'react';

import Right from "../Right/Right";
import Left from "../Left/Left";


class Blank extends React.Component {

    render() {
        return (
            <div className="col-7 px-0" style={{width: '100%', backgroundColor: 'white'}}>
                {/*<Left/>*/}
                {/*<Right/>*/}
            </div>
        );
    }
}

export default Blank;

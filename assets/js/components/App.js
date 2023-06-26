import React from 'react';
import Left from "./Left/Left";
import Right from "./Right/Right";
import Blank from "./Right/Blank";

class App extends React.Component {

    render() {
        return(
            <div className="container py-5 px-4">
                <div className="row rounded-lg overflow-hidden shadow">
                    <Left/>
                    <Switch>

                                <Blank/>
                        <Right/>
                    </Switch>
                </div>
            </div>


            // <div className="container py-5 px-4">
            //     <div className="row rounded-lg overflow-hidden shadow">
            //         {/*<Left/>*/}
            //         {/*<Right/>*/}
            //         <Blank/>
            //     </div>
            // </div>



        )
    }
}
export default App;
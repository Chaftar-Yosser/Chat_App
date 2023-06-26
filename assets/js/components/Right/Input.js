import React from 'react'


class Input extends React.Component {



    render() {
        return (
            <form action="#" className="bg-light">
                <div className="input-group">
                    <div className="input-group-append">
                        <button id="button-addon2" type="submit"
                                className="btn btn-link">
                            {/*<i className="fa fa-paper-plane"></i>*/}
                        </button>
                    </div>
                </div>
            </form>
        )
    }
}

export default Input;

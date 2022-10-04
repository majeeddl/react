
import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { UserContext } from "../../Hooks";
import ThemeButton from './ThemeButton';
import { theme, ThemeContext } from './theme.context';

function UseContext(props) {

    const user = useContext(UserContext);

    return (
        <>

            <div>
                React Context is a way to manage state globally.
                <br></br>
                It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone.
            </div>

            <div className="mt-2">
                Username is : {user}
            </div>

            <div> Dynamic Context</div>
            <div>
                <ThemeButton></ThemeButton>
            </div>
        </>
    )
}

UseContext.propTypes = {}

export default UseContext

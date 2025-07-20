import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ToggleTheme = () => {    
    const {updateTheme} = useContext(ThemeContext);
    return (<div>
        <button onClick={updateTheme}>Switch Theme</button>
    </div>)
}

export default ToggleTheme;
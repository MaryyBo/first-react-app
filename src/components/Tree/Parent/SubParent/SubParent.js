import { useContext } from 'react';
import Child from './Child/Child';
import { UserContext } from '../../../../contexts/userContext';
import { ThemeContext } from '../../../../contexts/ThemeContext';
import CONSTANTS from '../../../../Constants';
const { THEMES } = CONSTANTS;

const Subparent = () => { // Тут ми фокусуємось на вирішенні нашої задачі, без хлам-коду типу консьюмерів
    const { user: { firstName } } = useContext(UserContext);
    const { theme, setTheme} = useContext(ThemeContext);

    const nextTheme = theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;

    return (<div>
        Subparent
        <p>{firstName}</p>
        <button onClick={() => setTheme(nextTheme)}>Click to change theme</button>
        <Child />
    </div>)
}

export default Subparent;
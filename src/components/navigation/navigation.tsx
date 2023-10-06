import {useState} from 'react';
import classes from './navigation.module.css'
import {Link} from "react-router-dom";

const Navigation = () => {
    const [visible, setVisible] = useState([classes.container])

    return (
        <div className={visible.join(' ')}>
            <aside
                className={classes.content}
                onMouseEnter={() => setVisible([classes.container, classes.visible])}
                onMouseLeave={() => setVisible([classes.container])}
            >
                <nav className={classes.nav}>
                    <h3>Навигация по CSS</h3>
                    <ul>
                        <li><Link to={'/'}>Текст</Link></li>
                        <li><Link to={'/animation'}>Анимация</Link></li>
                        <li>
                            <Link to={'/displayFlex'}>Display</Link>
                            <ul>
                                <li><Link to={'/displayFlex'}>Flex</Link></li>
                                <li><Link to={'/displayGrid'}>Grid</Link></li>
                                <li><Link to={'/displayOther'}>Другие</Link></li>
                            </ul>
                        </li>
                        <li><Link to={'/position'}>Position</Link></li>
                        <li><Link to={'/transform'}>Transform</Link></li>
                        <li><Link to={'/frames'}>Рамки и контуры</Link></li>
                        <li><Link to={'/indents'}>Отступы</Link></li>
                        <li><Link to={'/other'}>Прочее</Link></li>
                    </ul>
                </nav>
                <div className={classes.line}/>
            </aside>
            <div className={classes.background}/>
        </div>
    );
};

export default Navigation;
import styles from './navbar.module.css'
import { BsCart4} from 'react-icons/bs'
import Logo from '@/components/logo/logo'
import Input from '../forms/input/input'

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Logo/>
            <div className={styles.search}>
                <Input placeholder="Buscar" fullwidth={true}/>
            </div>
            <BsCart4 size={40}/>
        </nav>
    )
}
import styles from './subtitle.module.css'

export default function Subtitle(props){
    return (
        <h2 className={styles.subtitle}>{props.children}</h2>
    )
}
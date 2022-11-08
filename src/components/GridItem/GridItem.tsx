import { Level } from '../../helpers/imc'
import styles from './GridItem.module.css'
import upImage from '../../assets/images/up.png'
import downImage from '../../assets/images/down.png'

type Props = {
    item: Level;
}

export const GridItem = ({item}: Props)=>{
    return(
        <div className={styles.main} style={{backgroundColor: item.color}}>
            <div className={styles.gridIcon}>
            {item.icon === 'up' && <img src={upImage} alt="upImage" width="30"/>}
            {item.icon === 'down' && <img src={downImage} alt="downImage" width="30"/>}
            </div>
            <div className={styles.gridTitle}>{item.title}</div>
                {item.yourImc &&
                    <div className={styles.yourImc}>Seu IMC é de {item.yourImc.toFixed(2)} Kg/m²</div>
                }
            <div className={styles.gridInfo}>
                <>
                    IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
                </>                
            </div>
        </div>
    )
}
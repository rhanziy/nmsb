import styles from './App.module.css';
import { Instagram, Facebook, Youtube } from 'react-bootstrap-icons';


function Footer() {
    return (
        <footer>
            <div className={styles['bottom-ft']}>
                <p>상호: 낭만소비  |  대표: ㅇㅇㅇ  |  개인정보관리책임자: ㅇㅇㅇ  |  전화: 02-1234-5678 | 이메일: nmsb@naver.com  |  주소: 서울 금천구 시흥대로123길 12, 3층 낭만소비</p>
                <div>
                    <p>이용약관</p>
                    <p>개인정보처리방침</p>
                    <p>사업자정보확인</p>
                </div>
                <div className={styles['ft-sns']}>
                    <Instagram className={styles.icon} />
                    <Facebook className={styles.icon} />
                    <Youtube className={styles.icon}/>
                </div>
            </div>
        </footer>

    )
}

export default Footer;
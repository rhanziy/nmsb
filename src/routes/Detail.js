import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from './Detail.module.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { checkAmount, addCart, Info } from '../store/store.js'

function Detail({ kitchen, bath }){

    let { id } = useParams();
    let product = [...kitchen, ...bath];
    let currentItem = product.filter(a => a.id == id )
    let [ amount, setAmount ] = useState(1);
    let [ price, setPrice ] = useState(currentItem[0].price);
    let [ modal, setModal ] = useState(0);
    let navigate = useNavigate();
    let dispatch = useDispatch();


    useEffect(()=>{
        setPrice(currentItem[0].price * amount)

    }, [amount])


    return(
        <div>
            <div className={styles['detail-con']}>
                <div className={styles['detail-left']}>
                    <img src={`https://raw.githubusercontent.com/rhanziy/contents/main/nmsb-${id}.webp`} width="100%"></img>
                </div>
                <div className={styles['detail-right']}>
                    <div>
                        <p>{currentItem[0].category}</p>
                        <p className={styles['detail-title']}>{currentItem[0].title}</p>
                        <p>수량
                            <span 
                                className={styles.amount}
                                onClick={()=> {
                                    setAmount(amount+1)
                                }}
                            >+</span>
                            <span>{amount}</span>
                            <span 
                                className={styles.amount}
                                onClick={()=> {
                                    amount > 1 &&  setAmount(amount-1)
                                }}
                            >-</span>
                        </p>
                        <p>{price}원</p>
                        <div 
                            className={styles.button}
                            onClick = {()=>{ 
                                setModal(1);
                                let data = currentItem[0];
                                dispatch(addCart({data, amount}));
                            }}
                        >장바구니 추가</div>
                        <div 
                            className={styles.button}
                            onClick={()=> {
                                navigate('/test/0')
                                let data = currentItem[0]
                                dispatch(Info({data, amount}))
                            }}

                        >구매하기</div>
                        </div>
                </div>
            </div>
            {
                modal ? 
                <div className={styles.modal}>
                    장바구니에 담겼습니다.
                    <div>  
                        <p onClick = {()=>{ navigate('/cart') }}>장바구니 가기</p>
                        <p onClick = {()=>{ setModal(0) }}>계속 쇼핑하기</p>
                    </div>
                </div>
                : null
            }
        </div>
    );
}






export default Detail;
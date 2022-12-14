import { Table } from "react-bootstrap";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { upCount, downCount, delCart } from '../store/store';
import { ChevronUp, ChevronDown, Trash3Fill } from 'react-bootstrap-icons';
import styles from './Cart.module.css';



function Cart(){

    let state = useSelector((state) => state);
    let dispatch = useDispatch();
    let navigate = useNavigate();
    let price = state.cart.map((a)=> a.price * a.count );
    
    
    return(
        <div className={styles.con}>
            <Table>
                <thead>
                    <tr>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>가격</th>
                        <th>삭제</th>
                    </tr>
                </thead>
                <tbody>
                    { 
                        state.cart.map((a, i) =>
                            <tr key={i}>
                                <td
                                    onClick={()=> navigate(`/detail/${a.id}`) }
                                >{a.title}</td>
                                <td>
                                    <ChevronDown 
                                        className={styles.arrow}
                                        onClick={() => dispatch(downCount(a.id)) }
                                    />
                                    {a.count}
                                    <ChevronUp 
                                        className={styles.arrow}
                                        onClick={() => dispatch(upCount(a.id)) }
                                    />
                                </td>
                                <td>
                                   {a.price * a.count}
                                </td>
                                <td>
                                   <Trash3Fill
                                        onClick={() => dispatch(delCart(a.id))}
                                   />
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
            {
                state.cart.length == 0 ?
                <p>장바구니가 비어있습니다.</p>
                :             
                <div className={styles.total}>
                    <p>상품 합계: { price.reduce((a, b) => a+b) }원 </p>
                    <p 
                        className={styles.button}
                        onClick={()=>{ navigate('/test/1') }}
                    >구매하기</p>
                </div>
            }

        </div>
    );
}


export default Cart;
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';




function Test(){

    let { num } = useParams();
    let state = useSelector((state) => state);

    return(
        <div>
            <h4>구매정보테스트</h4>
            {
                num == 0 ?
                <div>
                    <p>title : {state.buyItem.title}</p>
                    <p>price : {state.buyItem.price}원</p>
                    <p>count : {state.buyItem.count}</p>
                    <p>total : {state.buyItem.price * state.buyItem.count}원</p>
                </div>
                :
                <div>
                    { 
                        state.cart.map((a, i) => {
                            return <ShowCart a = {a} key = {i} />
                        })
                    }
                </div>
            }
            
        </div>
    );
}


function ShowCart({ a }){

    return(
        <div>
            <p>title : {a.title}</p>
            <p>price : {a.price}원</p>
            <p>count : {a.count}</p>
        </div>
    );
}


export default Test;
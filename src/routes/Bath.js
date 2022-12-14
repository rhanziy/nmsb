import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Detail.module.css';
import { App, Card } from '../App';


function Bath({ bath }) {

    const categoryB = ['전체', ...new Set(bath.map((a)=> a.category))];
    let [ filter, setFilter ] = useState('전체');
    let check = categoryB[filter];
    let newBath = bath.filter(a => a.category == check);

    return (
        <div>
            <ul className={styles.menu}>
                {
                    categoryB.map((a, i)=>{
                        return(
                            <li 
                                className={styles.list}
                                key = {i}
                                onClick={()=>{
                                    setFilter(i);
                                }}
                            >{a}</li> 
                        );
                    })
                }
            </ul>
            {
                check == '전체' || check == undefined ? 
                <div className={styles.item}>
                    { 
                        bath.map((a, i)=>{
                            return(
                                <Card a={a} key={i} />
                            )
                        })
                    }
                </div>
                :                  
                <div className={styles.item}>
                    { 
                        newBath.map((a, i)=>{
                            return(
                                <Card a={a} key={i}/>
                            )
                        })
                    }
                </div>
            }
            
        </div>

    );
}


export default Bath;
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Detail.module.css';
import { App, Card } from '../App';


function Kitchen({ kitchen }) {

    const categoryK = ['전체', ...new Set(kitchen.map((a)=> a.category))];
    let [ filter, setFilter ] = useState('전체');

    let check = categoryK[filter];
    let newkitchen = kitchen.filter(a => a.category == check);



    return (
        <div>
            <ul className={styles.menu}>
                {
                    categoryK.map((a, i)=>{
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
                        kitchen.map((a, i)=>{
                            return(
                                <Card a={a} key={i}  />
                            )
                        })
                    }
                </div>
                :                  
                <div className={styles.item}>
                    { 
                        newkitchen.map((a, i)=>{
                            return(
                                <Card a={a} key={i} />
                            )
                        })
                    }
                </div>
            }
            
        </div>

    );
}


export default Kitchen;
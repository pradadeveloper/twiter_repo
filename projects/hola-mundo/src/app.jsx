// ESTILOS ESPECIFICOS DE LA TARJETA
import './app.css'

import { TwitterFollowCard } from './TwitterFollowCard.jsx'


export function App(){
    return(
    <>
        <TwitterFollowCard isFollowing={true} userName="jfprada" name="Juan Felipe Prada"/>
        <TwitterFollowCard isFollowing={false} userName="stroodman123" name="Big Strootman el mas grande    "/>
    </>
    )
}
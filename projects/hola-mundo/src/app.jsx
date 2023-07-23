// ESTILOS ESPECIFICOS DE LA TARJETA
import './app.css'

import { TwitterFollowCard } from './TwitterFollowCard.jsx'


export function App(){
    return(
    <>
        <TwitterFollowCard isFollowing={true} userName="jfprada" >Juan Felipe Prada</TwitterFollowCard>
        <TwitterFollowCard isFollowing={false} userName="stroodman123" >Big Strootman el mas grande</TwitterFollowCard>
    </>
    )
}
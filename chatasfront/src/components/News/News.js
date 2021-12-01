import React from 'react'
import 'antd/dist/antd.css';
import NewsSection from './NewsSection';

const News = () => {

    return (
        <div>
            <NewsSection category='everything' language='es,it,pt' query='qInTitle=carne' topHeading='Noticias en español e italiano | Notizie in spagnolo e italiano' linkText='Ver Más Noticias' results='9' />
            <NewsSection category='everything' language='en' query='qInTitle=meat' topHeading='Noticias en inglés | News in English' linkText='See More News' results='12' />
            <NewsSection category='everything' language='fr' query='qInTitle=viande' topHeading='Noticias en francés | Nouvelles en français' linkText='Voir plus de actualités' results='6' />    
        </div>
    )
}

export default News;
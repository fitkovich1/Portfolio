import React from 'react';
import styles from './Footer.module.css';
import './Footer.css'


function Footer() {

    return (
        <div className='footer'>
            <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"
                  integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
                  crossOrigin="anonymous"/>
            <span className="spanInitials">Фиткович Николай</span>
            <ul className="containerFooter">
                <li><a href="https://vk.com/volleymen"> <i className="fa fa-vk"></i> </a></li>
                <li><a href="https://www.instagram.com/nikola10fit_/"> <i className="fa fa-instagram"></i> </a></li>
                <li><a href="https://t.me/Fitkovich_Nikolai"> <i className="fa fa-telegram"></i> </a></li>
                <li><a href="https://github.com/fitkovich1"> <i className="fa fa-github"></i> </a></li>
                <li><a href="https://wa.me/375292746603"> <i className="fa fa-whatsapp"></i> </a></li>
            </ul>
            <span className="spanEndFooter">2019 Все права защищены</span>
        </div>
        /*{/!*<div className={styles.footer}>*!/}
        {/!*    <div className={styles.container}>*!/}
        {/!*      <span className={styles.spanInitials}>Фиткович Николай</span>*!/}
        {/!*      <div className={styles.imgBlock}>*!/}
        {/!*        <div className={styles.instaLogo}></div>*!/}
        {/!*        <div className={styles.tgLogo}></div>*!/}
        {/!*        <div className={styles.viberLogo}></div>*!/}
        {/!*        <div className={styles.vkLogo}></div>*!/}
        {/!*      </div>*!/}
        {/!*      <span className={styles.spanEndFooter}>2019 Все права защищены</span>*!/}
        {/!*    </div>*!/}
        {/!*</div>*!/}*/
    );
}

export default Footer;

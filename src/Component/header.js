import React from 'react';
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
function Header() {
    const { t } = useTranslation();

    return (
        <div className="navbar bg-primary">
            <div className="flex-1">
                <Link to="/"><a className="btn btn-ghost normal-case text-xl">Bababibot</a></Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/foods">{t('Restaurant')}</Link></li>
                </ul>
            </div>
        </div>
    );
}
export default Header;
import React, {useState} from 'react';
import Header from "../../Component/header";
import Footer from "../../Component/footer";
import {Link} from "react-router-dom";
import {t} from "i18next";
import SquareLoader from "../../Utils/Loader/SquareLoader";

function Food() {

    const [isLoading, setIsLoading] = useState(true);

    useState(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    return (
        <>
            <Header/>
            <div className="min-h-screen">
                {
                    isLoading ?
                        <div className="w-full mt-8 grid justify-items-center">
                            <SquareLoader />
                        </div>
                        :
                        <div className="max-w-5xl px-4 pt-4 mx-auto">
                            <div className="pb-4">
                                <Link to="/foods/add" className="btn btn-primary">{t('Add')}</Link>
                            </div>
                            <table className="table w-full">
                                <thead>
                                <tr>
                                    <th></th>
                                    <th>Ville</th>
                                    <th>Restaurant</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th>1</th>
                                    <td>Cy Ganderton</td>
                                    <td>Quality Control Specialist</td>
                                </tr>
                                <tr>
                                    <th>2</th>
                                    <td>Hart Hagerty</td>
                                    <td>Desktop Support Technician</td>
                                </tr>
                                <tr>
                                    <th>3</th>
                                    <td>Brice Swyre</td>
                                    <td>Tax Accountant</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                }
            </div>
            <Footer/>
        </>
    );
}

export default Food;
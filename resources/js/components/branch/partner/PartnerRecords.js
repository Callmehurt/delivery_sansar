import React, {useEffect} from "react";
import PartnerTable from "./PartnerTable";
import {useDispatch, useSelector} from "react-redux";

import {fetchPartners} from "../../../redux/actions/branchActions";

const PartnerRecords = () => {

    const dispatch = useDispatch();
    const partners = useSelector((state) => state.branchPartners);


    useEffect(() => {
        dispatch(fetchPartners())
    }, [])


    return (
        <>
            <div className="page-title-box">
                <div className="row align-items-center">
                    <div className="col-sm-6">
                        <h4 className="page-title">Partners</h4>
                    </div>
                    <div className="col-sm-6">
                        <ol className="breadcrumb float-right">
                            <li className="breadcrumb-item">System</li>
                            <li className="breadcrumb-item active">Partners</li>
                        </ol>
                    </div>
                </div>
            </div>

            <PartnerTable partners={partners} />
        </>
    )
}

export default PartnerRecords;

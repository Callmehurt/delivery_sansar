import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {registerPartner} from "../../../redux/actions/branchActions";

const PartnerTable = ({partners}) => {

    const dispatch = useDispatch();

    const [partnerDetail, setPartnerDetail] = useState({
       name: '',
       address: '',
       phone: '',
       email: '',
    });

    useEffect(() => {
        load();
    },[])

    const handleInputChange = (event) => {
        const newDetail = {...partnerDetail};
        newDetail[event.target.name] = event.target.value;
        setPartnerDetail(newDetail);
    }

    const submitForm = () => {
        dispatch(registerPartner(partnerDetail));
        $('#partner_list').DataTable().ajax.reload(null, false);
    }

    const load = () => {
        $('#partner_list').DataTable({
            "lengthMenu": [ [50, 100, 150, -1], [50, 100, 150, "All"] ],
            "pageLength": 50,
            "processing": true,
            "severside": true,
            ajax: "/branch/get/partner-list",
            columns: [
                {"data": "name"},
                {"data": "address"},
                {"data": "phone"},
                {"data": "email"},
            ],
        });
    }

    return (
        <>
            <div className="row">
                <div className="col-12">
                    <div className="card m-b-30">
                        <div className="card-body">
                            <button className={'btn btn-sm btn-primary mb-3'} data-toggle={'modal'} data-target={'#addNewPartnerModal'}>Register New Partner</button>
                            <table id="partner_list" className="table table-bordered dt-responsive nowrap"
                                   style={{borderCollapse: 'collapse', borderSpacing: '0', width: '100%'}}>
                                <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Address</th>
                                    <th>Contact</th>
                                    <th>Email</th>
                                </tr>
                                </thead>
                                <tbody>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>


            <div id="addNewPartnerModal" className="modal fade" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title mt-0" id="myModalLabel">Register New Partner</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form className="">
                                <div className="form-group">
                                    <label>Partner Name</label>
                                    <input type="text" className="form-control" name={'name'} value={partnerDetail.name} onChange={(event) => handleInputChange(event)} placeholder="Partner name"/>
                                </div>
                                <div className="form-group">
                                    <label>Partner Address</label>
                                    <input type="text" className="form-control" name={'address'} value={partnerDetail.address} onChange={(event) => handleInputChange(event)} placeholder="Partner address"/>
                                </div>
                                <div className="form-group">
                                    <label>Partner Phone</label>
                                    <input type="text" className="form-control" name={'phone'} value={partnerDetail.phone} onChange={(event) => handleInputChange(event)} placeholder="Partner phone"/>
                                </div>
                                <div className="form-group">
                                    <label>Partner Email</label>
                                    <input type="text" className="form-control" name={'email'} value={partnerDetail.email} onChange={(event) => handleInputChange(event)} placeholder="Partner email"/>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary waves-effect"
                                    data-dismiss="modal">Close
                            </button>
                            <button type="button" className="btn btn-primary waves-effect waves-light" onClick={submitForm}>Register</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default PartnerTable;

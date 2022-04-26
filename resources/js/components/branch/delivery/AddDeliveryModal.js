import React from "react";
import Select from "react-select/base";

const AddDeliveryModal = () => {

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

    return (
        <>
            <div id="addNewDeliveryModal" className="modal fade" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title mt-0" id="myModalLabel">Add New Delivery</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form className="" action="#">
                                <div className="form-group">
                                    <label>Partner</label>
                                    <Select
                                        isDisabled={false}
                                        isLoading={false}
                                        isClearable={false}
                                        isRtl={false}
                                        isSearchable={true}
                                        name="partner"
                                        placeholder="== Select Partner =="
                                        options={options}
                                        className={'form-control-file'}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Customer Detail</label>
                                    <div style={{display:'flex',flexDirection:'row', flexWrap:'wrap'}}>
                                        <div style={{width:'90%'}}>
                                            <Select
                                                isDisabled={false}
                                                isLoading={false}
                                                isClearable={false}
                                                isRtl={false}
                                                isSearchable={true}
                                                name="customer"
                                                placeholder="== Select Customer =="
                                                options={options}
                                                className={'form-control-file'}
                                            />
                                        </div>
                                        <div style={{width:'10%'}}>
                                            <div className="input-group-append bg-custom b-0" style={{cursor: 'Pointer', height: '100%', width: '100%'}} data-toggle="modal" data-target="#addNewCustomerModal"><span
                                                className="input-group-text"><i className="mdi mdi-account-plus"></i></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Package Type</label>
                                    <input type="text" className="form-control" required placeholder="Type something"/>
                                </div>
                                <div className="form-group">
                                    <label>Package Weight</label>
                                    <input type="text" className="form-control" required placeholder="Type something"/>
                                </div>
                                <div className="form-group">
                                    <label>COD Amount</label>
                                    <input type="text" className="form-control" required placeholder="Type something"/>
                                </div>
                                <div className="form-group">
                                    <label>Package Detail</label>
                                    <input type="text" className="form-control" required placeholder="Type something"/>
                                </div>
                                <div className="form-group">
                                    <label>Delivery Charge</label>
                                    <input type="text" className="form-control" required placeholder="Type something"/>
                                </div>
                                <div className="form-group">
                                    <label>From</label>
                                    <input type="text" className="form-control" required placeholder="Type something"/>
                                </div>
                                <div className="form-group">
                                    <label>To</label>
                                    <input type="text" className="form-control" required placeholder="Type something"/>
                                </div>
                                <div className="form-group">
                                    <label>Textarea</label>
                                    <div>
                                        <textarea required className="form-control parsley-error" rows="5"></textarea>
                                        <ul className="parsley-errors-list filled">
                                            <li className="parsley-required">This value is required.</li>
                                        </ul>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary waves-effect"
                                    data-dismiss="modal">Close
                            </button>
                            <button type="button" className="btn btn-primary waves-effect waves-light">Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div id="addNewCustomerModal" className="modal fade" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title mt-0" id="myModalLabel">Add New Customer</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form className="">
                                <div className="form-group">
                                    <label>Customer Name</label>
                                    <input type="text" className="form-control" required placeholder="Customer name"/>
                                </div>
                                <div className="form-group">
                                    <label>Customer Phone</label>
                                    <input type="text" className="form-control" required placeholder="Customer phone"/>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary waves-effect"
                                    data-dismiss="modal">Close
                            </button>
                            <button type="button" className="btn btn-primary waves-effect waves-light">Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddDeliveryModal;

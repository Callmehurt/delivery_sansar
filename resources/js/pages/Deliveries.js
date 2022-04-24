import React from "react";

import NewRegisteredDeliveries from "../components/NewRegisteredDeliveries";

const Deliveries = () => {
    return (
        <>
            <div className="page-title-box">
                <div className="row align-items-center">
                    <div className="col-sm-6">
                        <h4 className="page-title">Deliveries</h4>
                    </div>
                    <div className="col-sm-6">
                        <ol className="breadcrumb float-right">
                            <li className="breadcrumb-item">System</li>
                            <li className="breadcrumb-item active">Deliveries</li>
                        </ol>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-12">
                    <div className="card m-b-30">
                        <div className="card-body">
                            <ul className="nav nav-pills nav-justified" role="tablist">
                                <li className="nav-item waves-effect waves-light">
                                    <a className="nav-link active" data-toggle="tab" href="#new" role="tab">
                                        <span className="d-md-block">New - [0]</span>
                                    </a>
                                </li>
                                <li className="nav-item waves-effect waves-light">
                                    <a className="nav-link" data-toggle="tab" href="#warehouseTab" role="tab">
                                        <span className="d-md-block">Warehouse - [0]</span>
                                    </a>
                                </li>
                                <li className="nav-item waves-effect waves-light">
                                    <a className="nav-link" data-toggle="tab" href="#onWayTab" role="tab">
                                        <span className="d-md-block">On Way - [0]</span>
                                    </a>
                                </li>
                                <li className="nav-item waves-effect waves-light">
                                    <a className="nav-link" data-toggle="tab" href="#deliveredTab" role="tab">
                                        <span className="d-md-block">Delivered - [0]</span>
                                    </a>
                                </li>
                                <li className="nav-item waves-effect waves-light">
                                    <a className="nav-link" data-toggle="tab" href="#onHoldTab" role="tab">
                                        <span className="d-md-block">On Hold - [0]</span>
                                    </a>
                                </li>
                                <li className="nav-item waves-effect waves-light">
                                    <a className="nav-link" data-toggle="tab" href="#cancelledTab" role="tab">
                                        <span className="d-md-block">Cancelled - [0]</span>
                                    </a>
                                </li>
                            </ul>

                            <div className="tab-content">
                                <div className="tab-pane active p-3" id="new" role="tabpanel">
                                    <NewRegisteredDeliveries/>
                                </div>
                                <div className="tab-pane p-3" id="warehouseTab" role="tabpanel">
                                    <p className="mb-0">
                                        Warehouse
                                    </p>
                                </div>
                                <div className="tab-pane p-3" id="onWayTab" role="tabpanel">
                                    <p className="mb-0">
                                        On Way
                                    </p>
                                </div>
                                <div className="tab-pane p-3" id="deliveredTab" role="tabpanel">
                                    <p className="mb-0">
                                       Delivered
                                    </p>
                                </div>
                                <div className="tab-pane p-3" id="onHoldTab" role="tabpanel">
                                    <p className="mb-0">
                                        Hold
                                    </p>
                                </div>
                                <div className="tab-pane p-3" id="cancelledTab" role="tabpanel">
                                    <p className="mb-0">
                                       Cancel
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Deliveries;

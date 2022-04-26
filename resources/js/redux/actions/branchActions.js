import {BranchTypes} from "../types/branch-types";
import axios from "axios";

export const fetchPartners = () =>
    async (dispatch) => {
        const {data} = await axios.get('/branch/get/partner-list');
        dispatch({
            type: BranchTypes.FETCH_PARTNERS,
            payload: data
        });
    };

export const registerPartner = (partnerDetail) =>
    async (dispatch) => {
        const response = await axios.post('/branch/register/partner', partnerDetail);
        dispatch({
            type: BranchTypes.REGISTER_PARTNER,
            payload: response?.data
        });
    };

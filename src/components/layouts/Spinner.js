import React from 'react';
import { SwapSpinner } from "react-spinners-kit";
import './Spinner.css';

const Spinner = () => {
    return (
        <div className="spinner text-center">
            <SwapSpinner size={40} color="#FFFFFF" />
        </div>
    )
}
export default Spinner;
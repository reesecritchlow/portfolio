import React from "react";
import qrcode from "../media/qr-code.svg";
import { useMediaQuery } from 'react-responsive';


function QRCode() {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 600px)' });

    if (isTabletOrMobile) {
        return (
            <div class="parent">
                <img class="qrcodeMobile" src={qrcode} alt="qr code for reesecritchlow.com" />
            </div>
        );
    } else {
        return (
            <div class="parent">
                <img class="qrcode" src={qrcode} alt="qr code for reesecritchlow.com" />
            </div>
        );
    }

}


export default QRCode;
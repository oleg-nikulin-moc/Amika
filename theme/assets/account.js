// start Auth
    function toBase64(body) {
        const base64 = btoa(body);
        return base64;
    }

    function generateAuthToken(body, secretCode) {
        const id = body.customer.id;
        const email = body.customer.email;
        const defaultAddressId = body.customer.default_address.id;

        const authToken = email + "|" + defaultAddressId + "|" + id;
        console.log({authToken});
        const ab = authToken + secretCode;
        const hash = CryptoJS.SHA256(ab);
        const signedToken = CryptoJS.enc.Hex.stringify(hash);
        return toBase64(signedToken);
    }
    console.log('account.js');
// end Auth

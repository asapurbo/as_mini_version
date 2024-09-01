const EmailValidation = (str) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    return typeof str === 'string' && str.match(emailPattern) ? str : false;
};

export default EmailValidation;

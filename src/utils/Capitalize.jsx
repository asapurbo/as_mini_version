const Capitalize = (str) => {
    const strData =
        typeof str === 'string' && str.trim().length > 0 ? str : false;

    if (strData) {
        let mainData = '';

        for (let i = 0; i < strData.length; i++) {
            if (i === 0) {
                mainData += strData.charAt(0).toUpperCase();
            } else if (strData[i] === ' ') {
                mainData += strData[i];
                if (strData[i] === ' ' && strData[i + 1]) {
                    mainData += strData[i + 1].replace(
                        strData[i + 1],
                        strData[i + 1].toUpperCase()
                    );
                }
            } else {
                mainData += strData[i];
            }
        }
        return mainData;
    }
    return ' ';
};

export default Capitalize;

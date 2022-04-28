import swAlert from '@sweetalert/with-react';

const handleError = (title, message, type) => {
    swAlert(title, message, type);
}

export default handleError;
import axios from 'axios';

const addForm = (name, email, phone, message) => {
    axios.post('https://interior-project-backend.onrender.com/saveForm', {
        name, email,phone, message
    })    
}

export { addForm };
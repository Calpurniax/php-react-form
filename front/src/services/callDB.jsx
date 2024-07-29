import axios from 'axios';

export const sendMessage = message => axios.post('http://localhost:52000/', {    
    register_name: message.name,
    register_last_name: message.last_name,
    email: message.email,
    phone: message.phone
})


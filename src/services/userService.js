import axios from '../axios'

const handleLoginApi = (email, password) => {
    return axios.post('api/login', { email, password });
}
const getAllUsers = (inputId) => {
    return axios.get(`/api-get-all-user?id=${inputId}`)
}
const cretaNewUserService = (data) => {
    console.log('check data from serevice:', data)
    return axios.post('/api/create-new-user', data)
}

const deleteUserService = (userId) => {
    return axios.delete('/api/delete-user', {
        data: {
            id: userId
        }
    })
}

const editUserService = (inputData) => {
    return axios.put('/api/edit-user', inputData)
}



export { handleLoginApi, getAllUsers, cretaNewUserService, deleteUserService, editUserService };
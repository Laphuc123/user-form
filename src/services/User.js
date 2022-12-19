import api from "./Asios";
export const getUser = () =>{
    return api.get("users")
}
export const pushData = (path, data) => {
    return  api.post((path),{
        name:data.name,
        email:data.email,
        phone:data.phone,
        address:data.address,
        age:data.age,
        dateOfBirth:data.dateOfBirth,
        gender:data.gender,
    })
}
export const updateData = (path,data) => {
    return  api.put((path),{
        name:data.name,
        email:data.email,
        phone:data.phone,
        address:data.address,
        age:data.age,
        dateOfBirth:data.dateOfBirth,
        gender:data.gender,
    })
}
export const getInfoUser = async (id) => {
    const res = await api.get(`users/${id}`)
    return res.data
}
export const deleteUser = (id) => {
    return api.delete(`/users/${id}`)
}
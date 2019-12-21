//action cua redux thuan chi tra ve 1 object
export const login = () => {
    const data = { email: "nguyenhoainam@gmail.com" }
    return {
        type: "LOGIN",
        payload: data
    }
}
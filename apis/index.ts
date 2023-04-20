interface IUserData {
  username: string
  fullName: string
  email: string
  role: string
  province: string
  areaInCharge: string
  phone: string
  password: string
}
export const createUser = (user: IUserData) => {
  console.log(user)
}

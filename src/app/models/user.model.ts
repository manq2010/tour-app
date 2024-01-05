export interface UserLoggedIn {
  status: string
  message: string
  detail: any
  DetailDescription: DetailDescription
}

export interface DetailDescription {
  id: string
  fullName: string
  idNumber: string
  emailConfirmed: boolean
  email: string
  userName: string
  phoneNumber: any
  passwordHash: string
  token: string
}

export interface Student {
    id: number
    name: string
    address: string
    phoneNumber: string
    email: string
}

export interface ResponseStudent {
    status: string
    message: string
    detail: any
    detailDescription: Student
}
  
export interface User {
  _id: string,
  google_id: string,
  name: string,
  email: string,
  email_verified: boolean,
  picture: string,
  isAuthenticated?: boolean
}
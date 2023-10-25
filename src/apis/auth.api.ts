import { AuthResponse } from 'src/types/auth.type';
import htpp from 'src/utils/http'

export const registerAccount = (body: { email: string; password: string }) => htpp.post<AuthResponse>('/register',body)

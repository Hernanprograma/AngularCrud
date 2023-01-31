

export interface LoginInterface {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

export interface RegisterResponse {
  id: number;
  token: string;
}

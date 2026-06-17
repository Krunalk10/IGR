export interface Role {
  id: string
  nameEnglish: string
  nameMarathi: string
  description: string
  status: 'Active' | 'Inactive'
  createdBy: string
  createdOn: string
  updatedBy: string
  updatedOn: string
}

export interface User {
  loginId: string
  email: string
  role: string
}

export interface LoginFormData {
  loginId: string
  password: string
  captcha: string
}

export interface CreateRoleFormData {
  nameEnglish: string
  nameMarathi: string
  description: string
  status: 'Active' | 'Inactive'
}

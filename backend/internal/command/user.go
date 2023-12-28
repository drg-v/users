package command

type CreateUser struct {
	Email    string `json:"email" binding:"required"`
	Password string `json:"password" binding:"required"`
	Phone    string `json:"phone" binding:"required"`
	Username string `json:"username" binding:"required"`
	Name     string `json:"name" binding:"required"`
	Surname  string `json:"surname" binding:"required"`
}

type UpdateUser struct {
	Email    string `json:"email,omitempty"`
	Password string `json:"password,omitempty"`
	Phone    string `json:"phone,omitempty"`
	Username string `json:"username,omitempty"`
	Name     string `json:"name,omitempty"`
	Surname  string `json:"surname,omitempty"`
}

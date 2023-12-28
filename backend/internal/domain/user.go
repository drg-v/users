package domain

type User struct {
	ID       uint   `json:"id"`
	Email    string `json:"email"`
	Password string `json:"password"`
	Phone    string `json:"phone"`
	Username string `json:"username"`
	Name     string `json:"name"`
	Surname  string `json:"surname"`
}

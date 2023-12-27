package models

import "gorm.io/gorm"

type User struct {
	gorm.Model
	Email    string `gorm:"type:varchar(50); not null; unique"`
	Password string `gorm:"type:varchar(200); not null"`
	Phone    string `gorm:"type:varchar(50); not null; unique"`
	Username string `gorm:"type:varchar(50); not null; unique"`
	Name     string `gorm:"type:varchar(50); not null"`
	Surname  string `gorm:"type:varchar(50); not null"`
}

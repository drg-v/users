package repositories

import (
	"gorm.io/gorm"
	"users/config"
)

type Repository struct {
}

func NewRepository(db *gorm.DB, cfg *config.Config) *Repository {
	return &Repository{}
}

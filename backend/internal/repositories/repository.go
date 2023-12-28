package repositories

import (
	"context"
	"users/internal/models"

	"gorm.io/gorm"
)

type User interface {
	Create(ctx context.Context, user *models.User) (uint, error)
	GetAll(ctx context.Context, page int, pageSize int) ([]models.User, error)
	GetByID(ctx context.Context, userID int) (*models.User, error)
	Update(ctx context.Context, userID int, user *models.User) error
	Delete(ctx context.Context, id int) error
}

type Repository struct {
	User
}

func NewRepository(db *gorm.DB) *Repository {
	return &Repository{
		User: NewUserRepository(db),
	}
}

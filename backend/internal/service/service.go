package service

import (
	"context"
	"users/internal/domain"
	"users/internal/repositories"
)

type User interface {
	Create(ctx context.Context, user *domain.User) (uint, error)
	GetAll(ctx context.Context, page int, pageSize int) ([]domain.User, error)
	Update(ctx context.Context, user *domain.User, id int) error
	Delete(ctx context.Context, id int) error
}

type Service struct {
	User
}

func NewService(repository *repositories.Repository) *Service {
	return &Service{
		User: NewUserService(repository.User),
	}
}

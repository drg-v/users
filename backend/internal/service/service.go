package service

import (
	"users/config"
	"users/internal/repositories"
)

type Service struct{}

func NewService(repository *repositories.Repository, cfg *config.Config) *Service {
	return &Service{}
}

package service

import (
	"context"
	"crypto/sha256"
	"errors"
	"fmt"
	"users/internal/domain"
	"users/internal/models"
	"users/internal/repositories"
)

type UserService struct {
	userRepo repositories.User
}

func NewUserService(userRepo repositories.User) *UserService {
	return &UserService{userRepo: userRepo}
}

func (s *UserService) Create(ctx context.Context, user *domain.User) (uint, error) {
	user.Password = s.generatePasswordHash(user.Password)

	userID, err := s.userRepo.Create(ctx, domainUserToDB(user))
	if err != nil {
		return userID, err
	}

	return userID, nil
}

func (s *UserService) GetAll(ctx context.Context, page int, pageSize int) ([]domain.User, error) {
	userModels, err := s.userRepo.GetAll(ctx, page, pageSize)
	if err != nil {
		return nil, err
	}

	users := make([]domain.User, 0)

	for _, model := range userModels {
		user := domain.User{
			ID:       model.ID,
			Email:    model.Email,
			Phone:    model.Phone,
			Username: model.Username,
			Name:     model.Name,
			Surname:  model.Surname,
		}
		users = append(users, user)
	}

	return users, nil
}

func (s *UserService) Update(ctx context.Context, user *domain.User, id int) error {
	_, err := s.userRepo.GetByID(ctx, id)
	if err != nil {
		return errors.New("user does not exist")
	}

	userModel := models.User{
		Email:    user.Email,
		Phone:    user.Phone,
		Username: user.Username,
		Name:     user.Name,
		Surname:  user.Surname,
	}

	if user.Password != "" {
		userModel.Password = s.generatePasswordHash(user.Password)
	}

	if err := s.userRepo.Update(ctx, id, &userModel); err != nil {
		return errors.New("unable to update a user")
	}

	return nil
}

func (s *UserService) Delete(ctx context.Context, id int) error {
	_, err := s.userRepo.GetByID(ctx, id)
	if err != nil {
		return errors.New("user does not exist")
	}

	return s.userRepo.Delete(ctx, id)
}

func (s *UserService) generatePasswordHash(password string) string {
	hash := sha256.New()
	hash.Write([]byte(password))

	salt := "kfainecuignyxwamg7nqoc8w7gnxrgnerkh"

	return fmt.Sprintf("%x", hash.Sum([]byte(salt)))
}

func domainUserToDB(user *domain.User) *models.User {
	return &models.User{
		Email:    user.Email,
		Password: user.Password,
		Phone:    user.Phone,
		Username: user.Username,
		Name:     user.Name,
		Surname:  user.Surname,
	}
}

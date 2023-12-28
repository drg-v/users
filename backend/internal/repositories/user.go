package repositories

import (
	"context"
	"users/internal/models"

	"gorm.io/gorm"
)

type UserRepository struct {
	DB *gorm.DB
}

func NewUserRepository(db *gorm.DB) *UserRepository {
	return &UserRepository{DB: db}
}

func (r *UserRepository) Create(ctx context.Context, user *models.User) (uint, error) {
	err := r.DB.WithContext(ctx).Create(user).Error
	return user.ID, err
}

func (r *UserRepository) GetAll(ctx context.Context, page int, pageSize int) ([]models.User, error) {
	var users []models.User

	if err := r.DB.WithContext(ctx).Limit(pageSize).Offset((page - 1) * pageSize).Order("updated_at desc").Find(&users).Error; err != nil {
		return nil, err
	}

	return users, nil
}

func (r *UserRepository) GetByID(ctx context.Context, userID int) (*models.User, error) {
	var user models.User

	err := r.DB.WithContext(ctx).Where("id = ?", userID).First(&user).Error
	if err != nil {
		return nil, err
	}

	return &user, nil
}

func (r *UserRepository) Update(ctx context.Context, userID int, user *models.User) error {
	return r.DB.WithContext(ctx).Model(models.User{}).Where("id = ?", userID).Updates(user).Error
}

func (r *UserRepository) Delete(ctx context.Context, id int) error {
	return r.DB.WithContext(ctx).Where("id = ?", id).Delete(&models.User{}).Error
}

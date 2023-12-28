package database

import (
	"fmt"
	"users/config"
	"users/internal/models"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

func NewPostgresDB(cfg *config.Config) (*gorm.DB, error) {
	dsn := fmt.Sprintf(
		"host=%s port=%s user=%s dbname=%s password=%s sslmode=%s",
		cfg.PostgreSQL.Host,
		cfg.PostgreSQL.Port,
		cfg.PostgreSQL.Username,
		cfg.PostgreSQL.Database,
		cfg.PostgreSQL.Password,
		cfg.PostgreSQL.SSLMODE,
	)

	db, err := gorm.Open(
		postgres.Open(dsn),
		&gorm.Config{},
	)
	if err != nil {
		return nil, err
	}

	if err := db.AutoMigrate(
		&models.User{},
	); err != nil {
		return nil, err
	}

	return db, nil
}

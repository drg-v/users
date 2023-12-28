package app

import (
	"fmt"
	"users/config"
	"users/internal/controllers"
	"users/internal/infrastructure/database"
	"users/internal/repositories"
	"users/internal/service"
)

func Run() error {
	cfg := config.GetConfig()

	fmt.Println(cfg)

	db, err := database.NewPostgresDB(cfg)
	if err != nil {
		panic(err)
	}

	rpsrs := repositories.NewRepository(db)
	srvcs := service.NewService(rpsrs)
	cntrs := controllers.NewController(srvcs, cfg)

	err = cntrs.InitRouter(cfg.App.Port)
	if err != nil {
		return err
	}

	return nil
}

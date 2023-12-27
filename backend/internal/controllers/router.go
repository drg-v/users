package controllers

import (
	"github.com/gin-gonic/gin"
	"users/config"
	"users/internal/service"
)

type Controller struct {
	services *service.Service
	cfg      *config.Config
}

func NewController(services *service.Service, cfg *config.Config) *Controller {
	return &Controller{
		services: services,
		cfg:      cfg,
	}
}

func CORSMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	}
}

func (h *Controller) InitRouter(port string) error {
	router := gin.Default()

	router.Use(CORSMiddleware())
	// gr := router.Group("/api/v1")

	return router.Run(port)
}

package controllers

import (
	"users/config"
	"users/internal/service"

	"github.com/gin-gonic/gin"
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
	gr := router.Group("/api/v1")

	users := gr.Group("/users")
	users.GET("", h.getAllUsers)
	users.POST("", h.createUser)
	users.PATCH("/:id", h.updateUser)
	users.DELETE("/:id", h.deleteUser)

	return router.Run(port)
}

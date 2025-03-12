package main

import (
	"auth-app/config"
	"auth-app/routes"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	// Konfigurasi CORS
	corsConfig := cors.Config{
		AllowOrigins: []string{"http://localhost:3000"},
		AllowHeaders: []string{"Content-Type"},
		AllowMethods: []string{"GET", "POST", "PUT"},
	}
	r.Use(cors.New(corsConfig))
	config.ConnectDatabase()
	routes.SetupRoutes(r)
	r.Run(":8080")
}

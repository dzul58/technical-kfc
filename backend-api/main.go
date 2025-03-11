package main

import (
	"auth-app/config"
	"auth-app/routes"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()
	config.ConnectDatabase()
	routes.SetupRoutes(r)
	r.Run(":8080") // Jalankan server di port 8080
}

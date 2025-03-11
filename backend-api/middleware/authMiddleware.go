package middleware

import (
	"github.com/gin-gonic/gin"
)

func AuthMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		// Implement JWT validation here (not implemented in this snippet)
		c.Next()
	}
}

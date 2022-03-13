package main

import (
	"fmt"
	"github.com/OpenCal-FYDP/Identity/internal/service"
	"github.com/OpenCal-FYDP/Identity/internal/storage"
	"github.com/OpenCal-FYDP/Identity/rpc"
	"github.com/rs/cors"
	"log"
	"math/rand"
	"net/http"
	"os"
)

func randomString(n int) string {
	var letters = []rune("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789")

	s := make([]rune, n)
	for i := range s {
		s[i] = letters[rand.Intn(len(letters))]
	}
	return string(s)
}

func main() {
	secret := os.Getenv("SECRET")
	if secret == "" {
		secret = randomString(128)
		fmt.Printf("Randomly Generated Secret: %s\n", secret)
	}
	corsWrapper := cors.New(cors.Options{
		AllowedOrigins: []string{"http://localhost:3000"},
		AllowedMethods: []string{"POST"},
		AllowedHeaders: []string{"Content-Type"},
	})

	svc := service.New(storage.New())
	server := rpc.NewIdentityServiceServer(svc)
	handler := corsWrapper.Handler(server)
	log.Fatal(http.ListenAndServe(":8080", handler))
}

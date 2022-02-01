package main

import (
	"github.com/OpenCal-FYDP/Identity/internal/service"
	"github.com/OpenCal-FYDP/Identity/rpc"
	"log"
	"net/http"
)

func main() {
	service := service.New()
	server := rpc.NewIdentityServiceServer(service)
	log.Fatal(http.ListenAndServe(":8080", server))
}

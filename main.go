package main

import (
	"github.com/OpenCal-FYDP/Identity/internal/service"
	"github.com/OpenCal-FYDP/Identity/internal/storage"
	"github.com/OpenCal-FYDP/Identity/rpc"
	"log"
	"net/http"
)

func main() {
	svc := service.New(storage.New())
	server := rpc.NewIdentityServiceServer(svc)
	log.Fatal(http.ListenAndServe(":8080", server))
}

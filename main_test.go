package main

import (
	"context"
	"github.com/OpenCal-FYDP/Identity/rpc"
	"github.com/stretchr/testify/assert"
	"net/http"
	"testing"
)

func TestGetUser(t *testing.T) {
	client := rpc.NewIdentityServiceJSONClient("http://localhost:8080", &http.Client{})
	req := &rpc.GetUserReq{
		Email:    "test1@gmail.com",
		Username: "testMunch",
	}
	res, err := client.GetUser(context.Background(), req)
	if err != nil {
		t.Error(err)
	}
	assert.NotNil(t, res)
}

func TestUpdateUser(t *testing.T) {
	client := rpc.NewIdentityServiceJSONClient("http://localhost:8080", &http.Client{})
	req := &rpc.UpdateUserReq{
		Email:    "test1@gmail.com",
		Username: "testMunch",
	}
	res, err := client.UpdateUser(context.Background(), req)
	if err != nil {
		t.Error(err)
	}
	assert.NotNil(t, res)
}

func TestGetTeam(t *testing.T) {
	client := rpc.NewIdentityServiceJSONClient("http://localhost:8080", &http.Client{})
	req := &rpc.GetTeamReq{
		TeamID:   "SomeUUID",
		TeamName: "testTeam",
	}
	res, err := client.GetTeam(context.Background(), req)
	if err != nil {
		t.Error(err)
	}
	assert.NotNil(t, res)
}

func TestUpdateTeam(t *testing.T) {
	client := rpc.NewIdentityServiceJSONClient("http://localhost:8080", &http.Client{})
	req := &rpc.UpdateTeamReq{
		TeamID:      "SomeUUID",
		TeamName:    "testTeam",
		TeamMembers: []string{"test1@gmail.com", "test2@gmail.com"},
	}
	res, err := client.UpdateTeam(context.Background(), req)
	if err != nil {
		t.Error(err)
	}
	assert.NotNil(t, res)
}

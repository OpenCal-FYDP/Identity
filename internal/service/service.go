package service

import (
	"context"
	"github.com/OpenCal-FYDP/Identity/internal/storage"
	"github.com/OpenCal-FYDP/Identity/rpc"
)

type IdentityService struct {
	storage *storage.Storage
}

func (i *IdentityService) GetUser(ctx context.Context, req *rpc.GetUserReq) (*rpc.GetUserRes, error) {
	res := new(rpc.GetUserRes)
	err := i.storage.GetUser(req, res)
	if err != nil {
		return nil, err
	}
	return res, nil

}

func (i *IdentityService) UpdateUser(ctx context.Context, req *rpc.UpdateUserReq) (*rpc.UpdateUserRes, error) {
	res := new(rpc.UpdateUserRes)
	err := i.storage.UpdateUser(req, res)
	if err != nil {
		return nil, err
	}
	return res, nil
}

func (i *IdentityService) GetTeam(ctx context.Context, req *rpc.GetTeamReq) (*rpc.GetTeamRes, error) {
	res := new(rpc.GetTeamRes)
	err := i.storage.GetTeam(req, res)
	if err != nil {
		return nil, err
	}
	return res, nil
}

func (i *IdentityService) UpdateTeam(ctx context.Context, req *rpc.UpdateTeamReq) (*rpc.UpdateTeamRes, error) {
	res := new(rpc.UpdateTeamRes)
	err := i.storage.UpdateTeam(req, res)
	if err != nil {
		return nil, err
	}
	return res, nil
}

func New(s *storage.Storage) *IdentityService {
	return &IdentityService{
		s,
	}
}

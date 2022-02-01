package service

import (
	"context"
	"github.com/OpenCal-FYDP/Identity/rpc"
)

type IdentityService struct{}

func (i *IdentityService) GetUser(ctx context.Context, req *rpc.GetUserReq) (*rpc.GetUserRes, error) {
	panic("implement me")
}

func (i *IdentityService) UpdateUser(ctx context.Context, req *rpc.UpdateUserReq) (*rpc.UpdateUserRes, error) {
	panic("implement me")
}

func (i *IdentityService) GetTeam(ctx context.Context, req *rpc.GetTeamReq) (*rpc.GetTeamRes, error) {
	panic("implement me")
}

func (i *IdentityService) UpdateTeam(ctx context.Context, req *rpc.UpdateTeamReq) (*rpc.UpdateTeamRes, error) {
	panic("implement me")
}

func New() *IdentityService {
	return &IdentityService{}
}
package storage

import (
	"github.com/OpenCal-FYDP/Identity/rpc"
	"github.com/stretchr/testify/require"
	"testing"
)

func TestStorage(t *testing.T) {
	s := New()
	tokenAsBytes := []byte("")
	email := "anEmail@gmail.com"
	user := "aUser"
	team := "newTeam"

	t.Run("Update", func(t *testing.T) {

		req := &rpc.UpdateUserReq{
			Email:     email,
			Username:  user,
			TeamID:    team,
			OathToken: tokenAsBytes,
		}

		res := &rpc.UpdateUserRes{}

		err := s.UpdateUser(req, res)
		require.NoError(t, err)
	})

	t.Run("Get", func(t *testing.T) {
		req := &rpc.GetUserReq{
			Email:    email,
			Username: user,
		}

		res := &rpc.GetUserRes{}

		err := s.GetUser(req, res)
		require.NoError(t, err)

		//token := &oauth2.Token{}
		//err = json.Unmarshal(res.GetOathToken(), token)
		//require.NoError(t, err)

		//assert.Equal(t, tokenAsBytes, res.GetOathToken())
	})
}

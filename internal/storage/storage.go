package storage

import (
	"errors"
	"github.com/OpenCal-FYDP/Identity/rpc"
	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/dynamodb"
	"github.com/aws/aws-sdk-go/service/dynamodb/dynamodbattribute"
	"github.com/aws/aws-sdk-go/service/dynamodb/dynamodbiface"
)

const teamTable = "Teams"
const userTable = "User"

type Storage struct {
	client dynamodbiface.DynamoDBAPI
}

func New() *Storage {
	sess := session.Must(session.NewSessionWithOptions(session.Options{
		SharedConfigState: session.SharedConfigEnable,
		Config: aws.Config{
			Region: aws.String("us-east-1")},
	}))

	client := dynamodb.New(sess)

	return &Storage{client}
}

func (s *Storage) GetUser(req *rpc.GetUserReq, res *rpc.GetUserRes) error {
	result, err := s.client.GetItem(&dynamodb.GetItemInput{
		TableName: aws.String(userTable),
		Key: map[string]*dynamodb.AttributeValue{
			"email": {
				S: aws.String(req.Email),
			},
			"username": {
				S: aws.String(req.Username),
			},
		},
	})

	if err != nil {
		return err
	}

	// Now we will need to go through and update the res
	if result.Item == nil {
		return errors.New("key not found")
	}

	// Unmarshal the value from dynamodb attribute to go type
	// It will be stored in res address
	err = dynamodbattribute.UnmarshalMap(result.Item, &res)

	if err != nil {
		return err
	}

	return nil
}

func (s *Storage) GetTeam(req *rpc.GetTeamReq, res *rpc.GetTeamRes) error {
	result, err := s.client.GetItem(&dynamodb.GetItemInput{
		TableName: aws.String(teamTable),
		Key: map[string]*dynamodb.AttributeValue{
			"teamID": {
				S: aws.String(req.TeamID),
			},
			"teamName": {
				S: aws.String(req.TeamName),
			},
		},
	})

	if err != nil {
		return err
	}

	// Now we will need to go through and update the res
	if result.Item == nil {
		return errors.New("key not found")
	}

	// Unmarshal the value from dynamodb attribute to go type
	// It will be stored in res address
	err = dynamodbattribute.UnmarshalMap(result.Item, &res)

	if err != nil {
		return err
	}

	return nil
}

func (s *Storage) UpdateUser(req *rpc.UpdateUserReq, res *rpc.UpdateUserRes) error {
	av, err := dynamodbattribute.MarshalMap(req)

	if err != nil {
		return err
	}

	// Now create put item
	input := &dynamodb.PutItemInput{
		Item:      av,
		TableName: aws.String(userTable),
	}

	// Now we push it into the database, then return
	_, err = s.client.PutItem(input)

	return err
}

func (s *Storage) UpdateTeam(req *rpc.UpdateTeamReq, res *rpc.UpdateTeamRes) error {
	av, err := dynamodbattribute.MarshalMap(req)

	if err != nil {
		return err
	}

	// Now create put item
	input := &dynamodb.PutItemInput{
		Item:      av,
		TableName: aws.String(teamTable),
	}

	// Now we push it into the database, then return
	_, err = s.client.PutItem(input)

	return err
}

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

// will not overwrite a user's token with an empty string but will just act like a normal put in all other cases
func (s *Storage) UpdateUser(req *rpc.UpdateUserReq, res *rpc.UpdateUserRes) error {

	// case for if a "" is passed in as a token, we dont want to risk accidentally overwriting a user's token
	if string(req.GetOathToken()) == "" {

		getReq := &rpc.GetUserReq{
			Email:    req.GetEmail(),
			Username: req.GetUsername(),
		}
		getRes := &rpc.GetUserRes{}
		err := s.GetUser(getReq, getRes)
		if err != nil {
			if err.Error() == "key not found" {
				req.OathToken = []byte("") // the item doesnt exist in the db yet and setting a blank token is fine
			} else {
				return err
			}
		} else {
			// hard set the token
			req.OathToken = getRes.GetOathToken()
		}

	}

	// only overwrite oauthtoken if it hasnt been set yet. will prevent the case where we overwrite an existing token
	//tokenDNE := expression.AttributeExists(expression.Name("oathToken"))
	//upd := expression.Set(expression.Name("teamID"), expression.Value(req.GetTeamID()))
	//expr, err := expression.NewBuilder().WithCondition(tokenDNE).WithUpdate(upd).Build()
	//if err != nil {
	//	return err
	//}
	//
	//// Now create put item
	//input := &dynamodb.UpdateItemInput{
	//	Key: av,
	//	ExpressionAttributeNames:  expr.Names(),
	//	ExpressionAttributeValues: expr.Values(),
	//	UpdateExpression:          expr.Update(),
	//	TableName: aws.String(userTable),
	//}
	//
	//// Now we update it into the database, then return
	//_, err = s.client.UpdateItem(input)

	//if token is a non empty string, its probably a real token and its safe to overwrite
	av, err := dynamodbattribute.MarshalMap(req)

	if err != nil {
		return err
	}

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

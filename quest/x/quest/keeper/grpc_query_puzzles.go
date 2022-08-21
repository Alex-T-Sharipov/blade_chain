package keeper

import (
  "context"
  
  "github.com/cosmos/cosmos-sdk/store/prefix"
  sdk "github.com/cosmos/cosmos-sdk/types"
  "github.com/cosmos/cosmos-sdk/types/query"  
  "google.golang.org/grpc/codes"
  "google.golang.org/grpc/status"

  "quest/x/quest/types"
)

func (k Keeper) Puzzles(c context.Context, req *types.QueryPuzzlesRequest) (*types.QueryPuzzlesResponse, error) {
  // Throw an error if request is nil
  if req == nil {
    return nil, status.Error(codes.InvalidArgument, "invalid request")
  }

  // Define a variable that will store a list of posts
  var puzzles []*types.Puzzle

  // Get context with the information about the environment
  ctx := sdk.UnwrapSDKContext(c)

  // Get the key-value module store using the store key (in our case store key is "chain")
  store := ctx.KVStore(k.storeKey)

  // Get the part of the store that keeps posts (using post key, which is "Post-value-")
  puzzleStore := prefix.NewStore(store, []byte(types.PuzzleKey))

  // Paginate the posts store based on PageRequest
  _, err := query.Paginate(puzzleStore, nil, func(key []byte, value []byte) error {
    var puzzle types.Puzzle
    if err := k.cdc.Unmarshal(value, &puzzle); err != nil {
      return err
    }

    puzzles = append(puzzles, &puzzle)

    return nil
  })

  // Throw an error if pagination failed
  if err != nil {
    return nil, status.Error(codes.Internal, err.Error())
  }

  // Return a struct containing a list of posts and pagination info
  return &types.QueryPuzzlesResponse{Puzzle: puzzles}, nil
}
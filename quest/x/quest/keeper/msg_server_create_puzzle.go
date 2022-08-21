package keeper

import (
	"context"
	"quest/x/quest/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) CreatePuzzle(goCtx context.Context, msg *types.MsgCreatePuzzle) (*types.MsgCreatePuzzleResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var puzzle = types.Puzzle{
		Creator:  msg.Creator,
		Name:     msg.Name,
		Image:    msg.Image,
		Owner:    msg.Owner,
		Combined: msg.Combined,
		Location: msg.Location,
	}

	id := k.AppendPuzzle(ctx, puzzle)

	return &types.MsgCreatePuzzleResponse{Id: id}, nil
}

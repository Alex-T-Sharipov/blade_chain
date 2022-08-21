package keeper_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	testkeeper "quest/testutil/keeper"
	"quest/x/quest/types"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.QuestKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}

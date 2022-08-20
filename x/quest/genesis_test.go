package quest_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	keepertest "quest/testutil/keeper"
	"quest/testutil/nullify"
	"quest/x/quest"
	"quest/x/quest/types"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.QuestKeeper(t)
	quest.InitGenesis(ctx, *k, genesisState)
	got := quest.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	// this line is used by starport scaffolding # genesis/test/assert
}

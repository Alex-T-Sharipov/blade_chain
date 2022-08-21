package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
	"quest/x/quest/types"
)

var _ = strconv.Itoa(0)

func CmdCreatePuzzle() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-puzzle [name] [image] [owner] [combined] [location]",
		Short: "Broadcast message createPuzzle",
		Args:  cobra.ExactArgs(5),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argName := args[0]
			argImage := args[1]
			argOwner := args[2]
			argCombined := args[3]
			argLocation := args[4]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreatePuzzle(
				clientCtx.GetFromAddress().String(),
				argName,
				argImage,
				argOwner,
				argCombined,
				argLocation,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

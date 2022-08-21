package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgCreatePuzzle = "create_puzzle"

var _ sdk.Msg = &MsgCreatePuzzle{}

func NewMsgCreatePuzzle(creator string, name string, image string, owner string, combined string, location string) *MsgCreatePuzzle {
	return &MsgCreatePuzzle{
		Creator:  creator,
		Name:     name,
		Image:    image,
		Owner:    owner,
		Combined: combined,
		Location: location,
	}
}

func (msg *MsgCreatePuzzle) Route() string {
	return RouterKey
}

func (msg *MsgCreatePuzzle) Type() string {
	return TypeMsgCreatePuzzle
}

func (msg *MsgCreatePuzzle) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreatePuzzle) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreatePuzzle) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

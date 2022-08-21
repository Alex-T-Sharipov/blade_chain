package types

const (
	PuzzleKey      = "Puzzle-value-"
	PuzzleCountKey = "Puzzle-count-"

	// ModuleName defines the module name
	ModuleName = "quest"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// RouterKey is the message route for slashing
	RouterKey = ModuleName

	// QuerierRoute defines the module's query routing key
	QuerierRoute = ModuleName

	// MemStoreKey defines the in-memory store key
	MemStoreKey = "mem_quest"
)

func KeyPrefix(p string) []byte {
	return []byte(p)
}

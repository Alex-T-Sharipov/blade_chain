/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "quest.quest";

export interface MsgCreatePuzzle {
  creator: string;
  name: string;
  image: string;
  owner: string;
  combined: string;
  location: string;
}

export interface MsgCreatePuzzleResponse {
  id: number;
}

const baseMsgCreatePuzzle: object = {
  creator: "",
  name: "",
  image: "",
  owner: "",
  combined: "",
  location: "",
};

export const MsgCreatePuzzle = {
  encode(message: MsgCreatePuzzle, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.image !== "") {
      writer.uint32(26).string(message.image);
    }
    if (message.owner !== "") {
      writer.uint32(34).string(message.owner);
    }
    if (message.combined !== "") {
      writer.uint32(42).string(message.combined);
    }
    if (message.location !== "") {
      writer.uint32(50).string(message.location);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreatePuzzle {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreatePuzzle } as MsgCreatePuzzle;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.image = reader.string();
          break;
        case 4:
          message.owner = reader.string();
          break;
        case 5:
          message.combined = reader.string();
          break;
        case 6:
          message.location = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreatePuzzle {
    const message = { ...baseMsgCreatePuzzle } as MsgCreatePuzzle;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.image !== undefined && object.image !== null) {
      message.image = String(object.image);
    } else {
      message.image = "";
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner);
    } else {
      message.owner = "";
    }
    if (object.combined !== undefined && object.combined !== null) {
      message.combined = String(object.combined);
    } else {
      message.combined = "";
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = String(object.location);
    } else {
      message.location = "";
    }
    return message;
  },

  toJSON(message: MsgCreatePuzzle): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    message.image !== undefined && (obj.image = message.image);
    message.owner !== undefined && (obj.owner = message.owner);
    message.combined !== undefined && (obj.combined = message.combined);
    message.location !== undefined && (obj.location = message.location);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreatePuzzle>): MsgCreatePuzzle {
    const message = { ...baseMsgCreatePuzzle } as MsgCreatePuzzle;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.image !== undefined && object.image !== null) {
      message.image = object.image;
    } else {
      message.image = "";
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    } else {
      message.owner = "";
    }
    if (object.combined !== undefined && object.combined !== null) {
      message.combined = object.combined;
    } else {
      message.combined = "";
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = object.location;
    } else {
      message.location = "";
    }
    return message;
  },
};

const baseMsgCreatePuzzleResponse: object = { id: 0 };

export const MsgCreatePuzzleResponse = {
  encode(
    message: MsgCreatePuzzleResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreatePuzzleResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreatePuzzleResponse,
    } as MsgCreatePuzzleResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreatePuzzleResponse {
    const message = {
      ...baseMsgCreatePuzzleResponse,
    } as MsgCreatePuzzleResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreatePuzzleResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreatePuzzleResponse>
  ): MsgCreatePuzzleResponse {
    const message = {
      ...baseMsgCreatePuzzleResponse,
    } as MsgCreatePuzzleResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CreatePuzzle(request: MsgCreatePuzzle): Promise<MsgCreatePuzzleResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreatePuzzle(request: MsgCreatePuzzle): Promise<MsgCreatePuzzleResponse> {
    const data = MsgCreatePuzzle.encode(request).finish();
    const promise = this.rpc.request("quest.quest.Msg", "CreatePuzzle", data);
    return promise.then((data) =>
      MsgCreatePuzzleResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}

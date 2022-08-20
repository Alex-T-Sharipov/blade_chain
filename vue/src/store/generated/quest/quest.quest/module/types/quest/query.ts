/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../quest/params";
import { Puzzle } from "../quest/puzzle";

export const protobufPackage = "quest.quest";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryPuzzlesRequest {}

export interface QueryPuzzlesResponse {
  /**
   * string name = 1;
   * string image = 2;
   * string owner = 3;
   * string combined = 4;
   * string location = 5;
   */
  Puzzle: Puzzle[];
}

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryPuzzlesRequest: object = {};

export const QueryPuzzlesRequest = {
  encode(_: QueryPuzzlesRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryPuzzlesRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryPuzzlesRequest } as QueryPuzzlesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryPuzzlesRequest {
    const message = { ...baseQueryPuzzlesRequest } as QueryPuzzlesRequest;
    return message;
  },

  toJSON(_: QueryPuzzlesRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryPuzzlesRequest>): QueryPuzzlesRequest {
    const message = { ...baseQueryPuzzlesRequest } as QueryPuzzlesRequest;
    return message;
  },
};

const baseQueryPuzzlesResponse: object = {};

export const QueryPuzzlesResponse = {
  encode(
    message: QueryPuzzlesResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.Puzzle) {
      Puzzle.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryPuzzlesResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryPuzzlesResponse } as QueryPuzzlesResponse;
    message.Puzzle = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Puzzle.push(Puzzle.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPuzzlesResponse {
    const message = { ...baseQueryPuzzlesResponse } as QueryPuzzlesResponse;
    message.Puzzle = [];
    if (object.Puzzle !== undefined && object.Puzzle !== null) {
      for (const e of object.Puzzle) {
        message.Puzzle.push(Puzzle.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QueryPuzzlesResponse): unknown {
    const obj: any = {};
    if (message.Puzzle) {
      obj.Puzzle = message.Puzzle.map((e) =>
        e ? Puzzle.toJSON(e) : undefined
      );
    } else {
      obj.Puzzle = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<QueryPuzzlesResponse>): QueryPuzzlesResponse {
    const message = { ...baseQueryPuzzlesResponse } as QueryPuzzlesResponse;
    message.Puzzle = [];
    if (object.Puzzle !== undefined && object.Puzzle !== null) {
      for (const e of object.Puzzle) {
        message.Puzzle.push(Puzzle.fromPartial(e));
      }
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of Puzzles items. */
  Puzzles(request: QueryPuzzlesRequest): Promise<QueryPuzzlesResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("quest.quest.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  Puzzles(request: QueryPuzzlesRequest): Promise<QueryPuzzlesResponse> {
    const data = QueryPuzzlesRequest.encode(request).finish();
    const promise = this.rpc.request("quest.quest.Query", "Puzzles", data);
    return promise.then((data) =>
      QueryPuzzlesResponse.decode(new Reader(data))
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

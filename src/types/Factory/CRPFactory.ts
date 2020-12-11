// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class LogNewCrp extends ethereum.Event {
  get params(): LogNewCrp__Params {
    return new LogNewCrp__Params(this);
  }
}

export class LogNewCrp__Params {
  _event: LogNewCrp;

  constructor(event: LogNewCrp) {
    this._event = event;
  }

  get caller(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get pool(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class CRPFactory__newCrpInputRightsStruct extends ethereum.Tuple {
  get canPauseSwapping(): boolean {
    return this[0].toBoolean();
  }

  get canChangeSwapFee(): boolean {
    return this[1].toBoolean();
  }

  get canChangeWeights(): boolean {
    return this[2].toBoolean();
  }

  get canAddRemoveTokens(): boolean {
    return this[3].toBoolean();
  }

  get canWhitelistLPs(): boolean {
    return this[4].toBoolean();
  }

  get canChangeCap(): boolean {
    return this[5].toBoolean();
  }
}

export class CRPFactory extends ethereum.SmartContract {
  static bind(address: Address): CRPFactory {
    return new CRPFactory("CRPFactory", address);
  }

  isCrp(addr: Address): boolean {
    let result = super.call("isCrp", "isCrp(address):(bool)", [
      ethereum.Value.fromAddress(addr)
    ]);

    return result[0].toBoolean();
  }

  try_isCrp(addr: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("isCrp", "isCrp(address):(bool)", [
      ethereum.Value.fromAddress(addr)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  newCrp(
    factoryAddress: Address,
    symbol: string,
    tokens: Array<Address>,
    startBalances: Array<BigInt>,
    startWeights: Array<BigInt>,
    swapFee: BigInt,
    rights: CRPFactory__newCrpInputRightsStruct
  ): Address {
    let result = super.call(
      "newCrp",
      "newCrp(address,string,address[],uint256[],uint256[],uint256,(bool,bool,bool,bool,bool,bool)):(address)",
      [
        ethereum.Value.fromAddress(factoryAddress),
        ethereum.Value.fromString(symbol),
        ethereum.Value.fromAddressArray(tokens),
        ethereum.Value.fromUnsignedBigIntArray(startBalances),
        ethereum.Value.fromUnsignedBigIntArray(startWeights),
        ethereum.Value.fromUnsignedBigInt(swapFee),
        ethereum.Value.fromTuple(rights)
      ]
    );

    return result[0].toAddress();
  }

  try_newCrp(
    factoryAddress: Address,
    symbol: string,
    tokens: Array<Address>,
    startBalances: Array<BigInt>,
    startWeights: Array<BigInt>,
    swapFee: BigInt,
    rights: CRPFactory__newCrpInputRightsStruct
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "newCrp",
      "newCrp(address,string,address[],uint256[],uint256[],uint256,(bool,bool,bool,bool,bool,bool)):(address)",
      [
        ethereum.Value.fromAddress(factoryAddress),
        ethereum.Value.fromString(symbol),
        ethereum.Value.fromAddressArray(tokens),
        ethereum.Value.fromUnsignedBigIntArray(startBalances),
        ethereum.Value.fromUnsignedBigIntArray(startWeights),
        ethereum.Value.fromUnsignedBigInt(swapFee),
        ethereum.Value.fromTuple(rights)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class NewCrpCall extends ethereum.Call {
  get inputs(): NewCrpCall__Inputs {
    return new NewCrpCall__Inputs(this);
  }

  get outputs(): NewCrpCall__Outputs {
    return new NewCrpCall__Outputs(this);
  }
}

export class NewCrpCall__Inputs {
  _call: NewCrpCall;

  constructor(call: NewCrpCall) {
    this._call = call;
  }

  get factoryAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get symbol(): string {
    return this._call.inputValues[1].value.toString();
  }

  get tokens(): Array<Address> {
    return this._call.inputValues[2].value.toAddressArray();
  }

  get startBalances(): Array<BigInt> {
    return this._call.inputValues[3].value.toBigIntArray();
  }

  get startWeights(): Array<BigInt> {
    return this._call.inputValues[4].value.toBigIntArray();
  }

  get swapFee(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }

  get rights(): NewCrpCallRightsStruct {
    return this._call.inputValues[6].value.toTuple() as NewCrpCallRightsStruct;
  }
}

export class NewCrpCall__Outputs {
  _call: NewCrpCall;

  constructor(call: NewCrpCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class NewCrpCallRightsStruct extends ethereum.Tuple {
  get canPauseSwapping(): boolean {
    return this[0].toBoolean();
  }

  get canChangeSwapFee(): boolean {
    return this[1].toBoolean();
  }

  get canChangeWeights(): boolean {
    return this[2].toBoolean();
  }

  get canAddRemoveTokens(): boolean {
    return this[3].toBoolean();
  }

  get canWhitelistLPs(): boolean {
    return this[4].toBoolean();
  }

  get canChangeCap(): boolean {
    return this[5].toBoolean();
  }
}

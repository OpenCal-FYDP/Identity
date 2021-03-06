// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// Source: service.proto

import {
  BinaryReader,
  BinaryWriter,
  JSONrequest,
  PBrequest,
} from "twirpscript";
// This is the minimum version supported by the current runtime.
// If this line fails typechecking, breaking changes have been introduced and this
// file needs to be regenerated by running `yarn twirpscript`.
export { MIN_SUPPORTED_VERSION_0_0_44 } from "twirpscript";

//========================================//
//    IdentityService Protobuf Client     //
//========================================//

/**
 * accepts any combination of user identifiers and returns all know aliases (email, userID, username)
 */
export async function GetUser(getUserReq, config) {
  const response = await PBrequest(
    "/IdentityService/GetUser",
    GetUserReq.encode(getUserReq),
    config
  );
  return GetUserRes.decode(response);
}

export async function UpdateUser(updateUserReq, config) {
  const response = await PBrequest(
    "/IdentityService/UpdateUser",
    UpdateUserReq.encode(updateUserReq),
    config
  );
  return UpdateUserRes.decode(response);
}

export async function GetTeam(getTeamReq, config) {
  const response = await PBrequest(
    "/IdentityService/GetTeam",
    GetTeamReq.encode(getTeamReq),
    config
  );
  return GetTeamRes.decode(response);
}

export async function UpdateTeam(updateTeamReq, config) {
  const response = await PBrequest(
    "/IdentityService/UpdateTeam",
    UpdateTeamReq.encode(updateTeamReq),
    config
  );
  return UpdateTeamRes.decode(response);
}

//========================================//
//      IdentityService JSON Client       //
//========================================//

/**
 * accepts any combination of user identifiers and returns all know aliases (email, userID, username)
 */
export async function GetUserJSON(getUserReq, config) {
  const response = await JSONrequest(
    "/IdentityService/GetUser",
    getUserReq,
    config
  );
  return response;
}

export async function UpdateUserJSON(updateUserReq, config) {
  const response = await JSONrequest(
    "/IdentityService/UpdateUser",
    updateUserReq,
    config
  );
  return response;
}

export async function GetTeamJSON(getTeamReq, config) {
  const response = await JSONrequest(
    "/IdentityService/GetTeam",
    getTeamReq,
    config
  );
  return response;
}

export async function UpdateTeamJSON(updateTeamReq, config) {
  const response = await JSONrequest(
    "/IdentityService/UpdateTeam",
    updateTeamReq,
    config
  );
  return response;
}

export function createIdentityServiceHandler(service) {
  return {
    name: "IdentityService",
    methods: {
      GetUser: {
        name: "GetUser",
        handler: service.GetUser,
        input: GetUserReq,
        output: GetUserRes,
      },
      UpdateUser: {
        name: "UpdateUser",
        handler: service.UpdateUser,
        input: UpdateUserReq,
        output: UpdateUserRes,
      },
      GetTeam: {
        name: "GetTeam",
        handler: service.GetTeam,
        input: GetTeamReq,
        output: GetTeamRes,
      },
      UpdateTeam: {
        name: "UpdateTeam",
        handler: service.UpdateTeam,
        input: UpdateTeamReq,
        output: UpdateTeamRes,
      },
    },
  };
}

//========================================//
//        Protobuf Encode / Decode        //
//========================================//

export const GetUserReq = {
  /**
   * Serializes a GetUserReq to protobuf.
   */
  encode: function (getUserReq) {
    return GetUserReq._writeMessage(
      getUserReq,
      new BinaryWriter()
    ).getResultBuffer();
  },

  /**
   * Deserializes a GetUserReq from protobuf.
   */
  decode: function (bytes) {
    return GetUserReq._readMessage(
      GetUserReq.initialize(),
      new BinaryReader(bytes)
    );
  },

  /**
   * Serializes a GetUserReq to JSON.
   */
  encodeJSON: function (getUserReq) {
    return JSON.stringify(GetUserReq._writeMessageJSON(getUserReq));
  },

  /**
   * Deserializes a GetUserReq from JSON.
   */
  decodeJSON: function (json) {
    return GetUserReq._readMessageJSON(
      GetUserReq.initialize(),
      JSON.parse(json)
    );
  },

  /**
   * Initializes a GetUserReq with all fields set to their default value.
   */
  initialize: function () {
    return {
      email: "",
      username: "",
    };
  },

  /**
   * @private
   */
  _writeMessage: function (msg, writer) {
    if (msg.email) {
      writer.writeString(1, msg.email);
    }
    if (msg.username) {
      writer.writeString(2, msg.username);
    }
    return writer;
  },

  /**
   * @private
   */
  _writeMessageJSON: function (msg) {
    const json = {};
    if (msg.email) {
      json.email = msg.email;
    }
    if (msg.username) {
      json.username = msg.username;
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (msg, reader) {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          msg.email = reader.readString();
          break;
        }
        case 2: {
          msg.username = reader.readString();
          break;
        }
        default: {
          reader.skipField();
          break;
        }
      }
    }
    return msg;
  },

  /**
   * @private
   */
  _readMessageJSON: function (msg, json) {
    const email = json.email ?? json.email;
    if (email) {
      msg.email = email;
    }
    const username = json.username ?? json.username;
    if (username) {
      msg.username = username;
    }
    return msg;
  },
};

export const GetUserRes = {
  /**
   * Serializes a GetUserRes to protobuf.
   */
  encode: function (getUserRes) {
    return GetUserRes._writeMessage(
      getUserRes,
      new BinaryWriter()
    ).getResultBuffer();
  },

  /**
   * Deserializes a GetUserRes from protobuf.
   */
  decode: function (bytes) {
    return GetUserRes._readMessage(
      GetUserRes.initialize(),
      new BinaryReader(bytes)
    );
  },

  /**
   * Serializes a GetUserRes to JSON.
   */
  encodeJSON: function (getUserRes) {
    return JSON.stringify(GetUserRes._writeMessageJSON(getUserRes));
  },

  /**
   * Deserializes a GetUserRes from JSON.
   */
  decodeJSON: function (json) {
    return GetUserRes._readMessageJSON(
      GetUserRes.initialize(),
      JSON.parse(json)
    );
  },

  /**
   * Initializes a GetUserRes with all fields set to their default value.
   */
  initialize: function () {
    return {
      email: "",
      username: "",
      teamID: "",
      oathToken: new Uint8Array(),
    };
  },

  /**
   * @private
   */
  _writeMessage: function (msg, writer) {
    if (msg.email) {
      writer.writeString(1, msg.email);
    }
    if (msg.username) {
      writer.writeString(2, msg.username);
    }
    if (msg.teamID) {
      writer.writeString(3, msg.teamID);
    }
    if (msg.oathToken) {
      writer.writeBytes(4, msg.oathToken);
    }
    return writer;
  },

  /**
   * @private
   */
  _writeMessageJSON: function (msg) {
    const json = {};
    if (msg.email) {
      json.email = msg.email;
    }
    if (msg.username) {
      json.username = msg.username;
    }
    if (msg.teamID) {
      json.teamID = msg.teamID;
    }
    if (msg.oathToken) {
      json.oathToken = msg.oathToken;
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (msg, reader) {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          msg.email = reader.readString();
          break;
        }
        case 2: {
          msg.username = reader.readString();
          break;
        }
        case 3: {
          msg.teamID = reader.readString();
          break;
        }
        case 4: {
          msg.oathToken = reader.readBytes();
          break;
        }
        default: {
          reader.skipField();
          break;
        }
      }
    }
    return msg;
  },

  /**
   * @private
   */
  _readMessageJSON: function (msg, json) {
    const email = json.email ?? json.email;
    if (email) {
      msg.email = email;
    }
    const username = json.username ?? json.username;
    if (username) {
      msg.username = username;
    }
    const teamID = json.teamID ?? json.teamID;
    if (teamID) {
      msg.teamID = teamID;
    }
    const oathToken = json.oathToken ?? json.oathToken;
    if (oathToken) {
      msg.oathToken = oathToken;
    }
    return msg;
  },
};

export const UpdateUserReq = {
  /**
   * Serializes a UpdateUserReq to protobuf.
   */
  encode: function (updateUserReq) {
    return UpdateUserReq._writeMessage(
      updateUserReq,
      new BinaryWriter()
    ).getResultBuffer();
  },

  /**
   * Deserializes a UpdateUserReq from protobuf.
   */
  decode: function (bytes) {
    return UpdateUserReq._readMessage(
      UpdateUserReq.initialize(),
      new BinaryReader(bytes)
    );
  },

  /**
   * Serializes a UpdateUserReq to JSON.
   */
  encodeJSON: function (updateUserReq) {
    return JSON.stringify(UpdateUserReq._writeMessageJSON(updateUserReq));
  },

  /**
   * Deserializes a UpdateUserReq from JSON.
   */
  decodeJSON: function (json) {
    return UpdateUserReq._readMessageJSON(
      UpdateUserReq.initialize(),
      JSON.parse(json)
    );
  },

  /**
   * Initializes a UpdateUserReq with all fields set to their default value.
   */
  initialize: function () {
    return {
      email: "",
      username: "",
      teamID: "",
      oathToken: new Uint8Array(),
    };
  },

  /**
   * @private
   */
  _writeMessage: function (msg, writer) {
    if (msg.email) {
      writer.writeString(1, msg.email);
    }
    if (msg.username) {
      writer.writeString(2, msg.username);
    }
    if (msg.teamID) {
      writer.writeString(3, msg.teamID);
    }
    if (msg.oathToken) {
      writer.writeBytes(4, msg.oathToken);
    }
    return writer;
  },

  /**
   * @private
   */
  _writeMessageJSON: function (msg) {
    const json = {};
    if (msg.email) {
      json.email = msg.email;
    }
    if (msg.username) {
      json.username = msg.username;
    }
    if (msg.teamID) {
      json.teamID = msg.teamID;
    }
    if (msg.oathToken) {
      json.oathToken = msg.oathToken;
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (msg, reader) {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          msg.email = reader.readString();
          break;
        }
        case 2: {
          msg.username = reader.readString();
          break;
        }
        case 3: {
          msg.teamID = reader.readString();
          break;
        }
        case 4: {
          msg.oathToken = reader.readBytes();
          break;
        }
        default: {
          reader.skipField();
          break;
        }
      }
    }
    return msg;
  },

  /**
   * @private
   */
  _readMessageJSON: function (msg, json) {
    const email = json.email ?? json.email;
    if (email) {
      msg.email = email;
    }
    const username = json.username ?? json.username;
    if (username) {
      msg.username = username;
    }
    const teamID = json.teamID ?? json.teamID;
    if (teamID) {
      msg.teamID = teamID;
    }
    const oathToken = json.oathToken ?? json.oathToken;
    if (oathToken) {
      msg.oathToken = oathToken;
    }
    return msg;
  },
};

export const UpdateUserRes = {
  /**
   * Serializes a UpdateUserRes to protobuf.
   */

  encode: function (_updateUserRes) {
    return new Uint8Array();
  },

  /**
   * Deserializes a UpdateUserRes from protobuf.
   */

  decode: function (_bytes) {
    return {};
  },

  /**
   * Serializes a UpdateUserRes to JSON.
   */

  encodeJSON: function (_updateUserRes) {
    return "{}";
  },

  /**
   * Deserializes a UpdateUserRes from JSON.
   */

  decodeJSON: function (_json) {
    return {};
  },

  /**
   * Initializes a UpdateUserRes with all fields set to their default value.
   */
  initialize: function () {
    return {};
  },
};

export const GetTeamReq = {
  /**
   * Serializes a GetTeamReq to protobuf.
   */
  encode: function (getTeamReq) {
    return GetTeamReq._writeMessage(
      getTeamReq,
      new BinaryWriter()
    ).getResultBuffer();
  },

  /**
   * Deserializes a GetTeamReq from protobuf.
   */
  decode: function (bytes) {
    return GetTeamReq._readMessage(
      GetTeamReq.initialize(),
      new BinaryReader(bytes)
    );
  },

  /**
   * Serializes a GetTeamReq to JSON.
   */
  encodeJSON: function (getTeamReq) {
    return JSON.stringify(GetTeamReq._writeMessageJSON(getTeamReq));
  },

  /**
   * Deserializes a GetTeamReq from JSON.
   */
  decodeJSON: function (json) {
    return GetTeamReq._readMessageJSON(
      GetTeamReq.initialize(),
      JSON.parse(json)
    );
  },

  /**
   * Initializes a GetTeamReq with all fields set to their default value.
   */
  initialize: function () {
    return {
      teamID: "",
    };
  },

  /**
   * @private
   */
  _writeMessage: function (msg, writer) {
    if (msg.teamID) {
      writer.writeString(1, msg.teamID);
    }
    return writer;
  },

  /**
   * @private
   */
  _writeMessageJSON: function (msg) {
    const json = {};
    if (msg.teamID) {
      json.teamID = msg.teamID;
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (msg, reader) {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          msg.teamID = reader.readString();
          break;
        }
        default: {
          reader.skipField();
          break;
        }
      }
    }
    return msg;
  },

  /**
   * @private
   */
  _readMessageJSON: function (msg, json) {
    const teamID = json.teamID ?? json.teamID;
    if (teamID) {
      msg.teamID = teamID;
    }
    return msg;
  },
};

export const GetTeamRes = {
  /**
   * Serializes a GetTeamRes to protobuf.
   */
  encode: function (getTeamRes) {
    return GetTeamRes._writeMessage(
      getTeamRes,
      new BinaryWriter()
    ).getResultBuffer();
  },

  /**
   * Deserializes a GetTeamRes from protobuf.
   */
  decode: function (bytes) {
    return GetTeamRes._readMessage(
      GetTeamRes.initialize(),
      new BinaryReader(bytes)
    );
  },

  /**
   * Serializes a GetTeamRes to JSON.
   */
  encodeJSON: function (getTeamRes) {
    return JSON.stringify(GetTeamRes._writeMessageJSON(getTeamRes));
  },

  /**
   * Deserializes a GetTeamRes from JSON.
   */
  decodeJSON: function (json) {
    return GetTeamRes._readMessageJSON(
      GetTeamRes.initialize(),
      JSON.parse(json)
    );
  },

  /**
   * Initializes a GetTeamRes with all fields set to their default value.
   */
  initialize: function () {
    return {
      teamID: "",
      teamName: "",
      teamMembers: [],
    };
  },

  /**
   * @private
   */
  _writeMessage: function (msg, writer) {
    if (msg.teamID) {
      writer.writeString(1, msg.teamID);
    }
    if (msg.teamName) {
      writer.writeString(2, msg.teamName);
    }
    if (msg.teamMembers?.length) {
      writer.writeRepeatedString(3, msg.teamMembers);
    }
    return writer;
  },

  /**
   * @private
   */
  _writeMessageJSON: function (msg) {
    const json = {};
    if (msg.teamID) {
      json.teamID = msg.teamID;
    }
    if (msg.teamName) {
      json.teamName = msg.teamName;
    }
    if (msg.teamMembers?.length) {
      json.teamMembers = msg.teamMembers;
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (msg, reader) {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          msg.teamID = reader.readString();
          break;
        }
        case 2: {
          msg.teamName = reader.readString();
          break;
        }
        case 3: {
          msg.teamMembers.push(reader.readString());
          break;
        }
        default: {
          reader.skipField();
          break;
        }
      }
    }
    return msg;
  },

  /**
   * @private
   */
  _readMessageJSON: function (msg, json) {
    const teamID = json.teamID ?? json.teamID;
    if (teamID) {
      msg.teamID = teamID;
    }
    const teamName = json.teamName ?? json.teamName;
    if (teamName) {
      msg.teamName = teamName;
    }
    const teamMembers = json.teamMembers ?? json.teamMembers;
    if (teamMembers) {
      msg.teamMembers = teamMembers;
    }
    return msg;
  },
};

export const UpdateTeamReq = {
  /**
   * Serializes a UpdateTeamReq to protobuf.
   */
  encode: function (updateTeamReq) {
    return UpdateTeamReq._writeMessage(
      updateTeamReq,
      new BinaryWriter()
    ).getResultBuffer();
  },

  /**
   * Deserializes a UpdateTeamReq from protobuf.
   */
  decode: function (bytes) {
    return UpdateTeamReq._readMessage(
      UpdateTeamReq.initialize(),
      new BinaryReader(bytes)
    );
  },

  /**
   * Serializes a UpdateTeamReq to JSON.
   */
  encodeJSON: function (updateTeamReq) {
    return JSON.stringify(UpdateTeamReq._writeMessageJSON(updateTeamReq));
  },

  /**
   * Deserializes a UpdateTeamReq from JSON.
   */
  decodeJSON: function (json) {
    return UpdateTeamReq._readMessageJSON(
      UpdateTeamReq.initialize(),
      JSON.parse(json)
    );
  },

  /**
   * Initializes a UpdateTeamReq with all fields set to their default value.
   */
  initialize: function () {
    return {
      teamID: "",
      teamName: "",
      teamMembers: [],
    };
  },

  /**
   * @private
   */
  _writeMessage: function (msg, writer) {
    if (msg.teamID) {
      writer.writeString(1, msg.teamID);
    }
    if (msg.teamName) {
      writer.writeString(2, msg.teamName);
    }
    if (msg.teamMembers?.length) {
      writer.writeRepeatedString(3, msg.teamMembers);
    }
    return writer;
  },

  /**
   * @private
   */
  _writeMessageJSON: function (msg) {
    const json = {};
    if (msg.teamID) {
      json.teamID = msg.teamID;
    }
    if (msg.teamName) {
      json.teamName = msg.teamName;
    }
    if (msg.teamMembers?.length) {
      json.teamMembers = msg.teamMembers;
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (msg, reader) {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          msg.teamID = reader.readString();
          break;
        }
        case 2: {
          msg.teamName = reader.readString();
          break;
        }
        case 3: {
          msg.teamMembers.push(reader.readString());
          break;
        }
        default: {
          reader.skipField();
          break;
        }
      }
    }
    return msg;
  },

  /**
   * @private
   */
  _readMessageJSON: function (msg, json) {
    const teamID = json.teamID ?? json.teamID;
    if (teamID) {
      msg.teamID = teamID;
    }
    const teamName = json.teamName ?? json.teamName;
    if (teamName) {
      msg.teamName = teamName;
    }
    const teamMembers = json.teamMembers ?? json.teamMembers;
    if (teamMembers) {
      msg.teamMembers = teamMembers;
    }
    return msg;
  },
};

export const UpdateTeamRes = {
  /**
   * Serializes a UpdateTeamRes to protobuf.
   */

  encode: function (_updateTeamRes) {
    return new Uint8Array();
  },

  /**
   * Deserializes a UpdateTeamRes from protobuf.
   */

  decode: function (_bytes) {
    return {};
  },

  /**
   * Serializes a UpdateTeamRes to JSON.
   */

  encodeJSON: function (_updateTeamRes) {
    return "{}";
  },

  /**
   * Deserializes a UpdateTeamRes from JSON.
   */

  decodeJSON: function (_json) {
    return {};
  },

  /**
   * Initializes a UpdateTeamRes with all fields set to their default value.
   */
  initialize: function () {
    return {};
  },
};

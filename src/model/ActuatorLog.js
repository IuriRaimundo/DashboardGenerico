class ActuatorLog {
  constructor(actuatorLogId, actuatorId, actuatorName, value, timestamp) {
    this._actuatorLogId = actuatorLogId;
    this._actuatorId = actuatorId;
    this._actuatorName = actuatorName;
    this._timestamp = timestamp;
  }

  get actuatorLogId() {
    return this._actuatorLogId;
  }

  get actuatorId() {
    return this._actuatorId;
  }

  get actuatorName() {
    return this._actuatorName;
  }

  get timestamp() {
    return this._timestamp;
  }

  get formattedTimestamp() {
    return new Date(this._timestamp * 1000).toLocaleString("pt-PT");
  }
}

export default ActuatorLog;

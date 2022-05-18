class EntranceRecord {
  /**
   * @param rfid Rfid da pessoa
   * @param personName Nome da pessoa
   * @param timestamp Timestamp do registo de entrada
   * @param access Resultado da tentativa de entrada,
   */
  constructor(rfid, personName, timestamp, access) {
    this._rfid = rfid;
    this._personName = personName;
    this._timestamp = timestamp;
    this._access = access;
  }

  get personName() {
    return this._personName;
  }

  get timestamp() {
    return this._timestamp;
  }

  get access() {
    return this._access;
  }
}

export default EntranceRecord;

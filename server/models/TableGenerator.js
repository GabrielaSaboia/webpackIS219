class TableGenerator {
  static generateTableHead(table, data) {
    const thead = table.createTHead();
    const row = thead.insertRow();
    const keys = Object.keys(data);
    keys.forEach((key) => {
      const th = document.createElement('th');
      const text = document.createTextNode(key);
      th.appendChild(text);
      row.appendChild(th);
    });
  }

  static generateTable(table, data) {
    const records = Object.entries(data);
    records.forEach((record) => {
      const row = table.insertRow();
      console.log(record);
      const key = Object.keys(record);
      key.forEach((k) => {
        const cell = row.insertCell();
        const text = document.createTextNode(record[k]);
        cell.appendChild(text);
      });
    });
  }
}
module.exports = TableGenerator;

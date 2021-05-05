class TableGenerator {
  static generateTableHead(table, data) {
    const thead = table.createTHead();
    const row = thead.insertRow();
    const values = Object.values(data);
    console.log(values);
    values.forEach((value) => {
      const th = document.createElement('th');
      const text = document.createTextNode(value);
      th.appendChild(text);
      row.appendChild(th);
    });
  }

  static generateTable(table, data) {
    data.forEach((record) => {
      const row = table.insertRow();
      console.log(record);
      const values = Object.values(record);
      values.forEach((value) => {
        const cell = row.insertCell();
        const text = document.createTextNode(value);
        cell.appendChild(text);
      });
    });
  }
}
module.exports = TableGenerator;

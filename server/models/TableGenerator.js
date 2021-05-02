class TableGenerator {
  static generateTableHead(table, data) {
    const thead = table.createTHead();
    const row = thead.insertRow();
    for (let key of data) {
      const th = document.createElement('th');
      const text = document.createTextNode(key);
      th.appendChild(text);
      row.appendChild(th);
    }
  }

  static generateTable(table, data) {
    for (let element of data) {
      const row = table.insertRow();
      console.log(element);
      let key;
      for (key in element) {
        const cell = row.insertCell();
        const text = document.createTextNode(element[key]);
        cell.appendChild(text);
      }
    }
  }
}

module.exports = TableGenerator;

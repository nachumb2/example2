let arr = [
  { 
    1: 'company',
    2: 'contact',
    3: 'country'
  },
  { 
    company: 'company1',
    contact: 'contact1',
    country: 'country1'
  },
  { 
    company: 'company2',
    contact: 'contact2',
    country: 'country2'
  },
  { 
    company: 'company3',
    contact: 'contact3',
    country: 'country3'
  }
]

function getColumnName(val) {
  return typeof val === "number" ? arr[0][val] : val
}

function getTableCellTextByXpath(searchColumn,searchText,returnColumn) {
  // column name & number validation  
  if (!searchColumn || !returnColumn) {
    console.log('Wrong column name or number')
    return false
  }
  // search criteria validation
  if(!arr.filter(a => a.[searchColumn] === searchText)[0]) {
    console.log('wrong search criteria')
    return false
  }
  let tempval = arr.filter(a => a.[searchColumn] === searchText)[0].[returnColumn]
    return(tempval)
  }

function verifyTableCellText(searchColumn,searchText,returnColumnText,expectedText) {
  const searchColumnName = getColumnName(searchColumn)
  const returnColumnName = getColumnName(returnColumnText)
  let tempval = getTableCellTextByXpath(searchColumnName,searchText,returnColumnName)
  return tempval === expectedText ? true : false
}

console.log(getTableCellTextByXpath('company','company3','contact'))
console.log(verifyTableCellText('company','company1',3,'country2'))
console.log(verifyTableCellText(2,'contact2',3,'country2'))

describe('jifiti', function() {

  async function getTableCellTextByXpath(tableElement, searchColumn, searchText, returnColumn) {
    await browser.navigateTo('https://www.w3schools.com/html/html_tables.asp');

    let element = `${tableElement}//tr[td[${searchColumn}]/text() = "${searchText}"]/td[${returnColumn}]`
    let result = await browser.getText('xpath', element, function(result) {console.log(`Returned value = `, result.value)})
    return result
  };

  async function verifyTableCellText(tableElement,searchColumn,searchText,returnColumn,expectedText) {
    let returenedElement = await getTableCellTextByXpath(tableElement,searchColumn,searchText,returnColumn)
    let result = expectedText === returenedElement ? true : false
    console.log('Verification result = ', result)
  }

  it('look for table elements', async function() {
    let talbeElement = '//table[@id="customers"]/tbody';
    await getTableCellTextByXpath(talbeElement,2,'Helen Bennett',3)
    await verifyTableCellText(talbeElement,2,'Helen Bennett',3,'UK')
    await verifyTableCellText(talbeElement,2,'Helen Bennett',3,'Canada')
  })
});

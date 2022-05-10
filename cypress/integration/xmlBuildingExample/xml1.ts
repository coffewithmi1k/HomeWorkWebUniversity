

describe('xml test', () => {
    const serializer = new XMLSerializer();
    const readXml = 'cypress/fixtures/xmlEx.xml';
    const writeXml = 'cypress/fixtures/xmlEx2.xml'
    const parser = new DOMParser();

    it('tests xml', () => {
        cy.readFile(readXml)
        .then((data) => {
            const xmlData = parser.parseFromString(data,'text/xml');
            // here you can do changes to xmlData file and upload back;
            // xmlDoc.getElementsByTagName('FullName')[0].appendChild(tenantChildNode);
            // xmlDoc.getElementsByTagName('ownershipType')[0].childNodes[0].nodeValue = '';
            console.log(xmlData);
            cy.writeFile(writeXml, serializer.serializeToString(xmlData));
        });
    });
});
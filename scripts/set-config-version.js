const fs = require('fs');
const xml2js = require('xml2js');

const [newVersion] = process.argv.slice(2);
if (!newVersion) {
  throw new Error('newVersion is undefined');
}

const configFile = 'config.xml';

// Read config.xml
fs.readFile(configFile, 'utf8', (err, xml) => {
  if (err) {
    return console.error(err);
  }

  // Parse XML to JS Obj
  xml2js.parseString(xml, (err, obj) => {
    if (err) {
      return console.error(err);
    }

    obj.widget['$'].version = newVersion;
    const builder = new xml2js.Builder();
    const xml = builder.buildObject(obj);

    fs.writeFile(configFile, xml, (err) => {
      if (err) {
        return console.error(err);
      }

      console.log(`Build number successfully incremented to ${newVersion}`);
    });
  });
});

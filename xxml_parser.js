const xmlString = `---4mfejrgeijrgnenijenfjenkrnfejrfneifnrenContent-ID: 0023232324343
Content-Type: text-html
Content-Transfer-Encoding: binary

<program xmlns="rjeeknreknkenrf" xmlns:xsl="werffe">
<program_id>43434343434</program_id>
</program>
`;

// Split the string into an array of lines
const lines = xmlString.split('\n');

// Iterate over each line
for (const line of lines) {
  console.log(line);
}

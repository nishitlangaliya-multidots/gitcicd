cy.task('wordpress', ['ls', '/']).then(output => {
    console.log(output.stdout)
    console.log(output.stderr)
  })
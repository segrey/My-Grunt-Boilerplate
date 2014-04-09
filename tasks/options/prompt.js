module.exports = {
  mochacli: {
    options: {
      questions: [
        {
          config: 'mochacli.options.reporter',
          type: 'list',
          message: 'Which Mocha reporter would you like to use?',
          default: 'spec',
          choices: ['dot', 'spec', 'nyan', 'TAP', 'landing', 'list',
            'progress', 'json', 'JSONconv', 'HTMLconv', 'min', 'doc']
        }
      ]
    }
  }
};

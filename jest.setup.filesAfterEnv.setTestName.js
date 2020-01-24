jasmine.getEnv().addReporter({
  specStarted: res => jasmine.currentTest = res,
  specDone: res => jasmine.currentTest = res,
});

global.getTestName = () => jasmine.currentTest.fullName;

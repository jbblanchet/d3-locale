for (var cptModules = 0; cptModules < testModules.length; cptModules++) {
  var m = testModules[cptModules];
  module(m.culture);

  if (m.numberTests) {
    for (var cptTests = 0; cptTests < m.numberTests.length; cptTests++) {
      var t = m.numberTests[cptTests];
      (function (m, t) { // Necessary to keep m and t in context
        test(t.name, function(assert) {
          expect(1);
          assert.deepEqual(d3.locale[m.culture].numberFormat(t.format)(t.value), t.expected);
        });
      })(m, t);
    }
  }

  if (m.dateTimeTests) {
    for (var cptTests = 0; cptTests < m.dateTimeTests.length; cptTests++) {
      var t = m.dateTimeTests[cptTests];
      (function (m, t) { // Necessary to keep m and t in context
        test(t.name, function(assert) {
          expect(1);
          assert.deepEqual(d3.locale[m.culture].timeFormat(t.format)(t.value), t.expected);
        });
      })(m, t);
    }
  }
}
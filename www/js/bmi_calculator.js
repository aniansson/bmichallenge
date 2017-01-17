describe("BMICalculator", function() {
  var calculator;
  var person;

  describe('metric unit calculator', function() {
    beforeEach(function() {
      person = new Person({weight: 90, height: 186});
      calculator = new BMICalculator();
    });

    it("calculates BMI for a person using the metric method", function() {
      calculator.metric_bmi(person);
      expect(person.bmiValue).toEqual(26.01);
    });

    it('should give BMI message', function() {
      calculator.metric_bmi(person);
      expect(person.bmiMessage).toEqual('Overweight');
    });
  });

  describe('imperial unit calculator', function() {
    beforeEach(function() {
      person = new Person({weight: 198, height: 73});
      calculator = new BMICalculator();
    });

    it('calculates BMI for a person using the imperial method', function() {
      calculator.imperial_bmi(person);
      expect(person.bmiValue).toEqual(26.12);
    });

    it('should give BMI message', function() {
      calculator.imperial_bmi(person);
      expect(person.bmiMessage).toEqual('Overweight');
    });
  });
});

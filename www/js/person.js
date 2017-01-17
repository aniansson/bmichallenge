describe("Person", function() {
  var person;

  describe('metric units', function() {
    beforeEach(function() {
      person = new Person({weight: 90, height: 186});
    });

    it("should have weight of 90", function() {
      expect(person.weight).toEqual(90);
    });

    it("should have height of 186", function() {
      expect(person.height).toEqual(186);
    });

    it("should calculate BMI value in metric", function() {
      person.calculate_bmi_metric();
      expect(person.bmiValue).toEqual(26.01)
    });

    it("should have a BMI Message in metric", function() {
      person.calculate_bmi_metric();
      expect(person.bmiMessage).toEqual("Overweight")
    });
  });



  describe('imperial units', function() {
    beforeEach(function() {
      person = new Person({weight: 198, height: 73});
    });

    it('should have weight of 198', function() {
      expect(person.weight).toEqual(198);
    });

    it('should have height of 73', function() {
      expect(person.height).toEqual(73);
    });

    it('should calculate BMI value', function() {
      person.calculate_bmi_imperial();
      expect(person.bmiValue).toEqual(26.12)
    });

    it('should have BMI Message', function() {
      person.calculate_bmi_imperial();
      expect(person.bmiMessage).toEqual('Overweight')
    });
  });
});

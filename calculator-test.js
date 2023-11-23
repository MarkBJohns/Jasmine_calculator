
it('should calculate the monthly rate correctly', function () {
  const values={
    amount:5000,
    years:3,
    rate:5
  };
  expect(calculateMonthlyPayment(values)).toEqual('149.85');
});


it("should return a result with 2 decimal places", function() {
  const values={
    amount:10043,
    years:8,
    rate:5.8
  };
  expect(calculateMonthlyPayment(values)).toEqual('131.00');
});

it('should account for a rate of 0', function(){
  const values={
    amount:1200,
    years:1,
    rate:0
  };
  expect(calculateMonthlyPayment(values)).toEqual('100.00');
});

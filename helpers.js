const allAges = (data) => {
  const passengersWithAge = data.filter((passenger) => passenger.fields.age !== undefined);
	return passengersWithAge.map((passenger) => passenger.fields.age);
};

const allFares = (data) => {
  const passengersWithFare = data.filter((passenger) => passenger.fields.fare !== undefined);
	return passengersWithFare.map((passenger) => passenger.fields.fare);
};

module.exports = { allFares, allAges };


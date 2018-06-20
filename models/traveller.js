const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const startJourneyLocations = this.journeys.map((journey) => {
    return journey.startLocation;
  });
  return startJourneyLocations
};

Traveller.prototype.getJourneyEndLocations = function () {
  const endJourneyLocations = this.journeys.map((journey) => {
    return journey.endLocation;
  });
  return endJourneyLocations
};

Traveller.prototype.getModesOfTransport = function () {
  const modesOfTransport = this.journeys.map((journey) => {
    return journey.transport;
  })
  return modesOfTransport
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const journeysByTransport = this.journeys.filter((journey) => {
    return journey.transport === transport
  })
  return journeysByTransport
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const journeyOverMinDistance = this.journeys.filter((journey) => {
    return journey.distance > minDistance
  })
  return journeyOverMinDistance
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  let total = this.journeys.reduce((acc, journey) => {
    return acc + journey.distance
  }, 0)
  return total;
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const result = this.getModesOfTransport().filter((transport, index, array) => {
    return array.indexOf(transport) === index;
  })
  return result;
};


module.exports = Traveller;

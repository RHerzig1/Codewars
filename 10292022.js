// Return breakeven point of two payment systems

function movie(card, ticket, perc) {
  let numberOfTickets = 1
  let systemA = ticket
  let systemB = card + (ticket * perc)
  
  while (systemA <= Math.ceil(systemB)) {
    numberOfTickets++
    systemA += ticket
    systemB += ticket * (perc ** numberOfTickets)
  }

return numberOfTickets
};

// Parameters are the cost of a card, cost of a ticket, and percentage of cost of a ticket when using the card.
// Return the number of tickets that must be purchased before it's more cost effective to purchase the card and the discounted tickets.
// Declare a systemA variable equal to 0.
// Declare a systemB variable equal to 0.
// Declare a numberOfTickets variable equal to 0.
// Create a while loop that runs while systemA is smaller or equal to systemB.
// Do math stuff. Round up to nearest dollar.
// Increment and reassign values.
// Return numberOfTickets.
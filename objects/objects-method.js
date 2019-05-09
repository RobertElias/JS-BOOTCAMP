let restaurant = 
{

    name: 'ASB',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (partySize) {
        
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
        
    }, 
    //seatParty
    seatParty: function(partySize) {
        this.guestCount = this.guestCount + partySize
    },
    //removeParty
    removeParty: function(partySize) {
        this.guestCount = this.guestCount - partySize
    }
}


restaurant.seatParty(75)
console.log(restaurant.checkAvailability(5))

restaurant.removeParty(5)
console.log(restaurant.checkAvailability(5))

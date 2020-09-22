let restaurant = {
    name: 'RPM',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (partySize){
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft

    },
    seatParty: function(seats) {
        this.guestCount = this.guestCount + seats
    },
    removeParty: function(seats) {
        this.guestCount = this.guestCount - seats


    }
}

restaurant.seatParty(72)
console.log(restaurant.checkAvailability(4)) //false
restaurant.removeParty(5)
console.log(restaurant.checkAvailability(4))//true
const users = [{

    reference: 6576534,
    user_id: 15,
    amount: 1000,
    amountWithFees: 1030,
    amountReceived: 1060,
    qualityCheck:{
        invalidEmail: true,
        duplicatedPayment: false,
        AmountTreshold: false
    },
    overPayment: true,
    underPayment: false
},
    {
        reference: 12312312,
        user_id: 12,
        amount: 300,
        amountWithFees: 305,
        amountReceived: 290,
        qualityCheck: {
            invalidEmail: true,
            duplicatedPayment: false,
            AmountTreshold: false
        },
        overPayment: false,
        underPayment: true
    }
]

exports.booking_with_quality_check = users

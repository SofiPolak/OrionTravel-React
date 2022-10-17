const datosUsuario = [
    {
        "idUsuario": "1",
        "id": "Travel1",
        "type": "Travel",
        "title": "Mi Viaje",
        "startDate": "2022-09-24",
        "endDate": "2022-09-30",
        "budget": 1500.00,
        "expenses": [
            {
                "type": "Expense",
                "title": "Papitas",
                "currency": "ARS",
                "amount": 200,
                "category": "Food",
                "paymentMethod": "Cash",
                "date": "2022-09-24"
            },
            {
                "type": "Expense",
                "title": "Palitos",
                "currency": "ARS",
                "amount": 400,
                "category": "Food",
                "paymentMethod": "Tarjeta",
                "date": "2022-09-24"
            }
        ]
    },
    {
        "idUsuario": "1",
        "id": "Travel2",
        "type": "Travel",
        "title": "Mi Viaje2",
        "startDate": "2022-09-24",
        "endDate": "2022-09-30",
        "budget": 1200.00,
        "expenses": [
            {
                "type": "Expense",
                "title": "Papitas2",
                "currency": "ARS",
                "amount": 200,
                "category": "Food",
                "paymentMethod": "Cash",
                "date": "2022-09-24"
            }
        ]
    }
]

export default datosUsuario;
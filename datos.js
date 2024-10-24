/*const url = 'https://hotels-com-provider.p.rapidapi.com/v2/hotels/offers?checkin_date=2023-09-26&checkout_date=2023-09-27&adults_number=1&hotel_id=1105156&domain=AE&locale=en_GB&children_ages=4%2C0';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '137d0b63bbmsha7eddce050e034ep1d9ccfjsn9fb7955cb88a',
		'X-RapidAPI-Host': 'hotels-com-provider.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}*/

export let rooms = {
    "rooms1":[
        {
            "type":"Single Room",
            "beds":"single bed",
            "dimentions": "15mts",
            "includes": [
                "wifi", "jacuzzi", "phone"
            ],
            "imagen": [
                "https://cf.bstatic.com/xdata/images/hotel/max1024x768/14856976.jpg?k=770c6da91a4208f4dfec8add6d039a50b04acafc483a7069ba6cf581c50d363c&o=&hp=1",
                "https://cf.bstatic.com/images/hotel/max1024x768/533/53301474.jpg",
                "https://cf.bstatic.com/images/hotel/max1024x768/185/18521146.jpg"
            ],
            "price": "10 USD",
            "freeRoom": "2024-10-01",
            "closeRoom":"active"
        },
        {
            "type":"Doble Room",
            "beds":"Doble bed",
            "dimentions": "18mts",
            "includes": [
                "wifi", "jacuzzi", "Citofono", "desayuno","Parqueadero"
            ],
            "imagen": [
                "https://cf.bstatic.com/xdata/images/hotel/max1024x768/18521249.jpg?k=d6806b6f9196e1d9adf2ae2c88098b6c7ac3025a7ba9bec065262175ab40fac4&o=&hp=1",
                "https://cf.bstatic.com/xdata/images/hotel/max1024x768/247290536.jpg?k=5071d3ff3f2a44c585468c2a7ea5d50a693ca6c1aed7012c7166a0a97acd7318&o=&hp=1",
                "https://cf.bstatic.com/xdata/images/hotel/max1024x768/18521250.jpg?k=f7452404c48be21ce98840715a0a99c3885f721c146f4ce6781f5f3d107df443&o=&hp=1"
            ],
            "price": "18 USD",
            "freeRoom": "2024-12-01",
            "closeRoom":"active"
        },
        {
            "type":"Single Room",
            "beds":"single bed",
            "dimentions": "12mts",
            "includes": [
                "wifi", "jacuzzi", "Citofono", "desayuno","Parqueadero"
            ],
            "imagen": [
                "https://cf.bstatic.com/xdata/images/hotel/max1024x768/18521151.jpg?k=450d8e85d4afd068f4d5ee5112d81732f88961426ab047316420cd9915bd137d&o=&hp=1",
                "https://cf.bstatic.com/images/hotel/max1024x768/533/53301474.jpg",
                "https://cf.bstatic.com/xdata/images/hotel/max1024x768/263843533.jpg?k=0dad148bc39479c430390d59625aece7f81a05874050541ddfc537852d4f6047&o=&hp=1"
            ],
            "price": "11 USD",
            "freeRoom": "2025-01-01",
            "closeRoom":"active"
        },
        {
            "type":"Single Room",
            "beds":"single bed",
            "dimentions": "11mts",
            "includes": [
                "wifi", "bath", "tv", "cutlery","Parqueadero", "piscina"
            ],
            "imagen": [
                "https://cf.bstatic.com/xdata/images/hotel/max1024x768/263692368.jpg?k=bd287714323d5af6b83b67cf10af8c539ebd99ed45c53be134bbb2ed8950fa07&o=&hp=1",
                "https://cf.bstatic.com/xdata/images/hotel/max1024x768/138110044.jpg?k=3d46a8d11663c8c54c967147d6baa9b7cc6aa2181bcb79a9ba82a1a9d2413403&o=&hp=1",
                "https://cf.bstatic.com/xdata/images/hotel/max1024x768/285103868.jpg?k=126bb19a8575cdc0c90b406ab31fff95f5bbe07deab862bafe7c85eaf7bbe949&o=&hp=1"
            ],
            "price": "25 USD",
            "freeRoom": "2025-02-01",
            "closeRoom":"active"
        },
        {
            "type":"Doble Room",
            "beds":"doble bed",
            "dimentions": "15mts",
            "includes": [
                "wifi", "bath", "phone"
            ],
            "imagen": [
                "https://cf.bstatic.com/xdata/images/hotel/max1024x768/14856976.jpg?k=770c6da91a4208f4dfec8add6d039a50b04acafc483a7069ba6cf581c50d363c&o=&hp=1",
                "https://cf.bstatic.com/images/hotel/max1024x768/533/53301474.jpg",
                "https://cf.bstatic.com/images/hotel/max1024x768/185/18521146.jpg"
            ],
            "price": "10 USD",
            "freeRoom": "2025-03-01",
            "closeRoom":"active"
        },
        {
            "type":"Single Room",
            "beds":"single bed",
            "dimentions": "15mts",
            "includes": [
                "wifi", "bath", "phone"
            ],
            "imagen": [
                "https://cf.bstatic.com/xdata/images/hotel/max1024x768/14856976.jpg?k=770c6da91a4208f4dfec8add6d039a50b04acafc483a7069ba6cf581c50d363c&o=&hp=1",
                "https://cf.bstatic.com/images/hotel/max1024x768/533/53301474.jpg",
                "https://cf.bstatic.com/images/hotel/max1024x768/185/18521146.jpg"
            ],
            "price": "10 USD",
            "freeRoom": "2025-04-01",
            "closeRoom":"active"
        },
        {
            "type":"Single Room",
            "beds":"single bed",
            "dimentions": "15mts",
            "includes": [
                "wifi", "bath", "phone"
            ],
            "imagen": [
                "https://cf.bstatic.com/xdata/images/hotel/max1024x768/14856976.jpg?k=770c6da91a4208f4dfec8add6d039a50b04acafc483a7069ba6cf581c50d363c&o=&hp=1",
                "https://cf.bstatic.com/images/hotel/max1024x768/533/53301474.jpg",
                "https://cf.bstatic.com/images/hotel/max1024x768/185/18521146.jpg"
            ],
            "price": "10 USD",
            "freeRoom": "2025-05-01",
            "closeRoom":"active"
        },
        {
            "type":"Single Room",
            "beds":"single bed",
            "dimentions": "15mts",
            "includes": [
                "wifi", "bath", "phone"
            ],
            "imagen": [
                "https://cf.bstatic.com/xdata/images/hotel/max1024x768/14856976.jpg?k=770c6da91a4208f4dfec8add6d039a50b04acafc483a7069ba6cf581c50d363c&o=&hp=1",
                "https://cf.bstatic.com/images/hotel/max1024x768/533/53301474.jpg",
                "https://cf.bstatic.com/images/hotel/max1024x768/185/18521146.jpg"
            ],
            "price": "10 USD",
            "freeRoom": "2025-06-01",
            "closeRoom":"active"
        },
        {
            "type":"Single Room",
            "beds":"single bed",
            "dimentions": "15mts",
            "includes": [
                "wifi", "bath", "phone"
            ],
            "imagen": [
                "https://cf.bstatic.com/xdata/images/hotel/max1024x768/14856976.jpg?k=770c6da91a4208f4dfec8add6d039a50b04acafc483a7069ba6cf581c50d363c&o=&hp=1",
                "https://cf.bstatic.com/images/hotel/max1024x768/533/53301474.jpg",
                "https://cf.bstatic.com/images/hotel/max1024x768/185/18521146.jpg"
            ],
            "price": "10 USD",
            "freeRoom": "2025-06-01",
            "closeRoom":"active"
        },
        {
            "type":"Single Room",
            "beds":"single bed",
            "dimentions": "15mts",
            "includes": [
                "wifi", "bath", "phone"
            ],
            "imagen": [
                "https://cf.bstatic.com/xdata/images/hotel/max1024x768/14856976.jpg?k=770c6da91a4208f4dfec8add6d039a50b04acafc483a7069ba6cf581c50d363c&o=&hp=1",
                "https://cf.bstatic.com/images/hotel/max1024x768/533/53301474.jpg",
                "https://cf.bstatic.com/images/hotel/max1024x768/185/18521146.jpg"
            ],
            "price": "10 USD",
            "freeRoom": "2024-12-01",
            "closeRoom":"active"
        },
        {
            "type":"Single Room",
            "beds":"single bed",
            "dimentions": "15mts",
            "includes": [
                "wifi", "bath", "phone"
            ],
            "imagen": [
                "https://cf.bstatic.com/xdata/images/hotel/max1024x768/14856976.jpg?k=770c6da91a4208f4dfec8add6d039a50b04acafc483a7069ba6cf581c50d363c&o=&hp=1",
                "https://cf.bstatic.com/images/hotel/max1024x768/533/53301474.jpg",
                "https://cf.bstatic.com/images/hotel/max1024x768/185/18521146.jpg"
            ],
            "price": "10 USD",
            "freeRoom": "2024-11-01",
            "closeRoom":"active"
        },
        {
            "type":"Single Room",
            "beds":"single bed",
            "dimentions": "15mts",
            "includes": [
                "wifi", "bath", "phone"
            ],
            "imagen": [
                "https://cf.bstatic.com/xdata/images/hotel/max1024x768/14856976.jpg?k=770c6da91a4208f4dfec8add6d039a50b04acafc483a7069ba6cf581c50d363c&o=&hp=1",
                "https://cf.bstatic.com/images/hotel/max1024x768/533/53301474.jpg",
                "https://cf.bstatic.com/images/hotel/max1024x768/185/18521146.jpg"
            ],
            "price": "10 USD",
            "freeRoom": "2025-01-01",
            "closeRoom":"active"
        },
        {
            "type":"Single Room",
            "beds":"single bed",
            "dimentions": "15mts",
            "includes": [
                "wifi", "bath", "phone"
            ],
            "imagen": [
                "https://cf.bstatic.com/xdata/images/hotel/max1024x768/14856976.jpg?k=770c6da91a4208f4dfec8add6d039a50b04acafc483a7069ba6cf581c50d363c&o=&hp=1",
                "https://cf.bstatic.com/images/hotel/max1024x768/533/53301474.jpg",
                "https://cf.bstatic.com/images/hotel/max1024x768/185/18521146.jpg"
            ],
            "price": "10 USD",
            "freeRoom": "2024-09-01",
            "closeRoom":"active"
        },
        {
            "type":"Single Room",
            "beds":"single bed",
            "dimentions": "15mts",
            "includes": [
                "wifi", "bath", "phone"
            ],
            "imagen": [
                "https://cf.bstatic.com/xdata/images/hotel/max1024x768/14856976.jpg?k=770c6da91a4208f4dfec8add6d039a50b04acafc483a7069ba6cf581c50d363c&o=&hp=1",
                "https://cf.bstatic.com/images/hotel/max1024x768/533/53301474.jpg",
                "https://cf.bstatic.com/images/hotel/max1024x768/185/18521146.jpg"
            ],
            "price": "10 USD",
            "freeRoom": "2025-02-01",
            "closeRoom":"active"
        }
    ]
}


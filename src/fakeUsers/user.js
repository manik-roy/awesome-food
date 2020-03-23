const users = [
    {
        "id": 1,
        "name": "Hector Duran",
        "username": "Hector_D",
        "email": "hectord123@vul.com",
        "image": "https://randomuser.me/api/portraits/men/5.jpg",
        "background": "https://images.unsplash.com/photo-1496507161348-aeec0403f141?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        "phone": "1-770-736-8036",
        "website": "hectorduran.org",
        "salary": 500000,
		"address": "New York, USA"
    },
    {
        "id": 2,
        "name": "Kaylin Stout",
        "username": "KStout",
        "email": "kaylins1991@vul.com",
        "image": "https://randomuser.me/api/portraits/women/72.jpg",
        "background": "https://images.unsplash.com/photo-1489276881971-eaa6ab4b6752?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        "phone": "1-670-733-8032",
        "website": "kaylinstout.org",
        "salary": 100000,
		"address": "Florida, USA"
    },
    {
        "id": 3,
        "name": "Damon Tran",
        "username": "TheTran",
        "email": "damthetran@vul.com",
        "image": "https://randomuser.me/api/portraits/men/1.jpg",
        "background": "https://images.unsplash.com/photo-1517056592025-0e4b9bda8618?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
        "phone": "1-679-232-6032",
        "website": "damontran.org",
        "salary": 250000,
		"address": "Alaska, USA"
    },
    {
        "id": 4,
        "name": "Sean Orozco",
        "username": "Sean_O",
        "email": "orozco.sean@vul.com",
        "image": "https://randomuser.me/api/portraits/men/77.jpg",
        "background": "https://images.unsplash.com/photo-1431032843361-ec2cd229c751?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        "phone": "1-970-736-1136",
        "website": "seanorozco.org",
        "salary": 300000,
		"address": "California, USA"
    },
    {
        "id": 5,
        "name": "Felicity Esparza",
        "username": "FelicityS",
        "email": "felicityqueen@vul.com",
        "image": "https://randomuser.me/api/portraits/women/40.jpg",
        "background": "https://images.unsplash.com/photo-1486065501750-23ac4604c414?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        "phone": "1-670-733-1239",
        "website": "felicityesparza.org",
        "salary": 600000,
		"address": "Utah, USA"
    },
    {
        "id": 6,
        "name": "Jair Martin",
        "username": "MrMartini",
        "email": "jairmartin@vul.com",
        "image": "https://randomuser.me/api/portraits/men/41.jpg",
        "background": "https://images.unsplash.com/photo-1506824547206-4944534291d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=774&q=80",
        "phone": "1-679-912-6032",
        "website": "jairmartin.org",
        "salary": 350000,
		"address": "Washington D.C, USA"
    },
    {
        "id": 7,
        "name": "Harmony Merritt",
        "username": "HarMer",
        "email": "harmony111@vul.com",
        "image": "https://randomuser.me/api/portraits/women/21.jpg",
        "background": "https://images.unsplash.com/photo-1431683535750-2b9b2371efb7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        "phone": "1-210-736-4556",
        "website": "harmonymerritt.org",
        "salary": 450000,
		"address": "London, UK"
    },
    {
        "id": 8,
        "name": "Omar Crawford",
        "username": "OCraw",
        "email": "omarcrawford@vul.com",
        "image": "https://randomuser.me/api/portraits/men/54.jpg",
        "background": "https://images.unsplash.com/photo-1521405305633-c75900143740?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=755&q=80",
        "phone": "1-670-733-1090",
        "website": "omarcrawford.org",
        "salary": 220000,
		"address": "Los Angels, USA"
    },
    {
        "id": 9,
        "name": "Brenna David",
        "username": "BreDave",
        "email": "brennadavid@vul.com",
        "image": "https://randomuser.me/api/portraits/women/71.jpg",
        "background": "https://images.unsplash.com/photo-1445262801997-d50c1f12cb4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        "phone": "1-619-895-3093",
        "website": "brennadavid.org",
        "salary": 470000,
		"address": "New York, USA"
    },
    {
        "id": 10,
        "name": "Janelle Charles",
        "username": "JaneCharles",
        "email": "janelle101@vul.com",
        "image": "https://randomuser.me/api/portraits/women/50.jpg",
        "background": "https://images.unsplash.com/photo-1534521296698-8ab27b628bf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=890&q=80",
        "phone": "1-970-736-1136",
        "website": "janecharles.org",
        "salary": 315000,
		"address": "London, UK",
    },
    {
        "id": 11,
        "name": "Vincent Wall",
        "username": "theWall",
        "email": "vthewall@vul.com",
        "image": "https://randomuser.me/api/portraits/men/11.jpg",
        "background": "https://images.unsplash.com/photo-1536677893464-7ea19355bbc9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        "phone": "1-110-733-7897",
        "website": "vincentwall.org",
        "salary": 105000,
		"address": "Washington D.C, USA"

    },
    {
        "id": 12,
        "name": "Damian Walters",
        "username": "DamWalt",
        "email": "damianwalters@vul.com",
        "image": "https://randomuser.me/api/portraits/men/52.jpg",
        "background": "https://images.unsplash.com/photo-1529552211908-f76609073378?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=875&q=80",
        "phone": "1-420-932-1783",
        "website": "damianwalters.org",
        "salary": 375000,
		"address": "Utah, USA"
    },
    {
        "id": 13,
        "name": "Francesca Torres",
        "username": "Frances",
        "email": "francescat23@vul.com",
        "image": "https://randomuser.me/api/portraits/women/26.jpg",
        "background": "https://images.unsplash.com/photo-1524878937320-aff106b195ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        "phone": "1-202-555-0123",
        "website": "francescatorres.org",
        "salary": "210000",
		"address": "New York, USA"
    },
    {
        "id": 14,
        "name": "Jeremiah Andrade",
        "username": "andAndrade",
        "email": "andjeremiah@vul.com",
        "image": "https://randomuser.me/api/portraits/women/62.jpg",
        "background": "https://images.unsplash.com/photo-1528732807373-00017d0cb032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        "phone": "1-202-555-0150",
        "website": "andradejeremiah.org",
        "salary": 113000,
		"address": "Washington D.C, USA"
    },
    {
        "id": 15,
        "name": "Daniella Andrews",
        "username": "dfordaniella",
        "email": "dannyand@vul.com",
        "image": "https://randomuser.me/api/portraits/women/90.jpg",
        "background": "https://images.unsplash.com/photo-1506744476757-8407c4647c7f?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        "phone": "1-202-555-0114",
        "website": "daniellaandrews.org",
        "salary": 160000,
		"address": "New York, USA"
    }
]

function shuffleUsers(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}


const fakeUsers = shuffleUsers(users)

export default fakeUsers;
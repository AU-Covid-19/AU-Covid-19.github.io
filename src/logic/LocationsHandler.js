import CONFIG from "../config";


const Locations = {
    getLocation: (id) => {
        return new Promise((resolve, reject) => {
            fetch(CONFIG.URL + CONFIG.BASE)
                .then(response => response.json())
                .then(data => {
                    for(var i = 0; i < data.locations.length; i++) {
                        if (data.locations[i].id == id) {
                            const URL = CONFIG.URL + data.locations[i].filename;
                            fetch(URL)
                                .then(response => response.json())
                                .then(data => {
                                    // Check Data Source matches version number
                                    if(data.version == CONFIG.SUPPORTED_VERSION) {
                                        resolve(data);
                                    } else {
                                        console.log("VERSION MISMATCH");
                                        reject();
                                    }
                                })
                        }
                    }  
                })
        });
    },
    getCurrentDay: (data) => {    
        const Sorted = data.days.slice().sort((a, b) => (a.time < b.time) ? 1 : -1)

        return Sorted[0];
    }
}

export default Locations;
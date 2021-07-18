const VICTORIA = {
    CoreInfomation: (todayData) => {
        return [
            {"name": "Deaths", "data": todayData.deaths},
            {"name": "Overseas Cases", "data": todayData.caseNumbers.overseas},
            {"name": "Local Cases", "data": todayData.caseNumbers.local},
            {"name": "Interstate Cases", "data": todayData.caseNumbers.interstate},
            {"name": "Tests", "data": todayData.tests},
        ];
    }
}

export default VICTORIA;
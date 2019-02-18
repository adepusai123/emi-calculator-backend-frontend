import WelcomeService from "../../services/v1/welcome_service";

export default class GreetingController {
    constructor(){}
    static welcome(request, response, next){
        let greetings = WelcomeService.welcome();
        response.send(greetings);
    }

    async getEMI(request, response, next){
        try {
            let rate = request.query.rate ? request.query.rate : request.body.rate,
                pv = request.query.pv ? request.query.pv : request.body.pv,
                nper = request.query.nper ? request.query.nper : request.body.nper;
            if(rate && pv && nper){
                let emi = await WelcomeService.prototype.calculateEMI(rate, nper, pv);
                let out = {
                    pv: pv, rate : rate, nper:nper, emi:-Number(emi.toFixed(2))
                }
                return response.send(out);
            } 
            return response.send("pv, nper, rate missing in query params !")
        } catch (error) {
            next(error)
        }
    }
    async getEmiTable(request, response, next){
        try {
            let rate = request.query.rate, pv = request.query.pv, nper = request.query.nper;
            if(rate && pv && nper){
                let emi = await WelcomeService.prototype.calculateEMI(rate, nper, pv);
                emi = Number(emi.toFixed(2));
                let table = await WelcomeService.prototype.generateEmiTable(rate, nper, pv, emi);
                emi = -emi;
                return response.json({table, emi});
            }
            return response.send("pv, nper, rate missing in query params !")
        } catch (error) {
            next(error);
        }
    }
}
import InovandoController from "@ioc:Inovando/Controller";
import FileRepository from "@ioc:FileRepository";
export default class AppsController extends InovandoController {
    constructor() {
        super(['descricao', 'letra', 'nivel'])
        this.repository = FileRepository
        this.validators = {
            store: {
                validatorClass: {},
            },
            update: {
                validatorClass: {},
            },
        }
        this.transformer = {}
        //console.log(this.repository.index)
    }
}

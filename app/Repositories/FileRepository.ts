import CrudRepository from "@ioc:Inovando/CrudRepository"

export default class FileRepository extends CrudRepository {
    protected model: any
    constructor({ model }) {
        super()
        console.log(model)
        console.log("FIleREpo")
    }
}

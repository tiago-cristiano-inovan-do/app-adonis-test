

declare module '@ioc:FileRepository' {
    import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext"

    interface FileRepositoryType {
        new({ model }): {
            index(ctx: HttpContextContract)
        }

    }

    const FileRepositoryService: FileRepositoryType
    export default FileRepositoryService
}

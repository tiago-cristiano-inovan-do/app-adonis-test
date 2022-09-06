import { ApplicationContract } from '@ioc:Adonis/Core/Application'

export default class FileRepositoryProvider {
  constructor(protected app: ApplicationContract) { }
  public static needsApplication = true

  public async register() {
    const FileRepository = (await import('App/Repositories/FileRepository')).default
    const File = (await import('App/Models/File')).default
    const CrudRepository = (await import('@ioc:Inovando/CrudRepository')).default

    console.log(JSON.stringify(CrudRepository))
    return this.app.container.bind('FileRepository', () => new FileRepository({ model: File }))
  }

  public async boot() {
    // All bindings are ready, feel free to use them
  }

  public async ready() {
    // App is ready
  }

  public async shutdown() {
    // Cleanup, since app is going down
  }
}

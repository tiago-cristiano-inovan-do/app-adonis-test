import Env from '@ioc:Adonis/Core/Env'
import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, computed } from '@ioc:Adonis/Lucid/Orm'
export default class File extends BaseModel {
    @column({ isPrimary: true })
    public id: string

    @column.dateTime({ autoCreate: true })
    public createdAt: DateTime

    @column.dateTime({ autoCreate: true, autoUpdate: true })
    public updatedAt: DateTime

    @column()
    public status: boolean

    @column()
    public name: string

    @column()
    public path: string

    @column()
    public user_id: string

    @belongsTo(() => User, {
        foreignKey: 'user_id',
    })
    public user: BelongsTo<typeof User>

    @computed()
    public get url() {
        const url = Env.get('APP_URL')
        return `${url}/files/asset/${this.id}`
    }
}

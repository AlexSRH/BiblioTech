import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class addBooks1601067771251 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'books',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment'
          },
          {
            name: 'user_id',
            type: 'integer',
            isNullable: false
          },
          {
            name: 'name',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'author',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'description',
            type: 'varchar'
          }
        ],
        foreignKeys: [
          {
            columnNames: ['user_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'users',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
          }
        ]
      }),
      true
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('books')
  }
}

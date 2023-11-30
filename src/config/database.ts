import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

export async function databaseConfig(): Promise<TypeOrmModuleOptions> {
  console.log("Init database config");

  const configService = new ConfigService();

  return {
    type: 'postgres',
    host: configService.get("DB_HOST"),
    port: Number(configService.get("DB_PORT")),
    username: configService.get("DB_USERNAME"),
    password: configService.get("DB_PASSWORD"),
    database: configService.get("DB_DATABASE"),
    // "entities": [
    //   "src/**/*.entity.ts"
    // ],
    synchronize: true,
    "migrations": [
      "src/migration/**/*.ts"
    ],
    "subscribers": [
      "src/subscriber/**/*.ts"
    ]
  };
}

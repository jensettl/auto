/*
 * Copyright (C) 2016 - present Juergen Zimmermann, Hochschule Karlsruhe
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

/**
 * Das Modul enthält die Konfigurationsdaten für
 * - _Node_
 * - DB-Zugriff auf _MongoDB_
 * - _JWT_ (JSON Web Token)
 * - Logging mit _Winston_
 * - MIME-Typen
 * - _nodemailer_
 * @packageDocumentation
 */

export { Cloud, cloud } from './cloud';
export { dbConfig } from './db';
export { testdaten, testfiles, users } from './dev';
export { graphQlConfig } from './graphql';
export { jwtConfig } from './jwt';
export { k8sConfig } from './kubernetes';
export { parentLogger } from './logger';
export { mailConfig } from './mail';
export { configDir, nodeConfig } from './node';
export { paths } from './paths';

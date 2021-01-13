
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class User {
    id: string;
    email: string;
}

export abstract class IQuery {
    abstract user(id: string): User | Promise<User>;
}

export abstract class IMutation {
    abstract login(email?: string): string | Promise<string>;
}

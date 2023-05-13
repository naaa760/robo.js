import type { PermissionsString } from 'discord.js'
import type { CommandEntry } from './commands.js'
import type { Config, Scope } from './config.js'
import type { EventConfig } from './events.js'

export interface Manifest {
	__README: string
	__robo: {
		config: Config | null
		type: 'plugin' | 'robo'
		updatedAt?: string
		version?: string
	}
	commands: Record<string, CommandEntry>
	events: Record<string, EventConfig[]>
	permissions?: PermissionsString[] | number
	scopes?: Scope[]
}

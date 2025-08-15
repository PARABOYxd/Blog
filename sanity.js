import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
    api: {
        projectId: '3j94hd6b',
        dataset: 'production'
    },
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/cli#auto-updates
     */
    autoUpdates: true,
})

export type AppConfig = {
    apiPrefix: string
    authenticatedEntryPath: string
    unAuthenticatedEntryPath: string
    locale: string
    enableMock: boolean
}

const appConfig: AppConfig = {
    apiPrefix: 'https://crmapi.sarvadhi.work/api/v1',
    authenticatedEntryPath: '/app/dashboard',
    unAuthenticatedEntryPath: '/sign-in',
    locale: 'en',
    enableMock: false,
}

export default appConfig

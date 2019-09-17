module.exports = {
  base: '/',
  title: 'KGrid Demo',
  themeConfig: {
    // repo: 'kgrid-demos/kgrid-demos.github.io',
    lastUpdated: 'Last Updated',
    nav: [
      { text: 'KGrid.org', link: 'https://kgrid.org' },
      { text: 'KO Collections', link: 'https://kgrid-objects.github.io' },
      // { text: 'apps', link: '/apps/' },
      { text: 'External Links',
              items: [
                { text: 'KO Service in Swagger Editor', link: 'https://editor.swagger.io/?url=https://activator.kgrid.org/kos/hello/world/v0.1.0/service' },
                { text: 'SMART on FHIR STU3 Sandbox Patient Browser', link: 'https://patient-browser.smarthealthit.org/index.html?config=r3#/' },
                { text: 'SMART on FHIR App Launcher', link: 'https://launch.smarthealthit.org' },
              ]
      }
    ],
    search: true,
    searchMaxSuggestions: 10,
    sidebar: true,
    displayAllHeaders: true
  }
}

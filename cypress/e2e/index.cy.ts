describe('Check episode flow', () => {
  it('Page has a podcasts list', () => {
    cy.visit('http://localhost:3001')
    cy.get('#top-100-podcasts-list').should('be.visible')
  })
  it("Podcast has visible image", () => {
    cy.visit('http://localhost:3001')
    const firstPodcastCard = cy.get('.podcast-card').first();
    firstPodcastCard.click()
    cy.get('img').should('be.visible')
  })
  it("Episode has audio", () => {
    cy.visit('http://localhost:3001')
    const firstPodcastCard = cy.get('.podcast-card').first();
    firstPodcastCard.click()
    const firstEpisode = cy.get('#podcast-table a').first();
    firstEpisode.click()
    cy.get('audio').first().should('be.visible')
  })
})
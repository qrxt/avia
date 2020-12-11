export default class AviaService {
  constructor(client = window.fetch.bind(window)) {
    this.client = client;
    this.apiBase = 'https://front-test.beta.aviasales.ru';
  }

  async getResource(url) {
    const response = await fetch(`${this.apiBase}${url}`);

    if (!response.ok) {
      throw new Error(
        `Could not fetch ${url}, received ${response.status}`,
      );
    }

    return response.json();
  }

  async getSearchCode() {
    const { searchId } = await this.getResource('./search');

    return searchId;
  }

  async getTickets() {
    const searchCode = await this.getSearchCode();

    return this.getResource(`/tickets?searchId=${searchCode}`);
  }
}

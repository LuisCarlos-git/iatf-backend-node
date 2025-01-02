export class CompanyAlreadyExistsError extends Error {
  constructor() {
    super();
    this.message = 'Company already exists.';
    this.name = 'CompanyAlreadyExistsError';
  }
}
